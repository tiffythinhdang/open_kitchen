import sessionErrorsReducer from './session_error_reducer';
import reservationErrorsReducer from './reservation_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';
import favoritesErrorsReducer from './favorite_error_reducer';

import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reservation: reservationErrorsReducer,
  review: reviewErrorsReducer,
  favorites: favoritesErrorsReducer
});

export default errorsReducer;