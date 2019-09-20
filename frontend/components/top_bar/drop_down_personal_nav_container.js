import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DropDownPersonalNav from './drop_down_personal_nav';
import { logOut } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  }
};

export default withRouter(connect(null, mapDispatchToProps)(DropDownPersonalNav));