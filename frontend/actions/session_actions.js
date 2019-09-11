import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOG_OUT_CURRENT_USER = "LOG_OUT_CURRENT_USER";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

//action
const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logOutCurrentUser = () => ({
  type: LOG_OUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// thunk_action
export const signUp = (user) => dispatch => {
  return sessionAPIUtil.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const logIn = (user) => dispatch => {
  return sessionAPIUtil.logIn(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const logOut = () => dispatch => {
  return sessionAPIUtil.logOut()
    .then(() => dispatch(logOutCurrentUser()))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};
