import { connect } from 'react-redux';

import SignUpForm from './signup_form';
import { signUp } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "Sign Up"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: (user) => dispatch(signUp(user)),
    openModal: (content) => dispatch(openModal(content)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);