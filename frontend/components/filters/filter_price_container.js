import { connect } from 'react-redux';

import PriceFilter from './filter_price';
import { updateFilter } from '../../actions/filters_actions';

const mapStateToProps = state => {
  const filteredPrices = state.ui.filters.cuisine || [];
  return {
    filteredPrices: filteredPrices
  }
};

const mapDistpatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(PriceFilter);

