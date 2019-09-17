import * as ReservationAPIUtil from '../util/reservations_api_util';

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_A_RESERVATION = "RECEIVE_A_RESERVATION";

export const RECEIVE_RES_ERRORS = "RECEIVE_RES_ERRORS";
export const CLEAR_RES_ERRORS = "CLEAR_RES_ERRORS";

//actions
const receiveReservations = (reservations) => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});

const receiveAReservation = (reservation) => ({
  type: RECEIVE_A_RESERVATION,
  reservation
});

export const receiveReservationErrors = (errors) => ({
  type: RECEIVE_RES_ERRORS,
  errors
});

export const clearReservationErrors = () => ({
  type: CLEAR_RES_ERRORS
});

//thunk actions
export const fetchReservations = (userId) => dispatch => (
  ReservationAPIUtil.fetchReservations(userId)
    .then(reservations => dispatch(receiveReservations(reservations)))
    .fail(errors => dispatch(receiveReservationErrors(errors.responseJSON)))
);

export const fetchAReservation = (id) => dispatch => (
  ReservationAPIUtil.fetchAReservation(id)
    .then(reservation => dispatch(receiveAReservation(reservation)))
    .fail(errors => dispatch(receiveReservationErrors(errors.responseJSON)))
);

export const createReservation = (reservation) => dispatch => (
  ReservationAPIUtil.createReservation(reservation)
    .then(reservation => dispatch(receiveAReservation(reservation)))
    .fail(errors => dispatch(receiveReservationErrors(errors.responseJSON)))
);

export const updateReservation = (reservation) => dispatch => (
  ReservationAPIUtil.updateReservation(reservation)
    .then(reservation => dispatch(receiveAReservation(reservation)))
    .fail(errors => dispatch(receiveReservationErrors(errors.responseJSON)))
);