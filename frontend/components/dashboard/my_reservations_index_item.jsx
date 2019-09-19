import React from 'react';

import displayPartySize from '../../util/display_party_size';

class MyReservationsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { kitchenName, date, picture_url, state, partySize } = this.props.reservation;
    return (
      <div className="reservation-index item">
        <div className="kitchen-img">
          <img src={picture_url} alt=""/>
        </div>

        <div className="reservation-item main-content">
          <div>{kitchenName}</div>
          <div>{date}</div>
          <div>{state}</div>
          <div>For {displayPartySize(partySize)}</div>
        </div>
      </div>
    )
  }
}

export default MyReservationsIndexItem;