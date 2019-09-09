import React from 'react';
import GreetingContainer from './greeting_container';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <img src="../../../../assets/finalize_logo.png" alt="logo"/>
        <GreetingContainer />
      </div>
    )
  }
}

export default TopBar;