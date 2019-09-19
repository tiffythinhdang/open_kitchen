import React from 'react';

import UserBasicInfo from './user_basic_info';
import DashBoardNav from './dashboard_nav';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    if (!this.props.user) return null
    return(
      <div className="dashboard container">
        <DashBoardNav />
        <UserBasicInfo user={this.props.user} />
      </div>
    )
  }
}

export default Profile;