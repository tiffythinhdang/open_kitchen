import { connect } from 'react-redux';

import KitchenShow from './kitchen_show';
import { fetchAKitchen } from '../../actions/kitchen_actions';

const mapStateToProps = (state, ownProps) => {
  const kitchenId = ownProps.match.params.kitchenId;
  return {
    kitchen: state.entities.kitchens[kitchenId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAKitchen: (kitchenId) => dispatch(fetchAKitchen(kitchenId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(KitchenShow);