import React from 'react';

import iconCalendar from 'assets/images/small_icon_calendar.png'; // uses the assets alias to map to the client/app/assets/ directory followed by `images/my-image.png`
import iconClock from 'assets/images/small_icon_clock.png'; 
import iconUser from 'assets/images/small_icon_user.png'; 
import iconLocation from 'assets/images/small_icon_location.png'; 


class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    let today = new Date().toISOString().substr(0, 10);
    this.state = {
      date: today,
      time: "12",
      party_size: "2",
      location_id: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllLocations();
    this.props.fetchAllCuisines();
  }

  generateTimeOptions() {
    const timeOptions = [];
    for (let i = 9; i < 21; i++) {
      timeOptions.push(i);
    };
    let val;
    return timeOptions.map((opt, i) => {
      if (opt < 12) {
        val = opt + ":00 AM";
      } else if (opt === 12) {
        val = opt + ":00 PM";
      } else {
        val = (opt % 12) + ":00 PM";
      }
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
    return partyOptions.map((opt, i) =>{
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

  generateCityOptions() {
    return this.props.locations.map(location => 
      <option
        className="select items"
        key={location.id}
        value={location.id}
      >{location.city + ", " + location.country}
      </option>
    )
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value }) 
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchKitchens(this.state)
      .then(kitchens => this.props.history.push('/search'))
  }

  render() {
    return (
      <div className="search bar">
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

          <div className="input-container with-icon">
            <img className="small icon location" src={iconLocation} />
            <select
              className="city-country selector"
              value={this.state.location_id}
              onChange={this.handleChange("location_id")}
            >
              {this.generateCityOptions()}
            </select>
          </div>
         
          <button type="submit" className="main medium button search">Search</button>
        </form>
      </div>
    )
  }
};

export default SearchBar;
