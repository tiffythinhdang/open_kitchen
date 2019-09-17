import React from 'react';

import SearchBarContainer from '../search_bar/search_bar_container';
import KitchenIndexContainer from '../kitchens/kitchen_index_container';
import Filters from './filters';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  applyRatingFilter(kitchens) {
    const ratings = this.props.filters.averageRating;
    if (ratings.length < 1) {
      return kitchens;
    }
    const minRating = Math.min(...ratings);
    return kitchens.filter(kitchen => kitchen.averageRating >= minRating);
  }

  applyEqualityFilters(kitchens) {
    let removedIdx = [];
    const filterCatergories = Object.keys(this.props.filters).filter(cat => 
      cat !== "averageRating"
    );

    for (let i = 0; i < kitchens.length; i++) {
      let currKitchen = kitchens[i];

      for (let j = 0; j < filterCatergories.length; j++) {
        let currCategory = filterCatergories[j];
        let currVals = this.props.filters[currCategory];
        if ( currVals.length === 0 ) {
          continue;
        }

        if ( !currVals.includes( currKitchen[currCategory]) ) {
          removedIdx.push(i);
          break;
        }
      };
    };
    
    if (removedIdx.length > 0) {
      const filteredKitchens = kitchens.filter((kitchen, idx) => !removedIdx.includes(idx));
      return filteredKitchens;
    } else {
      return kitchens;
    }
  }

  applyFilters(kitchens) {
    return this.applyEqualityFilters( this.applyRatingFilter(kitchens) );
  }

  render() {
    return (
      <div className="search-page container">
        <header className="search-page header">
          <SearchBarContainer />
        </header>

        <div className="search-page main-content">
          <Filters />
          <KitchenIndexContainer kitchens={this.applyFilters(this.props.kitchens)}/>
        </div>
      </div>
    )
  }
}

export default Search;