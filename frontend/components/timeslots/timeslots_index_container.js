import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TimeslotsIndex from './timeslots_index';
import { updateReservation, fetchAReservation } from '../../actions/reservations_actions';
import { fetchTimeslots } from '../../actions/timeslots_action';

const mapStateToProps = (state, ownProps) => {
  return {
    timeslots: state.entities.timeslots
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateReservation: (reservation) => dispatch(updateReservation(reservation)),
    fetchAReservation: (reservationId) => dispatch(fetchAReservation(reservationId)),
    fetchTimeslots: (reservation) => dispatch(fetchTimeslots(reservation))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimeslotsIndex));