import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchTimeslotsByAKitchen } from '../../actions/timeslots_action';
import { openModal, closeModal } from '../../actions/modal_actions';

import KitchenSearchReservation from './kitchen_search_reservation';

const mapStateToProps = state => {
  const kitchenId = new URLSearchParams(location.search).get('kitchenId');
  const currentUserId = state.session.currentUserId;
  return {
    // kitchen: state.entities.kitchen[kitchenId],
    search: state.search,
    currentUser: state.entities.users[currentUserId],
    timeslots: state.entities.timeslots
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTimeslotsByAKitchen: (request) => dispatch(fetchTimeslotsByAKitchen(request)),
    openModal: (content) => dispatch(openModal(content)),
    closeModal: () => dispatch(closeModal())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KitchenSearchReservation));
