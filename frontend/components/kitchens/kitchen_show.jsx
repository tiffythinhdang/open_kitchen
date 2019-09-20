import React from 'react';
import { HashLink } from 'react-router-hash-link';

import KitchenBasicInfo from './kitchen_basic_info';
import ReviewIndexContainer from '../reviews/review_index_container';
import KitchenCreateReservationContainer from '../reservations/kitchen_create_reservation_container';
import PhotosIndex from '../photos/photo_index';

class KitchenShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: this.props.favorite
    }

    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    this.props.fetchAKitchen(this.props.match.params.kitchenId)
    this.props.fetchFavorites()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.kitchenId !== this.props.match.params.kitchenId) {
      this.props.fetchAKitchen(this.props.match.params.kitchenId)
    }
  }

  displayFavoriteButton() {
    let kitchenId = this.props.kitchen.id;
    if ( !this.props.favKitchenIds.includes(kitchenId) ) {
      return (
        <button
          className="quaternary medium button favorite"
          id="favorite-button"
          onClick={this.handleFavorite}
        >Save this kitchen
        </button>
      )
    } else {
      return (
        <button
          className="quaternary medium button favorite"
          id="unfavorite-button"
          onClick={this.handleFavorite}
        >Unsave this kitchen
        </button>
      )
    }
  }

  handleFavorite(e) {
    if ( e.target.id === "favorite-button" ) {
      this.props.createFavorite(this.state.favorite)
        .then(favorite => this.props.fetchFavorites())
    } else if ( e.target.id === "unfavorite-button" ) {
      this.props.deleteFavorite(this.state.favorite)
        .then(favorite => this.props.fetchFavorites())
    }
  }

  render() {
    if (!this.props.kitchen) return null;
    return (
      <div className="kitchen-show-outer-container">
        <header className="kitchen-show header">
          { this.displayFavoriteButton() }

          <div className="header-image container">
            <img src="https://www.bakefromscratch.com/wp-content/uploads/2017/09/Unknown-3.jpeg" alt="temp_img"/>
          </div>
        </header>

        <div className="kitchen-show container">
          {/* <KitchenCreateReservationContainer kitchen={this.props.kitchen} /> */}
          
          <div className="kitchen-show nav-container">
            <div className="kitchen-show nav">
              <HashLink 
                to={`/kitchens/${this.props.kitchen.id}#overview`}
                className="kitchen-show-nav item active"
                >Overview
              </HashLink>

              <HashLink
                to={`/kitchens/${this.props.kitchen.id}#menu`}
                className="kitchen-show-nav item"
              >Menu
              </HashLink>

              <HashLink 
                to={`/kitchens/${this.props.kitchen.id}#photos`}
                className="kitchen-show-nav item"
                >Photos
              </HashLink>

              <HashLink 
                to={`/kitchens/${this.props.kitchen.id}#reviews`}
                className="kitchen-show-nav item"
                >Reviews
              </HashLink>
            </div>
            <div className="slider-bar"></div>
          </div>

          <div className="kitchen-show main-content">
            <h1>{this.props.kitchen.name}</h1>
          
            <KitchenBasicInfo kitchen={this.props.kitchen}/>

            <div className="kitchen-show description">
              <h3 id="overview">Overview</h3>
              <p>{this.props.kitchen.description}</p>
            </div>

            <div className="kitchen-show description">
              <h3 id="menu">Menu</h3>
              <p>{this.props.kitchen.menu}</p>
            </div>

            <div className="kitchen-show host-infor">
              <h3>About the host</h3>
              <p>{this.props.kitchen.hostInfor}</p>
            </div>

            <div className="kitchen-show photos">
              <h3 id="photos">Photos</h3>
              <PhotosIndex imageUrls={this.props.kitchen.imageUrls} />
            </div>

            <div className="kitchen-show reviews">
              <h3 id="reviews">Reviews</h3>
              <ReviewIndexContainer kitchen={this.props.kitchen} />
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default KitchenShow;