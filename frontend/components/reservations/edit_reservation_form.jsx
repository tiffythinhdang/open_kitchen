import React from 'react';

import convertNumberToTime from '../../util/convert_time_util';

import iconCalendar from 'assets/images/small_icon_calendar.png';
import iconClock from 'assets/images/small_icon_clock.png';
import iconUser from 'assets/images/small_icon_user.png';

class EditReservationForm extends React.Component {
constructor(props) {
    super(props);
    this.state = this.props.reservation;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  toggleEditForm() {
    let editForm = document.querySelector('.reservation-edit.container');
    let buttons = document.querySelector('.reservation-show-action-buttons.container');
    editForm.classList.toggle("hidden");
    buttons.classList.toggle("hidden");
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveSearch(this.state);
    this.props.fetchKitchens(this.state)
      .then(kitchens => this.props.history.push('/search'))
  }

  render() {
    return (
      <div className="reservation-edit container hidden">
        <div className="reservation-edit search bar">
          <form onSubmit={this.handleSubmit}>
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
                  value={this.state.partySize}
                  onChange={this.handleChange("party_size")}
                >
                  {this.generatePartyOptions()}
                </select>
              </div>
            </div>

            <div className="reservation-edit action-buttons container">
              <button type="submit" className="main medium button search">Search</button>
              <p className="link-container">
                <a
                  className="secondary link"
                  onClick={this.toggleEditForm}
                >Cancel
              </a>
              </p>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default EditReservationForm;