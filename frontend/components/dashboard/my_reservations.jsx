import React from 'react';

import DashBoardNav from './dashboard_nav';
import MyReservationsIndex from './my_reservations_index';

class MyReservations extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReservations(this.props.user.id);
  }

  render() {
    if (!this.props.user) return null
    return (
      <div className="dashboard container">
        <DashBoardNav />
        <MyReservationsIndex reservations={this.props.reservations}/>
      </div>
    )
  }
}

export default MyReservations;