import {
  RECEIVE_A_REVIEW,
  RECEIVE_REV_ERRORS,
  CLEAR_REV_ERRORS
} from '../actions/reviews_actions';

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_A_REVIEW:
      return [];

    case RECEIVE_REV_ERRORS:
      return action.errors;

    case CLEAR_REV_ERRORS:
      return [];

    default:
      return state;
  }
};

export default reviewErrorsReducer;

