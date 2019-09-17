import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _nullModal = {
  open: false
};

const modalReducer = (state = _nullModal, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case OPEN_MODAL:
      return {open: true, [action.content]: true, params: action.params };

    case CLOSE_MODAL:
      return _nullModal;
  
    default:
      return state;
  }
}

export default modalReducer;