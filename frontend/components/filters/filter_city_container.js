import { connect } from 'react-redux';

import CityFilter from './search';
import { updateFilter } from '../../actions/filters_actions';

const mapStateToProps = state => {
  return {
    cities: Object.values(state.entities.cities)
  }
};

const mapDistpatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(CityFilter);