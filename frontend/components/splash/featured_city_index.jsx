import React from 'react';

import FeaturedCityIndexItemContainer from './featured_city_index_container';

class FeaturedCityIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  getUSCities() {
    return this.props.locations.filter(location => location.country === "United States")
  }

  getInternationalCities() {
    return this.props.locations.filter(location => location.country !== "United States")
  }

  render() {
    if (!this.props.locations) return null;
    return (
      <div className="feature-location-index container">
        <div className="feature-location-index regional">
          <h1 className="featured-title">Featured Regional Areas</h1>
          <div className="feature-location-index main-content">
            {
              this.getUSCities().map(location =>
                <FeaturedCityIndexItemContainer
                  key={location.id}
                  location={location}
                />
              )
            }
          </div>
        </div>

        <div className="feature-location-index international">
          <h1 className="featured-title">Featured International Areas</h1>
          <div className="feature-location-index main-content">
            {
              this.getInternationalCities().map(location =>
                <FeaturedCityIndexItemContainer
                  key={location.id}
                  location={location}
                />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedCityIndex;