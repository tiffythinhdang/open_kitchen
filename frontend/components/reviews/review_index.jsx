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

  render() {
    if (!this.props.reviews) return null
    return (
      <div className="review-index container">
        <CreateReviewFormContainer />
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