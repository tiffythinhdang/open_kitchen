import { connect } from 'react-redux';

import DropDownPersonalNav from './drop_down_personal_nav';
import { logOut } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  }
};

export default connect(null, mapDispatchToProps)(DropDownPersonalNav);