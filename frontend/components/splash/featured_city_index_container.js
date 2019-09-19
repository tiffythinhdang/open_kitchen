import { connect } from 'react-redux';

import { fetchKitchens } from '../../actions/kitchen_actions';
import { fetchAllLocations } from '../../actions/locations_actions';
import { receiveSearch } from '../../actions/search_actions';

import FeaturedCityIndex from './featured_city_index';

const mapStateToProps = state => {
  return {
    locations: Object.values(state.entities.locations)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    receiveSearch: (search) => dispatch(receiveSearch(search)),
    fetchAllLocations: () => dispatch(fetchAllLocations()),
    fetchKitchens: (request) => dispatch(fetchKitchens(request))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCityIndex);