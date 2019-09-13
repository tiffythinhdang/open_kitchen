import React from 'react';
import iconStarGray from 'assets/images/medium_icon_star_gray.png'; 
import iconStarGold from 'assets/images/medium_icon_star_gold.png'; 
import iconStarHalf from 'assets/images/medium_icon_star_half_gold.png'; 
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

  const displayRatings = (rating) => {
    const stars = [];
    // add 2 for a full star, 1 for half-star, 0 for no star
    for (let i = 1; i < 6; i ++) {
      if (!rating || rating - i < 0 ) {
        stars.push(0);
      } else if ( rating - i >= 0 ){
        stars.push(2);
      } 
    };

    if (Math.round(rating) - rating > 0) {
      stars.pop();
      stars.push(1);
    } 

    return stars.sort().reverse().map( (star, i) => {
      if (star === 2) {
        return <img key={i} className="medium star" src={iconStarGold} alt="star" />
      } else if (star === 1) {
        return <img key={i} className="medium star" src={iconStarHalf} alt="star" />
      } else {
        return <img key={i} className="medium star" src={iconStarGray} alt="star" />
      }
    });
  }

  return (
    <div className="kitchen basic-infor">
      <div className="rating">
        { displayRatings(averageRating) }
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