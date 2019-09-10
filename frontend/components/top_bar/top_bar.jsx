import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from './greeting_container';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="top bar">
        <Link to={'/'} className="logo">
          <img src="../../../../assets/finalize_logo.png" alt="logo"/>
        </Link>
        <GreetingContainer />
      </div>
    )
  }
}

export default TopBar;