import React from 'react';

const DropDownPersonalNav = ({ logOut }) => {
  return (
    <div className="drop down container hidden">
      <div className="drop down personal nav">
        {/* <div className="arrow-up"></div> */}
        <div className="drop down items">
          <a href="#" className="link">My profile</a>
        </div>

        <div className="drop down items">
          <a href="#" className="link">My Reservations</a>
        </div>

        <div className="drop down items">
          <a href="#" className="link">My Saved Kitchens</a>
        </div>

        <div className="drop down items last">
          <a onClick={logOut} className="link">Log Out</a>
        </div>
      </div>
    </div>
  )
};

export default DropDownPersonalNav;