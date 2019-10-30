import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Search from './search';
import { updateFilter } from '../../actions/filters_actions';


const mapStateToProps = state => {
  return {
    kitchens: Object.values(state.entities.kitchens),
    filters: state.ui.filters
  }
};

const mapDistpatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
};

export default withRouter( connect(mapStateToProps, mapDistpatchToProps)(Search) );