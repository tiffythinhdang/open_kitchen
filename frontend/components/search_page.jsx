import React from 'react';

import SearchBarContainer from './search_bar/search_bar_container';
import KitchenIndexContainer from './kitchens/kitchen_index_container';
import Footer from './footer/footer';

const SearchPage = () => (
  <div>
    <SearchBarContainer />
    <KitchenIndexContainer />
  </div>
);

export default SearchPage;