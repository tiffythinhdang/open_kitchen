import { connect } from 'react-redux';

import CuisineFilter from './filter_cuisine';
import { updateFilter } from '../../actions/filters_actions';

const mapStateToProps = state => {
  const filteredCuisines = state.ui.filters.cuisine || [];
  return {
    cuisines: state.entities.cuisines,
    filteredCuisines: filteredCuisines
  }
};

const mapDistpatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(CuisineFilter);

