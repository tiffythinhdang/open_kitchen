import React from 'react';
import notFoundPanda from 'assets/images/404_Not_Found.png';

class NoMatch extends React.Component {
  render() {
    return (
      <div className="no-match container">
        <div className="no-match-message container">
          <h1>OOPS</h1>
          <p>Sorry looks like what you look for is not there...</p>
        </div>
        <div className="panda container">
          <img src={notFoundPanda} alt="not-found-panda"/>
        </div>
      </div>
    )
  }
}

export default NoMatch;