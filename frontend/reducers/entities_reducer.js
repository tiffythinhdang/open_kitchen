import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import kitchensReducer from './kitchens_reducer';
import citiesReducer from './cities_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  kitchens: kitchensReducer,
  cities: citiesReducer
});

export default entitiesReducer;