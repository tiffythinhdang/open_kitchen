import React from 'react';

import ReviewIndexItemContainer from './review_index_item_container';
import CreateReviewFormContainer from './create_review_form_container';

class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchReviews(this.props.kitchen.id)
  }

  toggleCreateReviewForm(){
    let CreateReviewForm = document.querySelector('.review-form-outer-container');
    let button = document.querySelector('.create-review.button.container');
    // this.props.clearTimeslots();
    CreateReviewForm.classList.toggle("hidden");
    button.classList.toggle("hidden");
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
          this.props.reviews.map(review =>
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