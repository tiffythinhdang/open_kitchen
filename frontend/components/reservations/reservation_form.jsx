import React from 'react';
import { Link } from 'react-router-dom';

import iconCalendar from 'assets/images/small_icon_calendar.png';
import iconClock from 'assets/images/small_icon_clock.png';
import iconUser from 'assets/images/small_icon_user.png';  

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;

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

  handleChange(type){
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
      .then(res => this.props.history.push(`/reservations/${res.reservation.id}`))
      .fail(error => this.renderErrors(error))
  }

  renderErrors() {
    return (
      <ul className="errors">
        {
          this.props.errors.map((err, i) => (
            <li key={`error-${i}`}>
              {err}
            </li>
          ))
        }
      </ul>
    )
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="reservation-form-outer-container">
        <div className="reservation-form container">

          {this.renderErrors()}

          <h3>You're almost there!</h3>

          <div className="reservation-form summary">
            <div className="reservation-form kitchen-img">
              <Link target="_blank" to={`/kitchens/${this.props.form.kitchen_id}`}>
                <img
                  src={this.props.kitchen.profilePhoto}
                  alt="kitchen imgage" />
              </Link>
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

          <div className="reservation-form special-requests">
            <input
              type="text"
              className="form input"
              value={this.state.specialRequest}
              onChange={this.handleChange('optional_request')}
              placeholder="Add a special request (optional)"
            />
          </div>

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

          <p className="reservation-form foot-note">By clicking “Complete reservation”, you agree to the <span className='hightlight text'>OpenKitchen Terms of Use</span> and <span className='hightlight text'>Privacy Policy</span>.</p>
        </div>
        <div className="reservation-form cooking-image">
          <img src="https://image.flaticon.com/sprites/new_packs/2010744-cooking.png" alt="cooking-image"/>
        </div>
      </div>
    )
  }
}

export default ReservationForm;