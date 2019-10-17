import React from 'react';
import githubIcon from 'assets/images/icon_github_white_large.png';
import linkednInIcon from 'assets/images/icon_linkedin_white_large.png';
import portfolioIcon from 'assets/images/icon_portfolio_white_large.png';
import profileImg from 'assets/images/profile_img.jpg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer content">
        <div className="footer block">
          <div className="footer block item">
            <p className="footer block title">OPEN KITCHEN</p>
            <a
              className="link"
              href="https://github.com/tiffythinhdang/aa_full_stack_project_open_kitchen"
              target="_blank"
            >About the Code</a>
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

          <div className="footer block item ">
            <div className="profile-img container">
              <img src={profileImg} alt="profile_img" />
            </div>
          </div>

          <div className="footer block item profile">
            <div>Hi! My name is Tiffany, and I am the developer behind this website. Check out my other works and interests from my LinkedIn, Github, and Portfolio below.
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/tiffany-thinh-dang-8bb07562/"
                target="_blank">
                <img className="medium icon" src={linkednInIcon} alt="linkedin-icon" />
              </a>
              <a
                href="https://github.com/tiffythinhdang"
                target="_blank">
                <img className="medium icon" src={githubIcon} alt="github-icon"/>
              </a>
              <a
                href="https://tiffanytdang.com/"
                target="_blank">
                <img className="medium icon" src={portfolioIcon} alt="contact-icon"/>
              </a>
            </div>
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