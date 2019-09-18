import React from 'react';

import RatingDisplay from '../kitchens/rating_display';
import EditReviewFormContainer from './edit_review_form_container.jsx';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleEditReviewForm = this.toggleEditReviewForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  displayEditDeleteButton(){
    const currentUserId = parseInt(this.props.currentUserId);
    if (this.props.review.userId === currentUserId) {
      return (
        <div className="review-index edit-review">
          <a 
            className="edit-review secondary link"
            onClick={this.toggleEditReviewForm}
            >Edit
          </a>
          <a 
            className="edit-review secondary link"
            onClick={this.handleDelete}
            >Delete
          </a>
        </div>
      )
    }
  }

  toggleEditReviewForm() {
    const editFormContainer = document.getElementsByClassName(`edit-review-form ${this.props.review.id}`)[0];
    const editForm = editFormContainer.getElementsByClassName("review-form-outer-container")[0];
    editForm.classList.toggle("hidden");
  }

  handleDelete() {
    this.props.deleteReview(this.parseReview())
      .then( res => this.props.fetchReviews(res.review.kitchenId) )
  }

  parseReview() {
    return {
      id: this.props.review.id,
      user_id: this.props.review.userId,
      kitchen_id: this.props.review.kitchenId,
      rating: 0,
      body: this.props.review.body,
    }
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

          { this.displayEditDeleteButton() }
          <EditReviewFormContainer 
            review={this.parseReview()}
            toggleEditReviewForm={this.toggleEditReviewForm}
          />
        </div>
      </div>
    )
  }
}

export default ReviewIndexItem;