import React from 'react';

import PriceFilterContainer from './filter_price_container';
import CuisineFilterContainer from './filter_cuisine_container';
import RatingFilterContainer from './filter_rating_container';

class Filters extends React.Component {
  constructor(props){
    super(props);
  }

  closeFilter() {
    let filters = document.querySelector(".filter-options");
    filters.style.display = "none";
  }

  render() {
    return(
      <div className="filter-options">
        <span
          className="filter-close"
          onClick={this.closeFilter}>
          &times;
        </span>
        <PriceFilterContainer />
        <RatingFilterContainer />
        <CuisineFilterContainer />
      </div>
    )
  }
}

export default Filters;