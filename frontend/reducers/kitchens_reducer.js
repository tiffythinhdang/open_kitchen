import { RECEIVE_KITCHENS, RECEIVE_A_KITCHEN } from '../actions/kitchen_actions';

const kitchensReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_KITCHENS:
      return action.kitchens;
    
    case RECEIVE_A_KITCHEN:
      return Object.assign({}, state, { [action.kitchen.id]: action.kitchen })

    default:
      return state;
  }
}

export default kitchensReducer;