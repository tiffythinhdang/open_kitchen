import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logOut }) => {
  const sessionLinks = () => (
    <div>
      <Link to={'/signup'}>
        <button className="small secondary button">Sign Up</button>
      </Link>
      <Link to={'/login'} className="login link">
        Log In
      </Link>
    </div>
  );

  const personalGreeting = () => (
    <div>
      <a className="greeting message">Hi {currentUser.firstName}</a>
      <a>
        <img src="../../../../assets/icons/small_icon_arrow_down.png" alt="arrow_down" />
      </a>
    </div>
  );

  return (
    currentUser ? personalGreeting() : sessionLinks()
  )
};

export default Greeting;