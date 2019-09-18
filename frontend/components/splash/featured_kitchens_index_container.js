import { connect } from 'react-redux';

import { fetchKitchens } from '../../actions/kitchen_actions';

import FeaturedKitchenIndex from './featured_kitchens_index';

const mapStateToProps = state => {
  return {
    kitchens: Object.values(state.entities.kitchens)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchKitchens: (request) => dispatch(fetchKitchens(request))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedKitchenIndex);