import React from 'react';
import { Link } from 'react-router-dom';
import DropDownPersonalNavContainer from './drop_down_personal_nav_container';

const Greeting = ({ currentUser, logOut }) => {
  const toggleDropDown = (e) => {
    e.preventDefault();
    let dropDown = document.getElementsByClassName("drop down personal nav")[0];
    dropDown.classList.toggle("hidden");
  }

  const sessionLinks = () => (
    <div className="session links">
      <Link to={'/signup'}>
        <button className="small secondary button">Sign Up</button>
      </Link>
      <Link to={'/login'} className="login link">
        Log In
      </Link>
    </div>
  );

  const personalGreeting = () => (
    <div className="personal greeting">
      <a className="greeting message">Hi {currentUser.firstName}</a>
      <a onClick={toggleDropDown} className="drop-down small icon">
        <img src="../../../../assets/icons/small_icon_arrow_down.png" alt="arrow_down" />
      </a>
      <DropDownPersonalNavContainer />
    </div>
  );

  return (
    currentUser ? personalGreeting() : sessionLinks()
  )
};

export default Greeting;