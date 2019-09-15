import { connect } from 'react-redux';

import RatingFilter from './filter_rating';
import { updateFilter } from '../../actions/filters_actions';

const mapStateToProps = state => {
  const averageRating = state.ui.filters.averageRating || [];
  return {
    averageRating: averageRating
  }
};

const mapDistpatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(RatingFilter);

