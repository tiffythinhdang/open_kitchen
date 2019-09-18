import React from 'react';

import RatingDisplay from '../kitchens/rating_display'; 
import displayPrice from '../kitchens/price_display'; 

import iconCutlery from 'assets/images/small_icon_cutlery.png';
import iconReview from 'assets/images/small_icon_review.png';
import iconDollar from 'assets/images/small_icon_dollar.png'; 

class FeaturedKitchenIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.kitchen) return null;
    return (
      <div className="feature-kitchen-index-item container">
        <div className="item profile-img">
          <img
            src="https://content.phuket101.net/wp-content/uploads/20190731181616/phuket-cooking-classes.jpg"
            alt="profile-picture"
          />
        </div>

        <div className="item main-content">
          <h1 className="name">{this.props.kitchen.name}</h1>

          <div className="item rating-and-reviews">
            <div className="rating">
              <RatingDisplay rating={this.props.kitchen.averageRating} />
            </div>
            <div className="reviews">{this.props.kitchen.numberReviews} reviews</div>
          </div>

          <div className="item cuisine-and-price">
            <div className="cuisine">
              <img className="small icon light cutlery" src={iconCutlery} alt="icon cutlery" />
              <a>{this.props.kitchen.cuisine}</a>
            </div>

            <div className="price">
              <img className="small icon light dollar" src={iconDollar} alt="icon dollar" />
              <a>{displayPrice(this.props.kitchen.cost)}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedKitchenIndexItem;