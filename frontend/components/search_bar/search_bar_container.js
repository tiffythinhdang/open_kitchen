import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { fetchAllCities } from '../../actions/cities_action';
import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchAllCuisines } from '../../actions/cuisines_action';
import { fetchKitchens } from '../../actions/kitchen_actions';

import SearchBar from './search_bar';

const mapStateToProps = state => {
  return {
    locations: Object.values(state.entities.locations)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllLocations: () => dispatch(fetchAllLocations()),
    fetchAllCuisines: () => dispatch(fetchAllCuisines()),
    fetchKitchens: (request) => dispatch(fetchKitchens(request))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));