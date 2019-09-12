import React from 'react';
import iconStarGray from 'assets/images/medium_icon_star_gray.png';

class KitchenIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  displayRatings(){
    if (!this.props.kitchen.average_rating) {
      return (
        <div className="rating">
          <img className="medium star" src={iconStarGray} alt="star"/>
          <img className="medium star" src={iconStarGray} alt="star"/>
          <img className="medium star" src={iconStarGray} alt="star"/>
          <img className="medium star" src={iconStarGray} alt="star"/>
          <img className="medium star" src={iconStarGray} alt="star"/>
        </div>
      )
    }
  }

  displayPrice(){
    switch (this.props.kitchen.cost) {
      case 2:
        return "$$";
      
      case 3:
        return "$$$";

      case 4:
        return "$$$$";

      default:
        return "";
    }
  }

  render() {
    return (
      <div className="kitchen-index item-container">
        <div className="kitchen-index item profile-img">
          <img src="https://content.phuket101.net/wp-content/uploads/20190731181616/phuket-cooking-classes.jpg" alt="profile-picture"/>
        </div>

        <div className="kitchen-index item-infor">
          <h3>{this.props.kitchen.name}</h3>

          <div className="kitchen-index item rating-review">
            { this.displayRatings() }
            <p className="review">{this.props.kitchen.numberReviews} reviews</p>
          </div>

          <div className="kitchen-index item cpl">
            <div className="kitchen-index item cuisine">
              <p>Cuisine</p>
              <p className="infor">{this.props.kitchen.cuisine}</p>
            </div>

            <div className="kitchen-index item price">
              <p>Price</p>
              <p className="infor">{this.displayPrice()}</p>
            </div>

            <div className="kitchen-index item location">
              <p>Location</p>
              <p className="infor">{this.props.kitchen.address}</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default KitchenIndexItem;