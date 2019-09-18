import { connect } from 'react-redux';

import ReviewIndexItem from './review_index_item';
import { updateReview, deleteReview } from '../../actions/reviews_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors.review
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateReview: (kitchenId) => dispatch(updateReview(kitchenId)),
    deleteReview: (review) => dispatch(deleteReview(review))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndexItem);