import React from 'react';

const DropDownPersonalNav = ({ logOut }) => {
  return (
    <div className="drop down personal nav hidden">
      <div className="arrow-up"></div>
      <div>
        <a href="#" className="link">My profile</a>
      </div>

      <div>
        <a href="#" className="link">My Reservations</a>
      </div>

      <div>
        <a href="#" className="link">My Saved Kitchens</a>
      </div>

      <div>
        <a onClick={logOut} className="link">Log Out</a>
      </div>
    </div>
  )
};

export default DropDownPersonalNav;