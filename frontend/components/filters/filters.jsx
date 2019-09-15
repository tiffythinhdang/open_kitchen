import React from 'react';

import PriceFilterContainer from './filter_price_container';
// import CityFilterContainer from './filter_city_container';
import CuisineFilterContainer from './filter_cuisine_container';
import RatingFilterContainer from './filter_rating_container';

class Filters extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="filter-options">
        <PriceFilterContainer />
        <RatingFilterContainer />
        {/* <CityFilterContainer /> */}
        <CuisineFilterContainer />
      </div>
    )
  }
}

export default Filters;