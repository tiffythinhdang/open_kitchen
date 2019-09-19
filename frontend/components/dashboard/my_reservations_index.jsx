import React from 'react';

import MyReservationsIndexItem from './my_reservations_index_item';

class MyReservationsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reservation-index container">
        {
          this.props.reservations.map(reservation =>
            <MyReservationsIndexItem 
              key={reservation.id}
              reservation={reservation} 
            />
          )
        }
      </div>
    )
  }
}

export default MyReservationsIndex;