import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ReviewForm from './review_form';
import { updateReview, fetchReviews } from '../../actions/reviews_actions';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`edit-review-form ${this.props.review.id}`}>
        <ReviewForm 
          formType={this.props.formType}
          action={this.props.action}
          review={this.props.review}
          errors={this.props.errors}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.review,
    formType: "Edit Review"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: (kitchenId) => dispatch(fetchReviews(kitchenId)),
    action: (review) => dispatch(updateReview(review))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReviewForm));