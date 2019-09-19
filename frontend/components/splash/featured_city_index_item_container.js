import { connect } from 'react-redux';

import { fetchKitchens } from '../../actions/kitchen_actions';
import { receiveSearch } from '../../actions/search_actions';

import FeaturedCityIndexItem from './featured_city_index_item';

const mapStateToProps = state => {
  return {
    locations: Object.values(state.entities.locations)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchKitchens: (request) => dispatch(fetchKitchens(request)),
    receiveSearch: (search) => dispatch(receiveSearch(search))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCityIndexItem);