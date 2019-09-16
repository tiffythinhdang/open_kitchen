import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import kitchensReducer from './kitchens_reducer';
import reservationsReducer from './reservations_reducer';
import cuisinesReducer from './cuisines_reducer';
import locationsReducer from './locations_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  kitchens: kitchensReducer,
  reseravations: reservationsReducer,
  locations: locationsReducer,
  cuisines: cuisinesReducer
});

export default entitiesReducer;