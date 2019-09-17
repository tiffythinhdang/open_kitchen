import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import KitchenCreateReservation from './kitchen_create_reservation';
import { createReservation } from '../../actions/reservations_actions'

const mapStateToProps = (state, ownProps) => {
  let kitchenId = ownProps.match.params.kitchenId;

  return {
    form: {
      user_id: state.session.currentUserId,
      kitchen_id: kitchenId,
      time: state.search.time,
      date: state.search.date,
      party_size: state.search.party_size,
      optional_request: ""
    },
    kitchen: state.entities.kitchens[kitchenId],
    formType: "Make Reservation",
    errors: state.errors.reservation
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createReservation: (reservation) => dispatch(createReservation(reservation))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KitchenCreateReservation));