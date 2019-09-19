import React from 'react';

const UserBasicInfo = ({ user }) => {
  return (
    <div className="user-basic-info container">
      <div className="user-basic-info titles-container">
        <p className="user-title">First Name</p>
        <p className="user-title">Last Name</p>
        <p className="user-title">Email</p>
        <p className="user-title">Location</p>
      </div>
      <div className="user-basic-info info-container">
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
        <p>{user.location ? user.location : "Not provided"}</p>
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