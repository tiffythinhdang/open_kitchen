import React from 'react';

import ReviewIndexItemContainer from './review_index_item_container';
import CreateReviewFormContainer from './create_review_form_container';

class ReviewIndex extends React.Component {
  constructor(props){
    super(props);

    this.toggleCreateReviewForm = this.toggleCreateReviewForm.bind(this);
  }

  componentDidMount(){
    this.props.fetchReviews(this.props.kitchen.id)
  }

  toggleCreateReviewForm(){
    let CreateReviewForm = document.querySelector('.review-form-outer-container');
    let button = document.querySelector('.create-review.button.container');
    this.props.clearReviewErrors();
    CreateReviewForm.classList.toggle("hidden");
    button.classList.toggle("hidden");
  }

  arrangeReviews() {
    const currentUserId = parseInt(this.props.currentUserId);
    const reviewsByCurrentUser = this.props.reviews.filter(review => review.userId === currentUserId )
    const otherReviews = this.props.reviews.filter(review => review.userId !== currentUserId )
    return reviewsByCurrentUser.concat(otherReviews);
  }

  render() {
    if (!this.props.reviews) return null
    return (
      <div className="review-index container">
        <div className="create-review button container clearfix">
          <button
            className="create-review small main button"
            onClick={this.toggleCreateReviewForm}
            >Leave a Review
          </button>
        </div>

        <CreateReviewFormContainer 
          toggleCreateReviewForm={this.toggleCreateReviewForm}
        />
        { 
          this.arrangeReviews().map(review =>
            <ReviewIndexItemContainer
              key={review.id}
              review={review} 
            />
          )
        }
      </div>
    )
  }
}

export default ReviewIndex;