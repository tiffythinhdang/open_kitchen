import React from 'react';
import { Link } from 'react-router-dom';

class MySavedKitchenIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      kitchenId, 
      kitchenName, 
      kitchenRating, 
      kitchenImageUrl, 
      kitchenCuisine, 
      kitchenCost } = this.props.favorite;
    return (
      <div className="saved-kitchen-index item">
        <Link target="_blank" to={`/kitchens/${kitchenId}`}>
          <div className="kitchen-img">
            <img src={kitchenImageUrl} alt="" />
          </div>
        </Link>

        <div className="saved-item main-content">
          <div className="saved-item info">
            <Link target="_blank" to={`/kitchens/${kitchenId}`}>
              <div className="kitchen-name">{kitchenName}</div>
            </Link>
            <div className="kit-rating">{kitchenRating}</div>
            <div className="kit-cusine">{kitchenCuisine}</div>
            <div className="kit-cost">{kitchenCost}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MySavedKitchenIndexItem;