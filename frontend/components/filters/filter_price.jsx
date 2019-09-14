import React from 'react';

import iconDollar from 'assets/images/small_icon_dollar.png'; 

class PriceFilter extends React.Component {
  constructor(props) {
    super(props);

    this.toggleSelected = this.toggleSelected.bind(this);
  }

  toggleSelected(e) {
    e.preventDefault();
    const selected = e.target;
    selected.classList.toggle("selected");
  } 

  render() {
    return(
      <div className="price-filter">
        <div className="price-filter title">
          <img  className="small icon light dollar" src={iconDollar} alt="icon dollar"/>
          <h3 className="title">Price</h3>
        </div>

        <div className="price-filter items">
          <button 
            className="price-selector n1" 
            value="2"
            onClick={this.toggleSelected}
            >$$
          </button>

          <button 
            className="price-selector n2" 
            value="3"
            onClick={this.toggleSelected}
            >$$$
          </button>

          <button 
            className="price-selector n3" 
            value="4"
            onClick={this.toggleSelected}
            >$$$$
          </button>
        </div>
      </div>
    )
  }
}

export default PriceFilter;