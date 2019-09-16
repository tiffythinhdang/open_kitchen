import React from 'react';
import { Link } from 'react-router-dom';

import iconCalendar from 'assets/images/small_icon_calendar.png';
import iconClock from 'assets/images/small_icon_clock.png';
import iconUser from 'assets/images/small_icon_user.png'; 
import iconCheck from 'assets/images/large_icon_white_check.png'; 
import iconClose from 'assets/images/large_icon_white_close.png'; 

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation: this.props.form,
      status: "incomplete"
    } 

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  displayDate(){
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const date = this.props.form.date.split("-");
    return (new Date(...date)).toLocaleDateString('en-US', DATE_OPTIONS)
  }

  displayPartySize() {
    if (this.props.form.party_size === "1") {
      return "1 person";
    } else {
      return this.props.form.party_size + " people";
    }
  }

  displayMessages() {
    if (this.state.status === "incomplete") {
      return <h3>You're almost done!</h3>;
    } else if (this.state.status === "success") {
      return (
        <div className="success-messages container">
          <img className="success icon" src={iconCheck} alt="icon check"/>
          <div className="success-messages summary">
            <p className="main-message">Thanks! Your reservation is confirmed.</p>
            <p>Confirmation #00000</p>
          </div>
        </div>
      )
    } else if (this.state.status === "failed") {
      return (
        <div className="failed-messages container">
          <img className="failed icon" src={iconClose} alt="icon close" />
          <div className="failed-messages summary">
            <p className="main-message">{this.props.errors}</p>
            <p>Try again</p>
          </div>
        </div>
      )
    }
  }

  displayRequestBox() {
    if (this.state.status === "incomplete") {
      return (
        <div className="reservation-form special-requests">
          <input
            type="text"
            className="form input"
            value={this.state.specialRequest}
            onChange={this.handleChange('optional_request')}
            placeholder="Add a special request (optional)"
          />
        </div>
      )
    } else {
      return "";
    }
  }

  displayButtons() {
    if (this.state.status === "incomplete") {
      return (
        <div className="reservation-form action-button-and-link">
          <input
            className="large main button submit"
            type="submit"
            onClick={this.handleSubmit}
            value={this.props.formType}
          />

          <p className="link-container">
            <a
              className="secondary link"
              onClick={this.goBack}
            >Cancel
            </a>
          </p>
        </div>
      )
    } else {
      return "";
    }
  }

  displayFootnote() {
    if (this.state.status === "incomplete") {
      return (
        <p className="reservation-form foot-note">By clicking “Complete reservation”, you agree to the <span className='hightlight text'>OpenKitchen Terms of Use</span> and <span className='hightlight text'>Privacy Policy</span>.</p>
      )
    } else {
      return "";
    }
  }

  displayUpdateLinks() {
    if (this.state.status === "success") {
      debugger
      let reservationId = this.state.reservation.id;
      return (
        <div className="reservation-form action-links">
          <Link className="secondary link" to={`/reservations/${reservationId}/edit`}>Modify your Reservation</Link>
        </div>
      )
    } else {
      return "";
    }
  }

  handleChange(type){
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state.reservation)
      .then(res => this.setState({ status: "success", reservation: res.reservation }))
      .fail(error => this.setState({ status: "failed" }))
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="reservation-form container">
          
        {this.displayMessages()}

        <div className="reservation-form summary">
          <div className="reservation-form kitchen-img">
            <img 
              src="https://content.phuket101.net/wp-content/uploads/20190731181616/phuket-cooking-classes.jpg"  
              alt="kitchen imgage"/>
          </div>

          <div className="reservation-form name-dtp">
            <h2>{this.props.kitchen.name}</h2>

            <div className="reservation-form name-dtp dtp">
              <div className="reservation-form name-dtp date">
                <img className="small icon calendar light" src={iconCalendar} />
                <p>{this.displayDate()}</p>
              </div>

              <div className="reservation-form name-dtp time">
                <img className="small icon clock light" src={iconClock} />
                <p>{this.props.time}</p>
              </div>
  
              <div className="reservation-form name-dtp party">
                <img className="small icon suser light" src={iconUser} />
                <p>{this.displayPartySize()}</p>
              </div>
            </div>
          </div>
        </div>
        { this.displayRequestBox() }
        { this.displayButtons() }
        { this.displayFootnote() }
        { this.displayUpdateLinks() }
      </div>
    )
  }
}

export default ReservationForm;