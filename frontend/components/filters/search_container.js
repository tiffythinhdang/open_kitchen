import { connect } from 'react-redux';

import Search from './search';
import { updateFilter } from '../../actions/filters_actions';

const mapStateToProps = state => {
  return {
    kitchens: Object.values(state.entities.kitchens),
    cities: Object.values(state.entities.cities)
    // cuisines: Object.values(state.entities.cities),
  }
};

const mapDistpatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(Search);