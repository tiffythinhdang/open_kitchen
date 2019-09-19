import { connect } from 'react-redux';
import { fetchReservations } from '../../util/reservations_api_util';

import Profile from './profile';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.currentUserId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReservations: (userId) => dispatch(fetchReservations(userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);