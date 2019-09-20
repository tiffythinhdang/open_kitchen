import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CancelReservation from './cancel_reservation';
import { updateReservation, fetchAReservation } from '../../actions/reservations_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    reservationId: state.ui.modal.params
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAReservation: (id) => dispatch(fetchAReservation(id)),
    updateReservation: (id) => dispatch(updateReservation(id)),
    openModal: (content, params) => dispatch(openModal(content, params)),
    closeModal: () => dispatch(closeModal())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CancelReservation));