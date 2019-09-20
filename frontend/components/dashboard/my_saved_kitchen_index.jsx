import React from 'react';

import MySavedKitchenIndexItem from './my_saved_kitchen_index_item';

class MySavedKitchenIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavorites();
  }

  render() {
    if (!this.props.favorites) return null;
    return (
      <div className="favorites-index container">
        <h1 className="favorites-title">My Saved Kitchens</h1>
          {
            this.props.favorites.map(favorite =>
              <MySavedKitchenIndexItem
                key={favorite.id}
                favorite={favorite}
              />
            )
          }
      </div>
    )
  }
}

export default MySavedKitchenIndex;