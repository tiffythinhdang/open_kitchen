import sessionReducer from  './session_reducer';
import errorsReducer from  './errors_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
})

export default RootReducer;