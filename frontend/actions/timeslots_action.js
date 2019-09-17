import * as TimeslotAPIUtil from '../util/timeslots_api_util';

export const RECEIVE_TIMESLOTS = "RECEIVE_TIMESLOTS";
export const CLEAR_TIMESLOTS = "CLEAR_TIMESLOTS";

//actions
const receiveTimeslots = (timeslots) => ({
  type: RECEIVE_TIMESLOTS,
  timeslots
});

export const clearTimeslots = () => ({
  type: CLEAR_TIMESLOTS
});

//thunk actions
export const fetchTimeslots = (reservation) => dispatch => (
  TimeslotAPIUtil.fetchTimeslots(reservation)
    .then(timeslots => dispatch(receiveTimeslots(timeslots)))
    // .fail(errors => dispatch(receiveReservationErrors(errors.responseJSON)))
);