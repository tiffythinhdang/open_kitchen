import * as FavoriteAPIUtil from '../util/favorites_api_util';

export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const RECEIVE_A_FAVORITE = "RECEIVE_A_FAVORITE";

export const RECEIVE_FAV_ERRORS = "RECEIVE_FAV_ERRORS";
export const CLEAR_FAV_ERRORS = "CLEAR_FAV_ERRORS";

//actions
const receiveFavorites = (favorites) => ({
  type: RECEIVE_FAVORITES,
  favorites
});

const receiveAFavorite = (favorite) => ({
  type: RECEIVE_A_FAVORITE,
  favorite
});

export const receiveFavoriteErrors = (errors) => ({
  type: RECEIVE_FAV_ERRORS,
  errors
});

export const clearFavoriteErrors = () => ({
  type: CLEAR_FAV_ERRORS
});

//thunk actions
export const fetchFavorites = () => dispatch => (
  FavoriteAPIUtil.fetchFavorites()
    .then(favorites => dispatch(receiveFavorites(favorites)))
    .fail(errors => dispatch(receiveFavoriteErrors(errors.responseJSON)))
);

export const createFavorite = (favorite) => dispatch => (
  FavoriteAPIUtil.createFavorite(favorite)
    .then(favorite => dispatch(receiveAFavorite(favorite)))
    .fail(errors => dispatch(receiveFavoriteErrors(errors.responseJSON)))
);

export const deleteFavorite = (favorite) => dispatch => (
  FavoriteAPIUtil.deleteFavorite(favorite)
    .then(favorite => dispatch(receiveAFavorite(favorite)))
    .fail(errors => dispatch(receiveFavoriteErrors(errors.responseJSON)))
);