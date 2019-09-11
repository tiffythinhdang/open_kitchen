import { connect } from 'react-redux';

import LogInForm from './login_form';
import { logIn, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "Log In"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: (user) => dispatch(logIn(user)),
    openModal: (content) => dispatch(openModal(content)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);