import { connect } from 'react-redux';

import Profile from './profile';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.currentUserId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);