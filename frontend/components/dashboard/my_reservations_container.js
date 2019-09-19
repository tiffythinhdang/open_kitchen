import { connect } from 'react-redux';
import { fetchReservations } from '../../actions/reservations_actions';

import MyReservations from './my_reservations';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.currentUserId],
    reservations: Object.values(state.entities.reservations)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReservations: (userId) => dispatch(fetchReservations(userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyReservations);