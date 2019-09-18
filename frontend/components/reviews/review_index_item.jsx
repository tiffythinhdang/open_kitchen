import React from 'react';

import RatingDisplay from '../kitchens/rating_display';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.review) return null
    return (
      <div className="review-index item">
        <div className="review-index user-info">
          <div className="review-index user-initials container">
            <div className="review-index user-initials text">
              {this.props.review.userInitials}
            </div>
          </div>
          <div className="review-index user-location">
            {this.props.review.userLocation}
          </div>
        </div>

        <div className="review-index main-content">
          <div className="review-index rating">
            <RatingDisplay rating={this.props.review.rating} />
          </div>
          <div className="review-index body">
            {this.props.review.body}
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewIndexItem;