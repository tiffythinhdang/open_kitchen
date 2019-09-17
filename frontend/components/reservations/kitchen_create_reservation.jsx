import React from 'react';

class KitchenCreateReservation extends React.Component {
  constructor(props){
    super(props);
  }

  displayTimeslots() {
    // const availableTimeslots = this.props.kitchen.availableTimeslots;
    // return availableTimeslots.map(timeslot =>
    //   <input
    //     type="submit"
    //     className="main medium button timeslot"
    //     key={timeslot.id}
    //     onClick={this.handleMakeReservation(timeslot.id)}
    //     value={convertNumberToTime(timeslot.time)}
    //   />
    // )
  }

  render() {
    return(
      <div className="kitchen-create-reservation container">
        <h3>Make a Reservation</h3>

        {/* <div className="kitchen-index item-timeslots">
          {this.displayTimeslots()}
        </div> */}
      </div>
    )
  }
}

export default KitchenCreateReservation;