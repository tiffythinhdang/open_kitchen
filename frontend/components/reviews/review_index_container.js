import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { fetchReviews, createReview } from '../../actions/reviews_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.review
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: (kitchenId) => dispatch(fetchReviews(kitchenId)),
    createReview: (review) => dispatch(createReview(review))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);