import React from 'react';

import iconCutlery from 'assets/images/small_icon_cutlery.png';

class CuisineFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCuisines: this.props.filteredCuisines
    };

    this.toggleSelect = this.toggleSelect.bind(this);
  }

  displayCuisines() {
    return this.props.cuisines.map((cuisine, i) =>
      <div key={i} className="cuisine-selector">
        <input
          className="checkbox"
          type="checkbox"
          value={cuisine}
          onChange={this.toggleSelect}
          checked={this.state.filteredCuisines.includes(cuisine)}/>
        <label>{cuisine}</label> 
      </div>
    )
  }

  toggleSelect(e) {
    const currCuisine = e.target.value;
    let newCuisines;

    if (e.target.checked) {
      newCuisines = this.state.filteredCuisines.concat(currCuisine);
    } else {
      newCuisines = this.state.filteredCuisines.filter(cuisine => cuisine !== currCuisine)
    }

    this.setState({ filteredCuisines: newCuisines });
    this.props.updateFilter("cuisine", newCuisines);
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