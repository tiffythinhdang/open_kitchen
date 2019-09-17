import React from 'react';

import TimeslotsIndexContainer from '../timeslots/timeslots_index_container';
import convertNumberToTime from '../../util/convert_time_util';

import iconCalendar from 'assets/images/small_icon_calendar.png';
import iconClock from 'assets/images/small_icon_clock.png';
import iconUser from 'assets/images/small_icon_user.png';

class EditReservationForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      reservation_id: this.props.reservation.id,
      date: this.props.reservation.date,
      time: this.props.reservation.time,
      party_size: this.props.reservation.partySize
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.fetchTimeslots(this.state)
  }

  render() {
    return (
      <div className="reservation-edit container hidden">
        <div className="reservation-edit search bar">
          <form onSubmit={this.handleSearch}>
            <div className="reservation-edit date-time-party selector-container">
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

            <div className="reservation-edit action-buttons container">
              <button type="submit" className="secondary medium button search">Search</button>
              <p className="link-container">
                <a
                  className="secondary link"
                  onClick={this.props.toggleEditForm}
                >Cancel
              </a>
              </p>
            </div>

          </form>
        </div>
        <TimeslotsIndexContainer 
          reservation={this.props.reservation}
          toggleEditForm={this.props.toggleEditForm}
        />
      </div>
    )
  }
}

export default EditReservationForm;