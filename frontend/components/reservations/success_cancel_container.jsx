import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';

class SuccessCancel extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="success-cancel modal-alert container">
        <div className="success-cancel summary">
          <p className="question">Your reseravation has been cancelled.</p>

          <button
            type="submit"
            className="large main button cancel"
            onClick={this.handleClick}
          >Back to Search
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
};

export default withRouter(connect(null, mapDispatchToProps)(SuccessCancel));