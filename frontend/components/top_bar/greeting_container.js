import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Greeting from './greeting';
import { logOut } from '../../actions/session_actions';

const mapStateToProps = state => {
  const currentUserId = state.session.currentUserId;
  return {
    currentUser: state.entities.users[currentUserId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));