import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchAllCuisines } from '../../actions/cuisines_action';
import { fetchKitchens } from '../../actions/kitchen_actions';
import { receiveSearch } from '../../actions/search_actions';

import SearchBar from './search_bar';

const mapStateToProps = state => {
  return {
    search: state.search,
    locations: Object.values(state.entities.locations)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllLocations: () => dispatch(fetchAllLocations()),
    fetchAllCuisines: () => dispatch(fetchAllCuisines()),
    fetchKitchens: (request) => dispatch(fetchKitchens(request)),
    receiveSearch: (search) => dispatch(receiveSearch(search))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));