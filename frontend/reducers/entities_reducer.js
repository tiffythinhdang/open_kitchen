import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import kitchensReducer from './kitchens_reducer';
import reservationsReducer from './reservations_reducer';
import cuisinesReducer from './cuisines_reducer';
import locationsReducer from './locations_reducer';
import timeslotsReducer from './timeslots_reducer';
import reviewsReducer from './reviews_reducer';
import favoritesReducer from './favorites_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  kitchens: kitchensReducer,
  reservations: reservationsReducer,
  locations: locationsReducer,
  cuisines: cuisinesReducer,
  timeslots: timeslotsReducer,
  reviews: reviewsReducer,
  favorites: favoritesReducer
});

export default entitiesReducer;