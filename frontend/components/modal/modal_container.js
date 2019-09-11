import { connect } from 'react-redux';

import Modal from './modal';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  }
}

const mapDispatchToProps = state => {
  return {
    openModal: (content) => dispatchEvent(openModal(content)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);