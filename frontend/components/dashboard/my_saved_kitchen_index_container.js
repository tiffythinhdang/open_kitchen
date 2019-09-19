import { connect } from 'react-redux';
import { fetchFavorites, deleteFavorite } from '../../actions/favorites_actions';

import MySavedKitchenIndex from './my_saved_kitchen_index';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    favorites: Object.values(state.entities.favorites)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFavorites: () => dispatch(fetchFavorites()),
    deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MySavedKitchenIndex);