import React from 'react';

import SignUpFormContainer from '../session_form/signup_form_container';
import LogInFormContainer from '../session_form/login_form_container';
import CancelReservationContainer from '../reservations/cancel_reservation_container';
import SuccessCancelContainer from '../reservations/success_cancel_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.displayModal = this.displayModal.bind(this);
    this.displayContent = this.displayContent.bind(this);
  }

  displayModal() {
    if (!this.props.modal.open) {
      return "";
    } else {
      return (
        <div id="modal">
          <div id="modal-screen"></div>
          <span
            className="modal-close js-modal-close"
            onClick={this.props.closeModal}>
            &times;
          </span>
          { this.displayContent() }
        </div>
      )
    }
  }

  displayContent() {
    let modal = this.props.modal;
    if (modal.showSignUp) {
      return <SignUpFormContainer />
    } else if (modal.showLogIn) {
      return <LogInFormContainer />
    } else if (modal.showCancel) {
      return <CancelReservationContainer />
    } else if (modal.showSuccessCancel) {
      return <SuccessCancelContainer />
    }
  }

  render() {
    return (
      <div>
        { this.displayModal() }
      </div>
    )
  }
}

export default Modal;