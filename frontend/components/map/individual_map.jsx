import React from 'react';
import iconMarker from 'assets/images/small_icon_marker.png'; 

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
    const contentString = '<div id="marker-content">' +
      '<div id="siteNotice">' +
      '</div>' +
      `<h1 id="firstHeading" class="firstHeading" style="color:#B65555; font-size:15px;"><b>${this.props.name}</b></h1>` +
      `<p>${this.props.region}</p>`
      '</div>';

    this.infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    this.marker = new google.maps.Marker({
      position: mapOptions.center,
      map: this.map,
      title: this.props.name,
      animation: google.maps.Animation.DROP,
      icon: iconMarker
    });

    this.marker.addListener('click', () => {
      this.infowindow.open(this.map, this.marker);
    });
  }

  render() {
    return (
      <div className="individual map container" ref={map => this.mapNode = map}>
      </div>
    )
  }
}

export default IndividualMap;
