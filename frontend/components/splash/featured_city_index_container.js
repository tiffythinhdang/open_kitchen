import { connect } from 'react-redux';

import { fetchKitchens } from '../../actions/kitchen_actions';

import FeaturedCityIndex from './featured_city_index';

const mapStateToProps = state => {
  return {
    locations: Object.values(state.entities.locations)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchKitchens: (request) => dispatch(fetchKitchens(request))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCityIndex);