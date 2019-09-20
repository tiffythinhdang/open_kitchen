import { connect } from 'react-redux';

import KitchenShow from './kitchen_show';
import { fetchAKitchen } from '../../actions/kitchen_actions';
import { fetchFavorites, createFavorite, deleteFavorite } from '../../actions/favorites_actions';

const mapStateToProps = (state, ownProps) => {
  const kitchenId = ownProps.match.params.kitchenId;
  const favorites = Object.values(state.entities.favorites);
  let favKitchenIds = favorites.map(favorite => favorite.kitchenId);
  return {
    kitchen: state.entities.kitchens[kitchenId],
    currentUserId: state.session.currentUserId,
    favorites: state.entities.favorites,
    favKitchenIds: favKitchenIds,
    favorite: {
      user_id: state.session.currentUserId,
      kitchen_id: kitchenId
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAKitchen: (kitchenId) => dispatch(fetchAKitchen(kitchenId)),
    fetchFavorites: () => dispatch(fetchFavorites()),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(KitchenShow);