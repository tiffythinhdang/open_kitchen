import React from 'react';

import RatingDisplay from '../kitchens/rating_display';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  displayEditButton(){
    const currentUserId = parseInt(this.props.currentUserId);
    if (this.props.review.userId === currentUserId) {
      return (
        <div className="review-index edit-review">
          <a 
            className="edit-review secondary link"
            onClick={this.toggleEditReviewForm}
            >Edit
          </a>
        </div>
      )
    }
  }

  toggleEditReviewForm() {
    
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

          { this.displayEditButton() }
        </div>
      </div>
    )
  }
}

export default ReviewIndexItem;