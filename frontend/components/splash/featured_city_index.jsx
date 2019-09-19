import React from 'react';

import FeaturedCityIndexItem from './featured_city_index_item';

class FeaturedCityIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllLocations();
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
              this.getUSCities().map(local =>
                <FeaturedCityIndexItem
                  key={local.id}
                  local={local}
                  receiveSearch={this.props.receiveSearch}
                  fetchKitchens={this.props.fetchKitchens}
                />
              )
            }
          </div>
        </div>

        <div className="feature-location-index international">
          <h1 className="featured-title">Featured International Areas</h1>
          <div className="feature-location-index main-content">
            {
              this.getInternationalCities().map(local =>
                <FeaturedCityIndexItem
                  key={local.id}
                  local={local}
                  receiveSearch={this.props.receiveSearch}
                  fetchKitchens={this.props.fetchKitchens}
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