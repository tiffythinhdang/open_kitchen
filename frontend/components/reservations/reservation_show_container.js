import { connect } from 'react-redux';

import ReservationShow from './reservation_show';
import { fetchAReservation } from '../../actions/reservations_actions';
import { clearTimeslots } from '../../actions/timeslots_action';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const reservationId = ownProps.match.params.reservationId;
  return {
    reservation: state.entities.reservations[reservationId],
    kitchens: state.entities.kitchens
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAReservation: (id) => dispatch(fetchAReservation(id)),
    clearTimeslots: () => dispatch(clearTimeslots()),
    openModal: (content, params) => dispatch(openModal(content, params)),
    closeModal: () => dispatch(closeModal()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationShow);