import React from 'react';

import iconRating from 'assets/images/small_icon_rating.png';
import icon5Star from 'assets/images/medium_icon_5_star_gold.png';
import icon4Star from 'assets/images/medium_icon_4_star_gold.png';
import icon3Star from 'assets/images/medium_icon_3_star_gold.png';

class RatingFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: this.props.averageRating
    };

    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect(e){
    const currAvgRating = parseInt(e.target.value);
    let newAverageRating;

    if (e.target.checked) {
      newAverageRating = this.state.averageRating.concat(currAvgRating);
    } else {
      newAverageRating = this.state.averageRating.filter(rating => rating !== currAvgRating)
    }

    this.setState({ averageRating: newAverageRating});
    this.props.updateFilter("averageRating", newAverageRating);
  }

  render() {
    if (!this.state.averageRating) return null;
    return (
      <div className="rating-filter">
        <div className="rating-filter title">
          <img className="small icon light review" src={iconRating} alt="icon review" />
          <h3 className="title">Rating</h3>
        </div>

        <div className="rating-filter items">
          <div className="rating-selector">
            <input
              className="checkbox"
              type="checkbox"
              value="5" 
              onChange={this.toggleSelect}
              checked={this.state.averageRating.includes(5)}/>
            <label><img className="rating-filter-stars" src={icon5Star} alt="icon 5-star"/></label>
          </div>

          <div className="rating-selector">
            <input
              className="checkbox"
              type="checkbox"
              value="4" 
              onChange={this.toggleSelect}
              checked={this.state.averageRating.includes(4)} />
            <label><img className="rating-filter-stars" src={icon4Star} alt="icon 4-star"/></label>
          </div>

          <div className="rating-selector">
            <input
              className="checkbox"
              type="checkbox"
              value="3" 
              onChange={this.toggleSelect}
              checked={this.state.averageRating.includes(3)} />
            <label><img className="rating-filter-stars" src={icon3Star} alt="icon 3-star"/></label>
          </div>
        </div>
      </div>
    )
  }
}

export default RatingFilter;