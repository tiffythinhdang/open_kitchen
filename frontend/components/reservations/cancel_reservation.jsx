import React from 'react';

class CancelReservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.reservationId,
      state: "cancelled"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReservation(this.state)
      .then(reservation => {
        this.props.closeModal();
        this.props.openModal("showSuccessCancel")
      })
  }

  render() {
    return (
      <div className="cancel-reservation modal-alert container">
        <div className="cancel-reservation summary">
          <p className="question">Are you sure you want to cancel this reservation?</p>

          <button
            type="submit"
            className="large main button cancel"
            onClick={this.handleSubmit}
          >Cancel Reservation
          </button>
          <p className="link-container">
            <a
              className="secondary link"
              onClick={this.props.closeModal}
            >No, keep this reservation
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default CancelReservation;