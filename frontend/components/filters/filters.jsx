import React from 'react';

import PriceFilter from './filter_price';
import CityFilterContainer from './filter_city_container';
import CuisineFilterContainer from './filter_cuisine_container';

class Filters extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="filter-options">
        <PriceFilter />
        <CityFilterContainer />
        <CuisineFilterContainer />
      </div>
    )
  }
}

export default Filters;