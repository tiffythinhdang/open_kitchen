import {RECEIVE_REVIEWS, RECEIVE_A_REVIEW } from '../actions/reviews_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;

    case RECEIVE_A_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review })

    default:
      return state;
  }
}

export default reviewsReducer;