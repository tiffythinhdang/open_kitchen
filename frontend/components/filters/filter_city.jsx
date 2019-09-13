import React from 'react';

import iconLocation from 'assets/images/small_icon_location.png';

class CityFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  displayUScitoes() {

  }

  displayInternationalCities() {
    
  }

  render() {
    return (
      <div className="city-filter">
        <div className="city-filters United-States">
          <div className="city-filter title">
            <img className="small icon dollar" src={iconLocation} alt="icon location" />
            <h3 className="title">United States Cities</h3>
          </div>

          <div className="city-filter items">
            <input type="checkbox" value="2" /><span>$$</span>
            <input type="checkbox" value="3" /><span>$$$</span>
            <input type="checkbox" value="4" /><span>$$$$</span>
          </div>
        </div>


      </div>
    )
  }
}

export default CityFilter;

