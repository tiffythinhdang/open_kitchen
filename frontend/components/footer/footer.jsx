import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-content">
        <div className="footer block">
          <p className="footer block title">OPEN KITCHEN</p>
          <a href="#">About</a>
          <a href="#">Inpriration site</a>
        </div>

        <div className="footer block">
          <p className="footer block title">DISCOVER</p>
          <a href="#">Beautiful Food Blogs</a>
          <a href="#">2020 Food Trends Forecast</a>
        </div>

        <div className="footer disclaimer note">
          <p>All images and information used on this site are sourced from various sites, including OpenTable, AirBnB, and online food blogs around the world. I do not own any of them and do not use them for any individual gain. OpenKitchen is meant to be a non-profit personal project.</p>
        </div>
      </footer>
    )
  }
}

export default Footer;