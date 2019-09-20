import {
  RECEIVE_A_FAVORITE,
  RECEIVE_FAV_ERRORS,
  CLEAR_FAV_ERRORS
} from '../actions/favorites_actions';

const favoritesErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_A_FAVORITE:
      return [];

    case RECEIVE_FAV_ERRORS:
      return action.errors;

    case CLEAR_FAV_ERRORS:
      return [];

    default:
      return state;
  }
};

export default favoritesErrorsReducer;

