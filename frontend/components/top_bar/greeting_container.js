import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Greeting from './greeting';
import { logOut } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  const currentUserId = state.session.currentUserId;
  return {
    currentUser: state.entities.users[currentUserId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    openModal: (content) => dispatch(openModal(content)),
    closeModal: () => dispatch(closeModal())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));