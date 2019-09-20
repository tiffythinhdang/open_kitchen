import React from 'react';
import { Link } from 'react-router-dom';

class DropDownPersonalNav extends React.Component {
  logOutAndRedirect() {
    this.props.logOut().then(this.props.history.push('/'))
  };

  render() {
    return (
      <div className="drop down container hidden">
        <div className="drop down personal nav">
          <div className="drop down items">
            <Link className="link" to='/my/profile'>My Profile</Link>
          </div>
  
          <div className="drop down items">
            <Link className="link" to='/my/reservations'>My Reservations</Link>
          </div>
  
          <div className="drop down items">
            <Link className="link" to='/my/favorites'>My Saved Kitchens</Link>
          </div>
  
          <div className="drop down items last">
            <a onClick={this.logOutAndRedirect.bind(this)} className="link">Log Out</a>
          </div>
        </div>
      </div>
    )
  }
};

export default DropDownPersonalNav;