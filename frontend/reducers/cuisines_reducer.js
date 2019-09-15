import { RECEIVE_CUISINES } from '../actions/cuisines_action';

const cuisinesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CUISINES:
      return action.cuisines;

    default:
      return state;
  }
}

export default cuisinesReducer;