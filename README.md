<!-- Banner -->
<a href="https://aa-open-kitchen.herokuapp.com/#/">
  <img 
    src="https://github.com/tiffythinhdang/aa_full_stack_project_open_kitchen/blob/master/app/assets/images/finalize_logo.png"
    alt="openkitchen logo" 
    align="right" height="40"
  />
</a>

OpenKitchen
======================

<!-- Description -->
**OpenKitchen**, inspired by _OpenTable_, is an online platform that allows users to **_discover_** and **_reserve culinary experiences_** that are **_designed and hosted by locals_** around the world. 

<!-- Image Header -->
<a href="https://aa-open-kitchen.herokuapp.com/#/">
  <img src="https://i.imgur.com/cQc2IYS.png" title="splash-page-screenshoot" />
</a>

<!-- Table of Contents -->
## Table of content

- [Installation](#installation)
    - [Setting up](#setting-up)
    - [Running the app](#running-the-app)
- [OpenKitchen Features](#openkitchen-features)
    - [User Authenticity](#user-authenticity)
    - [Reservation Search and Filter](#reservation-search-and-filter)
    - [Review and Rating](#review-and-rating)
    - [Favorite/ Save](#favorite-save)
    
<!-- Installation -->
## Installation

### Setting up
Please run the following commands:
- bundle install
- npm install
- bundle exec rails db:create
- bundle exec rails db:migrate
- bundle exec rails db:seed

### Running the app
Please run the following commands in seperated tabs:
- rails s
- npm start

<!-- Features to show -->
## OpenKitchen Features

### User Authenticity
- Users can browse through the available kitchens on the site.
- Users can make reservation only if they are logged in. 
- There is a demo-user option for those who want to check out features of the site without having to make an account.

### Reservation Search and Filter
- Users can search for available kitchens by time, date, location, and party size.\
  _This is accomplished through sending ajax calls to the database. Backend code is as below:_
  ```
  class Api::KitchensController < ApplicationController
    def index
      req_location = kitchen_params[:location_id]
      req_party_size = kitchen_params[:party_size].to_i
      req_time = kitchen_params[:time].to_i # return hour of the day
      req_date = kitchen_params[:date].to_date # return the date object of request date
      req_day = kitchen_params[:date].to_time.strftime("%A") # return day of the week

      # Generate 3 timeslots to search for availabilities based on request time & day
      req_timeslots = Timeslot.generate_searching_timeslots(req_time, req_day)

      # Get all kitchens in the search area
      kitchens_in_area = Kitchen.where(location_id: req_location)

      # Filter kitchens based on availability by checking for each timeslot if the kitchen has enough remaining spots to hold the req_party_size 
      @available_kitchens = []
      
      kitchens_in_area.each do |kitchen|
        availabilities = []
        req_timeslots.each do |timeslot|
          if kitchen.num_availabilities(req_date, timeslot.id) >= req_party_size
            availabilities.push(timeslot)
          end
        end
        profile_photo = kitchen.photos.where(profile_photo: true).pluck(:image_url)
        @available_kitchens.push([kitchen, availabilities, profile_photo]) unless availabilities.empty?
      end

      render :index
    end
  end
  ```

- Users can filter through these options by price, cuisine, and average rating.\
  _This is accomplished through changing the state in the frontend without having to re-query the database. Frontend code is as below:_
  ```
  class Search extends React.Component {
    constructor(props) {
      super(props);
    }

    applyRatingFilter(kitchens) {
      const ratings = this.props.filters.averageRating;
      if (ratings.length < 1) {
        return kitchens;
      }
      const minRating = Math.min(...ratings);
      return kitchens.filter(kitchen => kitchen.averageRating >= minRating);
    }

    applyEqualityFilters(kitchens) {
      let removedIdx = [];
      const filterCatergories = Object.keys(this.props.filters).filter(cat => 
        cat !== "averageRating"
      );

      for (let i = 0; i < kitchens.length; i++) {
        let currKitchen = kitchens[i];

        for (let j = 0; j < filterCatergories.length; j++) {
          let currCategory = filterCatergories[j];
          let currVals = this.props.filters[currCategory];
          if ( currVals.length === 0 ) {
            continue;
          }

          if ( !currVals.includes( currKitchen[currCategory]) ) {
            removedIdx.push(i);
            break;
          }
        };
      };
      
      if (removedIdx.length > 0) {
        const filteredKitchens = kitchens.filter((kitchen, idx) => !removedIdx.includes(idx));
        return filteredKitchens;
      } else {
        return kitchens;
      }
    }

    applyFilters(kitchens) {
      return this.applyEqualityFilters( this.applyRatingFilter(kitchens) );
    }
  }
  ```
- User can make reservations and keep track of them on the
### Review and Rating
- Users can rate and leave reviews for kitchens on the site.

### Favorite/ Save
- Users can save kitchens that they are interested in for booking in the future.

<!-- Link  -->

<!-- Technologies used -->



<!-- Code snippets -->



