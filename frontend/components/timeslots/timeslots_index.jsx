import React from 'react';

import convertNumberToTime from '../../util/convert_time_util';

class TimeslotsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.reservation;

    this.handleUpdateReservation = this.handleUpdateReservation.bind(this);
  }

  displayTimeslots() {
    const availableTimeslots = Object.values(this.props.timeslots);
    return availableTimeslots.map(timeslot =>
      <input
        type="submit"
        className="main medium button timeslot"
        key={timeslot.id}
        onClick={this.handleUpdateReservation(timeslot.id)}
        value={convertNumberToTime(timeslot.time)}
      />
    )
  }

  handleUpdateReservation(timeSlotId) {
    return (e) => {
      debugger
      e.preventDefault();
      let newReservation = {
        id: this.props.reservation.id,
        user_id: this.props.reservation.userId,
        kitchen_id: this.props.reservation.kitchenId,
        timeslot_id: timeSlotId,
        date: this.props.timeslots[timeSlotId].date,
        party_size: this.props.timeslots[timeSlotId].partySize
      };
      this.props.updateReservation(newReservation)
        .then(res => {
          this.props.fetchAReservation(res.reservation.id);
          this.props.toggleEditForm();
      })
    }
  }

  render() {
    if (!this.props.timeslots) return null
    return (
      <div className="reservation-edit timeslots">
        {this.displayTimeslots()}
      </div>
    )
  }
}

export default TimeslotsIndex;