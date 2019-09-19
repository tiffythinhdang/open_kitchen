import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/reviews_actions';
import { clearReviewErrors } from '../../actions/reviews_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    reviews: Object.values(state.entities.reviews),
    errors: state.errors.review
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: (kitchenId) => dispatch(fetchReviews(kitchenId)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    openModal: (content) => dispatch(openModal(content)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);