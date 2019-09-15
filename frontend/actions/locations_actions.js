import * as LocationsAPIUtil from '../util/locations_api_util';

export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS";

//actions
const receiveAllLocations = (locations) => ({
  type: RECEIVE_LOCATIONS,
  locations
});

//thunk actions
export const fetchAllLocations = () => dispatch => (
  LocationsAPIUtil.fetchAllLocations()
    .then(locations => dispatch(receiveAllLocations(locations)))
  //Errors handling need to be done here! 
);
