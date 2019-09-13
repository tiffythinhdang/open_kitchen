import { UPDATE_FILTER } from '../actions/filters_actions';
// import { fetchAllCities } from '../actions/cities_action';

let today = new Date().toISOString().substr(0, 10);

const defaultFilters = Object.freeze({
  time: "12",
  date: today,
  party_size: "2",
  cost: {
    "2": true,
    "3": true,
    "4": true
  },
  city: "San Francisco",
  country: ["United States"],
  cuisine: ["American"]
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