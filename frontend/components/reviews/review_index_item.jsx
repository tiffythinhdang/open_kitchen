import React from 'react';

import RatingDisplay from '../kitchens/rating_display';
import EditReviewFormContainer from './edit_review_form_container.jsx';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleEditReviewForm = this.toggleEditReviewForm.bind(this);
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
    const editFormContainer = document.getElementsByClassName(`edit-review-form ${this.props.review.id}`)[0];
    const editForm = editFormContainer.querySelector(".review-form-outer-container");
    editForm.classList.toggle("hidden");
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
          <EditReviewFormContainer review={this.props.review}/>
        </div>
      </div>
    )
  }
}

export default ReviewIndexItem;