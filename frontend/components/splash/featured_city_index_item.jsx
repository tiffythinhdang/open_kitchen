import React from 'react';
import { withRouter } from 'react-router-dom';

class FeaturedCityIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const request = {
      date: new Date().toISOString().substr(0, 10),
      time: "12",
      party_size: 2,
      location_id: this.props.local.id,
    };
    this.props.receiveSearch(request);
    this.props.fetchKitchens(request)
      .then(kitchens => this.props.history.push('/search'))
  }

  render() {
    if (!this.props.local) return null;
    return (
      <div className="feature-city-index-item container" onClick={this.handleClick}>
        <div className="city-background">
          <img
            src="https://image.winudf.com/v2/image/Y29tLkNoaWVmV2FsbHBhcGVycy5TYW4xNDlfc2NyZWVuc2hvdHNfMF8yZDk5MzdlMg/screen-0.jpg?fakeurl=1&type=.jpg" 
            alt="city photo"
          />
        </div>
        <div className="city main-content">
          <h1 className="city-name">{this.props.local.city}</h1>
        </div>
      </div>
    )
  }
}

export default withRouter(FeaturedCityIndexItem);