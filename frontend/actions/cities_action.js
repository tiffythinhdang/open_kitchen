import * as CitiesAPIUtil from '../util/cities_api_util';

export const RECEIVE_CITIES = "RECEIVE_CITIES";

//actions
const receiveAllCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities
});

//thunk actions
export const fetchAllCities = () => dispatch => (
  CitiesAPIUtil.fetchAllCities()
    .then(cities => dispatch(receiveAllCities(cities)))
  //Errors handling need to be done here! 
);





