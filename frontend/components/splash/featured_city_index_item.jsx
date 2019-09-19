import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedCityIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (!this.props.location) return null;
    return (
      <div className="feature-city-index-item container">
        <Link target="_blank" to="/search">
          <div className="background-image">
            <img src="https://wallpapercave.com/wp/toQk3qB.jpg" alt="SF photo"/>
          </div>
          <div className="city main-content">
            <h1>{this.props.location.city}</h1>
          </div>
        </Link>
      </div>
    )
  }
}

export default FeaturedCityIndexItem;