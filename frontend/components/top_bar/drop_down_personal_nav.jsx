import React from 'react';

const DropDownPersonalNav = ({ logOut }) => {
  return (
    <div className="drop down personal nav">
      <div>
        <a href="#">My profile</a>
      </div>

      <div>
        <a href="#">My Reservations</a>
      </div>

      <div>
        <a href="#">My Saved Kitchens</a>
      </div>

      <div>
        <a onClick={logOut()}>Log Out</a>
      </div>
    </div>
  )
};

export default DropDownPersonalNav;