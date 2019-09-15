import * as CuisinesAPIUtil from '../util/cuisines_api_util';

export const RECEIVE_CUISINES = "RECEIVE_CUISINES";

//actions
const receiveAllCuisines = (cuisines) => ({
  type: RECEIVE_CUISINES,
  cuisines
});

//thunk actions
export const fetchAllCuisines = () => dispatch => (
  CuisinesAPIUtil.fetchAllCuisines()
    .then(cuisines => dispatch(receiveAllCuisines(cuisines)))
  //Errors handling need to be done here! 
);





