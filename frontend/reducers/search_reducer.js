import { RECEIVE_SEARCH } from '../actions/search_actions';

let today = new Date().toISOString().substr(0, 10);

const defaultSearch = Object.freeze({
  date: today,
  time: "12",
  party_size: "2",
  location_id: 1
});

const searchReducer = (state = defaultSearch, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH:
      return action.search;

    default:
      return state;
  }
};

export default searchReducer;