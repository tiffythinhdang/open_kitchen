import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchAllCities } from '../../actions/cities_action';
import { fetchKitchens } from '../../actions/kitchen_actions';

import SearchBar from './search_bar';

const mapStateToProps = state => {
  return {
    cities: state.entities.cities
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCities: () => dispatch(fetchAllCities()),
    fetchKitchens: (request) => dispatch(fetchKitchens(request))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));