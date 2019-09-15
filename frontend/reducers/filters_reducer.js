import { UPDATE_FILTER } from '../actions/filters_actions';

let today = new Date().toISOString().substr(0, 10);

const defaultFilters = Object.freeze({
  averageRating: [],
  cost: [],
  cuisine: []
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case UPDATE_FILTER:
      const newFilter = {
        [action.filter]: action.value
      };
      return Object.assign({}, state, newFilter);
  
    default:
      return state;
  }
};

export default filtersReducer;