import React from 'react';

import RatingDisplay from './rating_display';

import iconCutlery from 'assets/images/small_icon_cutlery.png'; 
import iconReview from 'assets/images/small_icon_review.png'; 
import iconDollar from 'assets/images/small_icon_dollar.png'; 

const KitchenBasicInfo = (props) => {
  const { averageRating, numberReviews, cost, cuisine } = props.kitchen;
  const displayPrice = (cost) => {
    if (cost === 2) {
      return "$50 and under";
    } else if (cost === 3) {
      return "$75 and under";
    } else {
      return "$75 or more";
    }
  };

  return (
    <div className="kitchen basic-infor">
      <div className="rating">
        <RatingDisplay rating={averageRating}/>
      </div>

      <div className="num-reviews">
        <img className="small icon review" src={iconReview} alt="icon review"/>
        <a>{numberReviews} reviews</a>
      </div>

      <div className="cost">
        <img className="small icon dollar" src={iconDollar} alt="icon dollar"/>
        <a>{ displayPrice(cost) }</a>
      </div>

      <div className="cusine">
        <img className="small icon cutlery" src={iconCutlery} alt="icon cutlery" />
        <a>{cuisine}</a>
      </div>

    </div>
  )
}

export default KitchenBasicInfo;