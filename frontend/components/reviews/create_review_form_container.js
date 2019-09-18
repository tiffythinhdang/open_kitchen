import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ReviewForm from './review_form';
import { createReview } from '../../actions/reviews_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    review: {
      kitchen_id: ownProps.match.params.kitchenId,
      user_id: state.session.currentUserId,
      rating: 1,
      body: ""

    },
    errors: state.errors.review
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: (review) => dispatch(createReview(review))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));