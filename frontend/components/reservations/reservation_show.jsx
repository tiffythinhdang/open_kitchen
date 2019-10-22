import React from 'react';
import { Link } from 'react-router-dom';

import convertNumberToTime from '../../util/convert_time_util';
import randNum from '../../util/random_number_util';
import EditReservationFormContainer from './edit_reservation_form_container';
import ToSearchAndResButtons from '../util/to_search_and_reservations_button';

import iconCalendar from 'assets/images/small_icon_calendar.png';
import iconClock from 'assets/images/small_icon_clock.png';
import iconUser from 'assets/images/small_icon_user.png';
import iconCheck from 'assets/images/large_icon_white_check.png'; 
import iconClose from 'assets/images/large_icon_white_close.png';

class ReservationShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reservation;

    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.fetchAReservation(this.props.match.params.reservationId)
  }

  displayDate() {
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    let date = this.props.reservation.date.split("-");
    const month = String(parseInt(date[1]) - 1);
    date = [ date[0], month, date[2] ];
    return (new Date(...date)).toLocaleDateString('en-US', DATE_OPTIONS);
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

  displayMessages() {
    if (this.props.reservation.state === "upcoming") {
      return (
        <div className="success-messages container">
          <img className="success icon" src={iconCheck} alt="icon check" />
          <div className="success-messages summary">
            <p className="main-message">Thanks! Your reservation is confirmed.</p>
            <p>Confirmation #{randNum()}</p>
          </div>
        </div>
      )
    } else if (this.props.reservation.state === "cancelled") {
      return (
        <div className="failed-messages container">
          <img className="failed icon" src={iconClose} alt="icon close" />
          <div className="failed-messages summary">
            <p className="main-message">This reservation has been cancelled</p>
            <p>Please contact the restaurant for further inquiry</p>
          </div>
        </div>
      )
    }
  }

  displayButtons() {
    if ( this.props.reservation.state === "upcoming" ) {
      return (

        <div className="reservation-show-action-buttons container">
          <div className="reservation-show action-buttons">
            <button
              className="main medium button"
              onClick={this.toggleEditForm}
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
    } else {
      return "";
    }
  }

  toggleEditForm() {
    let editForm = document.querySelector('.reservation-edit.container');
    let buttons = document.querySelector('.reservation-show-action-buttons.container');
    this.props.clearTimeslots();
    editForm.classList.toggle("hidden");
    buttons.classList.toggle("hidden");
  }

  handleCancel() {
    this.props.openModal('showCancel', this.props.reservation.id);
  }

  render() {
    if (!this.props.reservation) return null;
    
    return (
      <div className="reservation-show-outer-container">
        <div className="res-show-buttons-form-container">
          <ToSearchAndResButtons />

          <div className="reservation-show container">
            {this.displayMessages()}

            <div className="reservation-show summary">
              <div className="reservation-show kitchen-img">
                <img
                  src={this.props.reservation.profileImg}
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

            {this.displayButtons()}

            <EditReservationFormContainer
              reservation={this.props.reservation}
              toggleEditForm={this.toggleEditForm}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ReservationShow;