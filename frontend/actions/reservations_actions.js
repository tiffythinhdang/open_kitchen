import * as ReservationAPIUtil from '../util/reservations_api_util';

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_A_RESERVATION = "RECEIVE_A_RESERVATION";

//actions
const receiveReservations = (reservations) => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});

const receiveAReservation = (reservation) => ({
  type: RECEIVE_A_RESERVATION,
  reservation
});

//thunk actions
export const fetchReservations = (userId) => dispatch => (
  ReservationAPIUtil.fetchReservations(userId)
    .then(reservations => dispatch(receiveReservations(reservations)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const createReservation = (reservation) => dispatch => (
  ReservationAPIUtil.createReservation(reservation)
    .then(reservation => dispatch(receiveAReservation(reservation)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateReservation = (reservation) => dispatch => (
  ReservationAPIUtil.updateReservation(reservation)
    .then(reservation => dispatch(receiveAReservation(reservation)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);