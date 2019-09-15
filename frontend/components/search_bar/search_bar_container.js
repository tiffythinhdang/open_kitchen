import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchAllCities } from '../../actions/cities_action';
import { fetchAllCuisines } from '../../actions/cuisines_action';
import { fetchKitchens } from '../../actions/kitchen_actions';

import SearchBar from './search_bar';

const mapStateToProps = state => {
  return {
    cities: Object.values(state.entities.cities)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCities: () => dispatch(fetchAllCities()),
    fetchAllCuisines: () => dispatch(fetchAllCuisines()),
    fetchKitchens: (request) => dispatch(fetchKitchens(request))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));