import React from 'react';

import { EMOJIS } from '../../util/emojis_util';

import KitchenIndexItem from './kitchen_index_item';

class KitchenIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  displayRandomEmoji(){
    return EMOJIS[ Math.floor( Math.random() * EMOJIS.length ) ];
  }

  render() {
    if (this.props.kitchens.length === 0) {
      return (
        <div className="kitchen-index notfound container">
          <h1>{this.displayRandomEmoji()}</h1>
          <h3>No kitchen found...</h3>
        </div>
      )
    }
    return (
      <div className="kitchen-index container">
        {
          this.props.kitchens.map(kitchen => 
            <KitchenIndexItem 
              key={kitchen.id} 
              kitchen={kitchen}
              currentUser={this.props.currentUser}
              fetchAKitchen={this.props.fetchAKitchen}
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
            />
          )
        }
      </div>
    )
  }
}

export default KitchenIndex;