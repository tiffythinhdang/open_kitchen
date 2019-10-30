import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ReservationForm from './reservation_form';
import { createReservation } from '../../actions/reservations_actions'

const mapStateToProps = (state, { location }) => {
  let kitchenId = new URLSearchParams(location.search).get('kitchenId');
  let timeSlotId = new URLSearchParams(location.search).get('timeSlotId');

  return {
    form: {
      user_id: state.session.currentUserId,
      kitchen_id: kitchenId,
      timeslot_id: timeSlotId,
      date: state.search.date,
      party_size: state.search.party_size,
      optional_request: ""
    },
    time: new URLSearchParams(location.search).get('time'),
    kitchen: state.entities.kitchens[kitchenId],
    formType: "Make Reservation",
    reservations: state.entities.reservations,
    errors: state.errors.reservation
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: (reservation) => dispatch(createReservation(reservation))
  }
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(ReservationForm) );