import {
  RECEIVE_A_RESERVATION,
  RECEIVE_RES_ERRORS,
  CLEAR_RES_ERRORS
} from '../actions/reservations_actions';

const reservationErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  // debugger

  switch (action.type) {
    case RECEIVE_A_RESERVATION:
      return [];

    case RECEIVE_RES_ERRORS:
      return action.errors;

    case CLEAR_RES_ERRORS:
      return [];

    default:
      return state;
  }
};

export default reservationErrorsReducer;

