import React from 'react';
import { Link } from 'react-router-dom';

import displayPartySize from '../../util/display_party_size';

class MyReservationsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  displayModifyButton() {
    if (this.props.reservation.state === "upcoming") {
      return (
        <Link target="_blank" to={`/reservations/${this.props.reservation.id}`}>
          <button className="small main button">Modify</button>
        </Link>
      )
    }
  }

  render() {
    const { kitchenId, kitchenName, date, imageUrl, state, partySize, id } = this.props.reservation;
    return (
      <div className="reservation-index item">
        <Link target="_blank" to={`/kitchens/${kitchenId}`}>
          <div className="kitchen-img">
            <img src={imageUrl} alt=""/>
          </div>
        </Link>

        <div className="reservation-item main-content">
          <div className="reservation-item info">
            <Link target="_blank" to={`/kitchens/${kitchenId}`}>
              <div className="kitchen-name">{kitchenName}</div>
            </Link>
            <div className="res-date">{date}</div>
            <div className="res-state">{state}</div>
            <div className="res-party">for {displayPartySize(partySize)}</div>
          </div>
          {this.displayModifyButton()}
        </div>
      </div>
    )
  }
}

export default MyReservationsIndexItem;