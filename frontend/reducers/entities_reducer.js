import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import kitchensReducer from './kitchens_reducer';
import citiesReducer from './cities_reducer';
import cuisinesReducer from './cuisines_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  kitchens: kitchensReducer,
  cities: citiesReducer,
  cuisines: cuisinesReducer
});

export default entitiesReducer;