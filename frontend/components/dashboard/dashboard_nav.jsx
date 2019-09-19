import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class DashBoardNav extends React.Component {
  constructor(props) {
    super(props);
  }

  displayActiveLink(type) {
    if (type === this.props.match.path) {
      return "active";
    }
  }

  render() {
    return (
      <div className="dashboard nav">
        <div className="dashboard nav-link">
          <Link className={this.displayActiveLink("/my/profile")} to='/my/profile'>My Profile</Link>
        </div>
        <div className="dashboard nav-link">
          <Link className={this.displayActiveLink("/my/reservations")} to='/my/reservations'>My Reservations</Link>
        </div>
        <div className="dashboard nav-link">
          <Link className={this.displayActiveLink("/my/favorites")} to='/my/favorites'>My Saved Kitchens</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(DashBoardNav);