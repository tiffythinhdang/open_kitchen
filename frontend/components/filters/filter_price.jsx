import React from 'react';

import iconDollar from 'assets/images/small_icon_dollar.png'; 

class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPrices: this.props.filteredPrices
    };

    this.toggleSelect = this.toggleSelect.bind(this);
    this.displayClassName = this.displayClassName.bind(this);
  }

  displayClassName(name, cost) {
    if (this.state.filteredPrices.includes(cost)) {
      return name + " selected";
    } else {
      return name;
    }
  }

  toggleSelect(e) {
    e.preventDefault();
    const selectedEl = e.target;

    const currPrice = parseInt(selectedEl.value);
    let newPrices;

    if (!selectedEl.classList.contains("selected")) {
      newPrices = this.state.filteredPrices.concat(currPrice);
    } else {
      newPrices = this.state.filteredPrices.filter(price => price !== currPrice)
    }
    
    this.setState({ filteredPrices: newPrices });
    this.props.updateFilter("cost", newPrices);
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
            className={this.displayClassName("price-selector n1", 2)} 
            value="2"
            onClick={this.toggleSelect}
            >$$
          </button>

          <button 
            className={this.displayClassName("price-selector n2", 3)}
            value="3"
            onClick={this.toggleSelect}
            >$$$
          </button>

          <button 
            className={this.displayClassName("price-selector n3", 4)} 
            value="4"
            onClick={this.toggleSelect}
            >$$$$
          </button>
        </div>
      </div>
    )
  }
}

export default PriceFilter;