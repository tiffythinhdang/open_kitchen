import React from 'react';

import DashBoardNav from './dashboard_nav';
import MySavedKitchenIndexContainer from './my_saved_kitchen_index_container';

class MySavedKitchens extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard container">
        <DashBoardNav />
        <MySavedKitchenIndexContainer />
      </div>
    )
  }
}

export default MySavedKitchens;