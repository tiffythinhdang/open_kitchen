import React from 'react';

import iconCutlery from 'assets/images/small_icon_cutlery.png';
import iconReview from 'assets/images/small_icon_review.png';
import iconDollar from 'assets/images/small_icon_dollar.png'; 
import iconLocation from 'assets/images/small_icon_location.png'; 
import icon5Star from 'assets/images/medium_icon_5_star_gold.png'; 
import icon4Star from 'assets/images/medium_icon_4_star_gold.png'; 
import icon3Star from 'assets/images/medium_icon_3_star_gold.png'; 

class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="price-filter">
        <div className="price-filter title">
          <img  className="small icon dollar" src={iconDollar} alt="icon dollar"/>
          <h3 className="title">Price</h3>
        </div>

        <div className="price-filter items">
          <input type="checkbox" value="2"/><span>$$</span>
          <input type="checkbox" value="3"/><span>$$$</span>
          <input type="checkbox" value="4"/><span>$$$$</span>
        </div>
      </div>
    )
  }
}

export default PriceFilter;