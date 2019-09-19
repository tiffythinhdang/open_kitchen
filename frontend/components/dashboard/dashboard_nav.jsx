import React from 'react';
import { Link } from 'react-router-dom';

class DashBoardNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard nav">
        <div className="dashboard nav-link">
          <Link to='/my/profile'>My Profile</Link>
        </div>
        <div className="dashboard nav-link">
          <Link to='/my/reservations'>My Reservations</Link>
        </div>
        <div className="dashboard nav-link">
          <Link to='/my/favorites'>My Saved Kitchens</Link>
        </div>
      </div>
    )
  }
}

export default DashBoardNav;