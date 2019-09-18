import React from 'react';

import SearchBarContainer from '../search_bar/search_bar_container';
import FeaturedKitchenIndexContainer from './featured_kitchens_index_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-page container">
        <header className="splash-page header">
          <div className="splash header title">Experience the World through someone else's kitchen</div>
          <SearchBarContainer />
          {/* <div className="splash-page header background-img">
          </div> */}
        </header>

        <div className="splash-page main-content">
          <FeaturedKitchenIndexContainer />

        </div>
      </div>
    )
  }
}

export default Splash;