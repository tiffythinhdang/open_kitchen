import React from 'react';

import SearchBarContainer from '../search_bar/search_bar_container';
import FeaturedKitchenIndexContainer from './featured_kitchens_index_container';
import FeaturedCityIndexContainer from './featured_city_index_container.js';

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
          <div className="carousel container">
            <img
              src="https://a0.muscache.com/4ea/air/v2/pictures/64438769-6d53-4e9a-89e0-2639a8184931.jpg?t=r:w3393-h1356-sfit,e:fjpg-c90"
              class="carousel slide" />
            <div className="overlay-slide"></div>
            {/* <img class="mySlides w3-animate-fading" src="img_rr_02.jpg" />
            <img class="mySlides w3-animate-fading" src="img_rr_03.jpg" /> */}
          </div>  
        </header>

        <div className="splash-page main-content">
          <FeaturedKitchenIndexContainer />
          <FeaturedCityIndexContainer />
        </div>
      </div>
    )
  }
}

export default Splash;