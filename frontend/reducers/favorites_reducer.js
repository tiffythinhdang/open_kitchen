import { RECEIVE_FAVORITES, RECEIVE_A_FAVORITE } from '../actions/favorites_actions';

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVORITES:
      return action.favorites;

    case RECEIVE_A_FAVORITE:
      return Object.assign({}, state, { [action.favorite.id]: action.favorite })

    default:
      return state;
  }
}

export default favoritesReducer;