import { connect } from 'react-redux';

import KitchenIndex from './kitchen_index';
import { fetchAKitchen } from '../../actions/kitchen_actions';

const mapStateToProps = state => {
  return {
    kitchens: Object.values(state.entities.kitchens)
  }
};

const mapDistpatchToProps = dispatch => {
  return {
    fetchAKitchen: (kitchenId) => dispatch(fetchAKitchen(kitchenId))
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(KitchenIndex);