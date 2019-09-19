import React from 'react';
import { Link } from 'react-router-dom';

const ToSearchAndResButtons = () => {
  return (
    <div className="buttons-container">
      <Link to='/search'>
        <button className="tertiary small button to-main">Main Page</button>
      </Link>
      <Link to='/my/reservations'>
        <button className="tertiary small button to-res">My Reservations</button>
      </Link>
    </div>
  )
}

export default ToSearchAndResButtons;

