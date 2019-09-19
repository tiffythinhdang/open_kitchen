import { connect } from 'react-redux';

import KitchenIndex from './kitchen_index';
import { fetchAKitchen } from '../../actions/kitchen_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUserId;
  return {
    kitchens: ownProps.kitchens,
    currentUser: state.entities.users[currentUserId]
  }
};

const mapDistpatchToProps = dispatch => {
  return {
    fetchAKitchen: (kitchenId) => dispatch(fetchAKitchen(kitchenId)),
    openModal: (content) => dispatch(openModal(content)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(KitchenIndex);