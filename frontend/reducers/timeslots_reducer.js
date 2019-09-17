import { RECEIVE_TIMESLOTS } from '../actions/timeslots_action';

const timeslotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TIMESLOTS:
      return action.timeslots;

    default:
      return state;
  }
}

export default timeslotsReducer;