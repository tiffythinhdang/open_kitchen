import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EditReservationForm from './edit_reservation_form';
import { updateReservation } from '../../actions/reservations_actions';

import { fetchTimeslots } from '../../actions/timeslots_action';

const mapStateToProps = state => {
  return {
    timeslots: state.entities.timeslots
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: (reservation) => dispatch(updateReservation(reservation)),
    fetchTimeslots: (reservation) => dispatch(fetchTimeslots(reservation))
  }
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(EditReservationForm) );