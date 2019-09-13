import React from 'react';

import iconStarGray from 'assets/images/medium_icon_star_gray.png'; 
import iconStarGold from 'assets/images/medium_icon_star_gold.png'; 
import iconStarHalf from 'assets/images/medium_icon_star_half_gold.png'; 

const RatingDisplay = (props) => {
    const rating = props.rating;
    const stars = [];

    // add 2 for a full star, 1 for half-star, 0 for no star
    for (let i = 1; i < 6; i++) {
      if (!rating || rating - i < 0) {
        stars.push(0);
      } else if (rating - i >= 0) {
        stars.push(2);
      }
    };

    // check for half-star. Not perfect yet but works
    if (Math.round(rating) - rating > 0) {
      stars.pop();
      stars.push(1);
    }
    
    // map number to corresponding star
    return stars.sort().reverse().map((star, i) => {
      if (star === 2) {
        return <img key={i} className="medium star" src={iconStarGold} alt="star" />
      } else if (star === 1) {
        return <img key={i} className="medium star" src={iconStarHalf} alt="star" />
      } else {
        return <img key={i} className="medium star" src={iconStarGray} alt="star" />
      }
    });
};

export default RatingDisplay;