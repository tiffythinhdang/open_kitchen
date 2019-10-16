import React from 'react';

class IndividualMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // set the map to show kitchen
    const mapOptions = {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 16
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div className="individual map container" ref={map => this.mapNode = map}>

      </div>
    )
  }
}

export default IndividualMap;
