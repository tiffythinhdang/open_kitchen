import React from 'react';

import iconCutlery from 'assets/images/small_icon_cutlery.png';

class CuisineFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  displayCuisines() {
    return this.props.cuisines.map((cuisine, i) =>
      <div key={i} className="cuisine-selector">
        <input
          className="checkbox"
          type="checkbox"
          value={cuisine} />
        <label>{cuisine}</label> 
      </div>
    )
  }

  render() {
    return (
      <div className="cuisine-filter">
        <div className="cuisine-filter title">
          <img className="small icon light cutlery" src={iconCutlery} alt="icon cutlery" />
          <h3 className="title">Cuisine</h3>
        </div>

        <div className="cuisine-filter items">
          { this.displayCuisines() }
        </div>
      </div>
    )
  }
}

export default CuisineFilter;