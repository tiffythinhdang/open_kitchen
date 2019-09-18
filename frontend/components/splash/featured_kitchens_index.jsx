import React from 'react';

import FeaturedKitchenIndexItem from './featured_kitchen_idex_item';

class FeaturedKitchenIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const request = {
      date: new Date().toISOString().substr(0, 10),
      time: "12",
      party_size: 2,
      location_id: 1,
    };
    this.props.fetchKitchens(request)
  }

  randomizeKitchens() {
    // let randomIdx = [];
    // const length = this.props.kitchen.length;
    // for (i = 1; i < 5; i ++) {
    //   let idx = Math.floor(Math.random() * length);
    //   if (!randomIdx.includes(idx))
    // }
  }

  render() {
    if (!this.props.kitchens) return null;
    return (
      <div className="feature-kitchen-index container"> 
        <h1 className="featured-title">Popular in San Francisco</h1> 
        <div className="feature-kitchen-index main-content">
          {
            this.props.kitchens.slice(4).map(kitchen =>
              <FeaturedKitchenIndexItem
                key={kitchen.id}
                kitchen={kitchen}
              />
            )
          }
        </div>
      </div>
    )
  }
}

export default FeaturedKitchenIndex;