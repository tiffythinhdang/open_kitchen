import { connect } from 'react-redux';

import LogInForm from './login_form';
import { logIn } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "Log In"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: (user) => dispatch(logIn(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);