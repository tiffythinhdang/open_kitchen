import React from 'react';

import iconLocation from 'assets/images/small_icon_location.png';

class CityFilter extends React.Component {
  constructor(props) {
    super(props);

    this.getUScities = this.getUScities.bind(this);
    this.getInternationalCities = this.getInternationalCities.bind(this);
  }

  getUScities() {
    const usCities = [];
    this.props.cities.forEach(location => {
      if (location.country === "United States") {
        usCities.push([location.id, location.city]);
      }
    });
    return usCities;
  }

  getInternationalCities() {
    const internationalCities = [];
    this.props.cities.forEach(location => {
      if (location.country !== "United States") {
        internationalCities.push([location.id, location.city]);
      }
    });
    return internationalCities;
  }

  displayCities(cities){
    return cities.map((city, i) => 
      <div key={city[0]} className="city-selector">
        <input
          className="checkbox"
          type="checkbox" 
          value={city[1]}/>
        <label>{city[1]}</label>
      </div>
    )
  }

  render() {
    return (
      <div className="city-filter">
        <div className="city-filter United-States">
          <div className="city-filter title">
            <img className="small icon light dollar" src={iconLocation} alt="icon location" />
            <h3 className="title">United States Cities</h3>
          </div>

          <div className="city-filter items">
            { this.displayCities( this.getUScities() ) }
          </div>
        </div>

        <div className="city-filter International">
          <div className="city-filter title">
            <img className="small icon light dollar" src={iconLocation} alt="icon location" />
            <h3 className="title">International Cities</h3>
          </div>

          <div className="city-filter items">
            { this.displayCities( this.getInternationalCities() ) }
          </div>
        </div>


      </div>
    )
  }
}

export default CityFilter;

