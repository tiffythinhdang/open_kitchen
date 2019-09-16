import React from 'react';

import iconCalendar from 'assets/images/small_icon_calendar.png';
import iconClock from 'assets/images/small_icon_clock.png';
import iconUser from 'assets/images/small_icon_user.png'; 

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;
  }

  displayDate(){
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return (new Date(this.props.form.date)).toLocaleDateString('en-US', DATE_OPTIONS)
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
    e.preventDefault()
  }

  render() {
    return (
      <div className="reservation-form container">
        <h3>You're almost done!</h3>

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
                <p className="reservation-form date">{this.displayDate()}</p>
              </div>

              <div className="reservation-form name-dtp time">
                <img className="small icon clock light" src={iconClock} />
                <p className="reservation-form date">{this.props.time}</p>
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
            // onChange={this.handleChange('specialRequest')}
            placeholder="Add a special request (optional)"
          />
        </div>

        <input 
          className="large main button submit"
          type="submit"
          onClick={this.handleSubmit}
          value={this.props.formType}
        />
      </div>
    )
  }
}

export default ReservationForm;