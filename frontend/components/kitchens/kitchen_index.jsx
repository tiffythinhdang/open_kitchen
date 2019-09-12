import React from 'react';

import KitchenIndexItem from './kitchen_index_item';

class KitchenIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="kitchen-index container">
        {
          this.props.kitchens.map(kitchen => 
            <KitchenIndexItem 
              key={kitchen.id} 
              kitchen={kitchen}
              fetchAKitchen={this.props.fetchAKitchen} 
            />
          )
        }
      </div>
    )
  }
}

export default KitchenIndex;