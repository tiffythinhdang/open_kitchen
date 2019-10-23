import React from 'react';

const UserBasicInfo = ({ user }) => {
  return (
    <div className="user-basic-info container">
      <div className="user-basic-info items-container">
        <div className="user-basic-info item name">
          <p className="user-title">First Name</p>
          <p>{user.firstName}</p>
        </div>

        <div className="user-basic-info item last-name">
          <p className="user-title">Last Name</p>
          <p>{user.lastName}</p>
        </div>

        <div className="user-basic-info item email">
          <p className="user-title">Email</p>
          <p>{user.email}</p>
        </div>

        <div className="user-basic-info item location">
          <p className="user-title">Location</p>
          <p>{user.location ? user.location : "Not provided"}</p>
        </div>
      </div>

      <div className="user-basic-info user-initials container">
        <div className="user-basic-info user-initials text">
          {user.firstName[0] + user.lastName[0]}
        </div>
      </div>
    </div>
  )
}

export default UserBasicInfo;