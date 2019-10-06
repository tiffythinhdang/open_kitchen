import React from 'react';
import { Link } from 'react-router-dom';

import DropDownPersonalNavContainer from './drop_down_personal_nav_container';
import iconArrowDown from 'assets/images/small_icon_arrow-down.png'; 

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
  }

  toggleDropDown() {
    let dropDown = document.getElementsByClassName("drop down container")[0];
    dropDown.classList.toggle("hidden");
  }

  sessionLinks() {
    return (
      <div className="session links">
        <button 
          className="small secondary button"
          onClick={() =>this.props.openModal('showSignUp')}
        >Sign Up</button>
        <a 
          className="login link"
          onClick={() => this.props.openModal('showLogIn')}
        >Log In</a>
      </div>
    )
  }

  personalGreeting() {
    return (
      <div className="personal greeting">
        <a className="greeting message">Hi {this.props.currentUser.firstName}</a>
        <a onClick={this.toggleDropDown} className="drop-down small icon">
          <img src={iconArrowDown} alt="arrow_down" />
        </a>
        <DropDownPersonalNavContainer 
          toggleDropDown={this.toggleDropDown}
        />
      </div>
    )
  }

  render () {
    return (
      <div className="top-bar">
        { this.props.currentUser ? this.personalGreeting() : this.sessionLinks() }
      </div>
    )
  }
};

export default Greeting;