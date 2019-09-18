import { connect } from 'react-redux';

import ReviewIndexItem from './review_index_item';
import { fetchReviews, updateReview, deleteReview } from '../../actions/reviews_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors.review
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: (kitchenId) => dispatch(fetchReviews(kitchenId)),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (review) => dispatch(deleteReview(review))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndexItem);