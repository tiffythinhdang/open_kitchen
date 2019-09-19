import React from 'react';

import MyReservationsIndexItem from './my_reservations_index_item';

class MyReservationsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  getUpcomingReservations() {
    return this.props.reservations.filter(reservation => reservation.state === "upcoming")
  }

  getCancelledReservations() {
    return this.props.reservations.filter(reservation => reservation.state === "cancelled")
  }

  // getPastResvervations() {
  //   let today = new Date();
  //   let yesterday = today.setDate(today.setDate() - 1);
  //   return this.props.reservations.filter(reservation => reservation.date === "upcoming")
  // }

  render() {
    if (!this.props.reservations) return null;
    return (
      <div className="reservation-index container">

        <div className="reservation-index upcoming-container">
          <h1 className="reservation-title">Upcoming</h1>
          {
            this.getUpcomingReservations().map(reservation =>
              <MyReservationsIndexItem 
                key={reservation.id}
                reservation={reservation} 
              />
            )
          }
        </div>

        <div className="reservation-index upcoming-container">
          <h1 className="reservation-title">Cancelled</h1>
          {
            this.getCancelledReservations().map(reservation =>
              <MyReservationsIndexItem 
                key={reservation.id}
                reservation={reservation} 
              />
            )
          }
        </div>
      </div>
    )
  }
}

export default MyReservationsIndex;