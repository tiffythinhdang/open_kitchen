import React from 'react';

import SearchBarContainer from '../search_bar/search_bar_container';
import KitchenIndexContainer from '../kitchens/kitchen_index_container';
import Filters from './filters';

const Search = () => (
  <div>
    <header className="search-page header">
      <SearchBarContainer />
    </header>
    <div className="search-page main-content">
      <Filters />
      <KitchenIndexContainer />
    </div>
  </div>
);

export default Search;