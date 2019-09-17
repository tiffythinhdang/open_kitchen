import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer content">
        <div className="footer block">
          <div className="footer block item">
            <p className="footer block title">OPEN KITCHEN</p>
            {/* TODO: add the About Page link once the page is completed */}
            <a className="link" href="#">About</a>
            <a 
              className="link" 
              href="https://www.opentable.com/" 
              target="_blank"
              >Inspiration site
            </a>
          </div>

          <div className="footer block item">
            <p className="footer block title">DISCOVER</p>
            <a 
              className="link" 
              href="https://influencermarketinghub.com/12-best-food-blogs/"
              target="_blank"
              >Beautiful Food Blogs
            </a>
            <a 
              className="link" 
              href="https://www.eater.com/a/food-cities-maps-travel-guide"
              target="_blank"
              >Eater: Around the World</a>
          </div>
        </div>

        <div className="footer disclaimer note">
          <p>All images and information used on this site are sourced from various sites, including OpenTable, AirBnB, and online food blogs around the world. I do not own any of them and do not use them for any individual gain. OpenKitchen is meant to be a non-profit personal project.</p>
        </div>
      </footer>
    )
  }
}

export default Footer;