import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../modal/modal';
import DropDownPersonalNavContainer from './drop_down_personal_nav_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props)

    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
  }

  toggleDropDown(e) {
    e.preventDefault();
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
          <img src="../../../../assets/icons/small_icon_arrow_down.png" alt="arrow_down" />
        </a>
        <DropDownPersonalNavContainer />
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