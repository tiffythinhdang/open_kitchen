import { connect } from 'react-redux';

import EditReservationForm from './edit_reservation_form';
import { updateReservation } from '../../actions/reservations_actions';

const mapStateToProps = (state, ownProps) => {
  // const reservationId = ownProps.match.params.reservationId;
  return {
    // reservation: state.entities.reservations[reservationId],
    // kitchens: state.entities.kitchens
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: (reservation) => dispatch(updateReservation(reservation))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditReservationForm);