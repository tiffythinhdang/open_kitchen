import React from 'react';

import SearchBarContainer from './search_bar/search_bar_container';
import KitchenIndexContainer from './kitchens/kitchen_index_container';

const SearchPage = () => (
  <div>
    {/* <header className="search-page header"> */}
      {/* <h1>Eperience the World through someone else's kitchen</h1> */}
      <SearchBarContainer />
    {/* </header> */}
    <KitchenIndexContainer />
  </div>
);

export default SearchPage;