import React from 'react';

import convertNumberToTime from '../../util/convert_time_util';

import iconCalendar from 'assets/images/small_icon_calendar.png';
import iconClock from 'assets/images/small_icon_clock.png';
import iconUser from 'assets/images/small_icon_user.png'; 

class KitchenSearchReservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kitchen_id: this.props.kitchenId,
      date: this.props.search.date,
      time: this.props.search.time,
      party_size: this.props.search.partySize
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMakeReservation = this.handleMakeReservation.bind(this);
  }

  componentDidMount() {
   
  }

  componentDidUpdate(prevProps) {
    
  }

  displayTimeslots() {
    const availableTimeslots = Object.values(this.props.timeslots);
    return availableTimeslots.map(timeslot =>
      <input
        type="submit"
        className="secondary small button timeslot"
        key={timeslot.id}
        onClick={this.handleMakeReservation(timeslot.id)}
        value={convertNumberToTime(timeslot.time)}
      />
    )
  }

  handleMakeReservation(timeSlotId) {
    return (e) => {
      e.preventDefault();
      if (!this.props.currentUser) {
        this.props.openModal('showLogIn');
        return;
      }
      const kitchenId = this.props.kitchenId;
      const req_time = e.target.value;

      this.props.history.push({
        pathname: '/reservations/new',
        search: `kitchenId=${kitchenId}&time=${req_time}&timeSlotId=${timeSlotId}`
      });
    }
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchTimeslotsByAKitchen(this.state);
  }

  generateTimeOptions() {
    const timeOptions = [];
    for (let i = 9; i < 21; i++) {
      timeOptions.push(i);
    };
    let val;
    return timeOptions.map((opt, i) => {
      val = convertNumberToTime(opt);
      return <option
        className="select items"
        key={i}
        value={`${opt}`}
      >{val}
      </option>
    })
  }

  generatePartyOptions() {
    const partyOptions = [];
    for (let i = 1; i < 21; i++) {
      partyOptions.push(i);
    };
    let val;
    return partyOptions.map((opt, i) => {
      if (opt === 1) { val = `${opt} person` }
      if (opt > 1) { val = `${opt} people` }
      return <option
        className="select items"
        key={i}
        value={`${opt}`}
      >{val}
      </option>
    })
  }

  render() {
    // if (!this.props.kitchen) return null;
    return (
      <div className="kitchen-show reservation search container">
        <div className="kitchen-show reservation search">
          <h1>Find a reservation</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="date-time-party selector-container">
              <div className="input-container with-icon">
                <img className="small icon calendar" src={iconCalendar} />
                <input
                  className="date selector"
                  type="date"
                  required="required"
                  value={this.state.date}
                  min={new Date().toISOString().substr(0, 10)}
                  onChange={this.handleChange("date")}
                />
              </div>

              <div className="input-container with-icon">
                <img className="small icon clock" src={iconClock} />
                <select
                  className="time selector"
                  value={this.state.time}
                  onChange={this.handleChange("time")}
                >
                  {this.generateTimeOptions()}
                </select>
              </div>

              <div className="input-container with-icon">
                <img className="small icon user" src={iconUser} />
                <select
                  className="party-size selector"
                  value={this.state.party_size}
                  onChange={this.handleChange("party_size")}
                >
                  {this.generatePartyOptions()}
                </select>
              </div>
            </div>

            <button type="submit" className="main medium button search">Search</button>
          </form>
          <div className="kitchen-show reservation timeslots">
            {this.displayTimeslots()}
          </div>
        </div>
      </div>
    )
  }
}

export default KitchenSearchReservation;
