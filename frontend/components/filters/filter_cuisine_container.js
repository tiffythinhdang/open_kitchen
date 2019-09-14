import { connect } from 'react-redux';

import CuisineFilter from './filter_cuisine';
import { updateFilter } from '../../actions/filters_actions';

const mapStateToProps = state => {
  return {
    cuisines: Object.values(state.entities.cuisines)
  }
};

const mapDistpatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(CuisineFilter);

