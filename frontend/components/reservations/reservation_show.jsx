import React from 'react';
import { Link } from 'react-router-dom';

import convertNumberToTime from '../../util/convert_time_util';

import iconCalendar from 'assets/images/small_icon_calendar.png';
import iconClock from 'assets/images/small_icon_clock.png';
import iconUser from 'assets/images/small_icon_user.png';
import iconCheck from 'assets/images/large_icon_white_check.png'; 

class ReservationShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reservation;

    this.handleModify = this.handleModify.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.fetchAReservation(this.props.match.params.reservationId)
  }

  displayDate() {
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const date = this.props.reservation.date.split("-");
    return (new Date(...date)).toLocaleDateString('en-US', DATE_OPTIONS)
  }

  displayPartySize() {
    if (this.props.reservation.partySize === "1") {
      return "1 person";
    } else {
      return this.props.reservation.partySize + " people";
    }
  }

  displayRequest() {
    const req = this.props.reservation.optionalRequest;
    if (req) {
      return <p className="reservation-show optional request">{req}</p>;
    } else {
      return <p className="reservation-show optional request">No special request</p>;
    }
  }

  handleModify() {

  }

  handleCancel() {
    this.props.openModal('showCancel', this.props.reservation.id);
  }

  render() {
    if (!this.props.reservation) return null;
    return (
      <div className="reservation-show container">

        <div className="success-messages container">
          <img className="success icon" src={iconCheck} alt="icon check" />
          <div className="success-messages summary">
            <p className="main-message">Thanks! Your reservation is confirmed.</p>
            <p>Confirmation #00000</p>
          </div>
        </div>

        <div className="reservation-show summary">
          <div className="reservation-show kitchen-img">
            <img
              src="https://content.phuket101.net/wp-content/uploads/20190731181616/phuket-cooking-classes.jpg"
              alt="kitchen imgage" />
          </div>

          <div className="reservation-show name-dtp">
            <h2>{this.props.reservation.kitchenName}</h2>

            <div className="reservation-show name-dtp dtp">
              <div className="reservation-show name-dtp date">
                <img className="small icon calendar light" src={iconCalendar} />
                <p>{this.displayDate()}</p>
              </div>

              <div className="reservation-show name-dtp time">
                <img className="small icon clock light" src={iconClock} />
                <p>{convertNumberToTime(this.props.reservation.time)}</p>
              </div>

              <div className="reservation-show name-dtp party">
                <img className="small icon suser light" src={iconUser} />
                <p>{this.displayPartySize()}</p>
              </div>
            </div>

            {this.displayRequest()}
          </div>
        </div>

        <div className="reservation-show action-buttons">
          <button 
            className="main medium button"
            onClick={this.handleModify}
            >Modify
          </button>

          <div className="link-container">
            <a 
              className="secondary link"
              onClick={this.handleCancel}
            >Cancel Reservation</a>
          </div>
        </div>
        
      </div>
    )
  }
}

export default ReservationShow;