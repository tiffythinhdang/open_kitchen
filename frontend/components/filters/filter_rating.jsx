import React from 'react';

import iconReview from 'assets/images/small_icon_review.png';
import icon5Star from 'assets/images/medium_icon_5_star_gold.png';
import icon4Star from 'assets/images/medium_icon_4_star_gold.png';
import icon3Star from 'assets/images/medium_icon_3_star_gold.png';

class RatingFilter extends React.Component {
  constructor(props) {
    super(props);

    this.toggleSelected = this.toggleSelected.bind(this);
  }

  render() {
    return (
      <div className="rating-filter">
        <div className="rating-filter title">
          <img className="small icon light review" src={iconReview} alt="icon review" />
          <h3 className="title">Rating</h3>
        </div>

        <div className="rating-filter items">
          <button
            className="rating-selector n1"
            value="3"
            onClick={this.toggleSelected}
          >
          </button>

          <button
            className="rating-selector n2"
            value="3"
            onClick={this.toggleSelected}
          >$$$
          </button>

          <button
            className="rating-selector n3"
            value="4"
            onClick={this.toggleSelected}
          >$$$$
          </button>
        </div>
      </div>
    )
  }
}

export default RatingFilter;