import { combineReducers } from 'redux';

import entitiesReducer from  './entities_reducer';
import searchReducer from  './search_reducer';
import sessionReducer from  './session_reducer';
import errorsReducer from  './errors_reducer';
import uiReducer from  './ui_reducer';

const RootReducer = combineReducers({
  entities: entitiesReducer,
  search: searchReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
})

export default RootReducer;