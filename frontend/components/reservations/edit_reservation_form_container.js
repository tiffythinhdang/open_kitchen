import { connect } from 'react-redux';

import EditReservationForm from './edit_reservation_form';
import { updateReservation } from '../../actions/reservations_actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(EditReservationForm);