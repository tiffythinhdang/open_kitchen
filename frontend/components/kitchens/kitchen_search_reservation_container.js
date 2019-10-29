import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { receiveSearch } from '../../actions/search_actions';

import KitchenSearchReservation from './kitchen_search_reservation';

const mapStateToProps = state => {
  return {
    search: state.search
  }
};

const mapDispatchToProps = dispatch => {
  return {
    receiveSearch: (search) => dispatch(receiveSearch(search))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KitchenSearchReservation));