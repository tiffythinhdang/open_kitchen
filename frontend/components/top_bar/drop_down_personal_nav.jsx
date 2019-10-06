import React from 'react';
import { withRouter } from 'react-router-dom';

class DropDownPersonalNav extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  logOutAndRedirect() {
    this.props.logOut().then(this.props.history.push('/'))
  };

  handleClick(type) {
    return () => { 
      this.props.toggleDropDown();
      switch (type) {
        case "profile":
          return this.props.history.push("/my/profile");
        case "reservations":
          return this.props.history.push("/my/reservations");
        case "favorites":
          return this.props.history.push("/my/favorites");
        default:
          break;
      }
    }
  }

  render() {
    return (
      <div className="drop down container hidden">
        <div className="drop down personal nav">
          <div className="drop down items">
            <a 
              className="link" 
              onClick={this.handleClick("profile")}
              >My Profile
            </a>
          </div>
  
          <div className="drop down items">
            <a
              className="link"
              onClick={this.handleClick("reservations")}
              >My Reservations
            </a>
          </div>
  
          <div className="drop down items">
            <a
              className="link"
              onClick={this.handleClick("favorites")}
              >My Saved Kitchens
            </a>
          </div>
  
          <div className="drop down items last">
            <a onClick={this.logOutAndRedirect.bind(this)} className="link">Log Out</a>
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(DropDownPersonalNav);
