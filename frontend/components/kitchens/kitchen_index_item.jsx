import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import RatingDisplay from './rating_display';
import convertNumberToTime from '../../util/convert_time_util';

class KitchenIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMakeReservation = this.handleMakeReservation.bind(this);
  }

  displayPrice(){
    switch (this.props.kitchen.cost) {
      case 2:
        return "$$";
      
      case 3:
        return "$$$";

      case 4:
        return "$$$$";

      default:
        return "Price is not published";
    }
  }

  displayTimeslots(){
    const availableTimeslots = this.props.kitchen.availableTimeslots;
    return availableTimeslots.map(timeslot => 
      <input
        type="submit" 
        className="main medium button timeslot"
        key={timeslot.id} 
        onClick={this.handleMakeReservation(timeslot.id)}
        value={convertNumberToTime(timeslot.time)}
      />
    )
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/kitchens/${this.props.kitchen.id}`)
  }

  handleMakeReservation(timeSLotId) {
    return (e) => {
      e.preventDefault();
      const kitchen = this.props.kitchen;
      const req_time = e.target.value;

      this.props.history.push({
        pathname: '/reservations/new',
        search: `kitchenId=${kitchen.id}&time=${req_time}&timeSlotId=${timeSLotId}`
      });
    }
  }

  render() {
    return (
      <div className="kitchen-index item-container">
        <div className="kitchen-index item profile-img">
          {/* Need to link real pictures with S3 later */}
          <Link target="_blank" to={`/kitchens/${this.props.kitchen.id}`}> 
            <img
              src="https://content.phuket101.net/wp-content/uploads/20190731181616/phuket-cooking-classes.jpg"
              alt="profile-picture"
            />
          </Link>
        </div>

        <div className="kitchen-index item-infor">
          <Link target="_blank" to={`/kitchens/${this.props.kitchen.id}`}>
            {this.props.kitchen.name}
          </Link>

          <div className="kitchen-index item rating-review">
              <div className="rating">
                <RatingDisplay rating={this.props.kitchen.averageRating} />
              </div>
            <p className="review">{this.props.kitchen.numberReviews} reviews</p>
          </div>

          <div className="kitchen-index item cpl">
            <div className="kitchen-index item cuisine">
              <p>Cuisine</p>
              <p className="infor">{this.props.kitchen.cuisine}</p>
            </div>

            <div className="kitchen-index item price">
              <p>Price</p>
              <p className="infor">{this.displayPrice()}</p>
            </div>

            <div className="kitchen-index item location">
              <p>Location</p>
              <p className="infor">{this.props.kitchen.region}</p>
            </div>

          </div>
          
          <div className="kitchen-index item-timeslots">
            {this.displayTimeslots()}
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(KitchenIndexItem);