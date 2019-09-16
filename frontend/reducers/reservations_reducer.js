import { RECEIVE_RESERVATIONS, RECEIVE_A_RESERVATION } from '../actions/reservations_actions';

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return action.reservations;

    case RECEIVE_A_RESERVATION:
      return Object.assign({}, state, { [action.reservation.id]: action.reservation })

    default:
      return state;
  }
}

export default reservationsReducer;