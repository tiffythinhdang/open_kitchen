import * as KitchenAPIUtil from '../util/kitchens_api_util';

export const RECEIVE_KITCHENS = "RECEIVE_KITCHENS";
export const RECEIVE_A_KITCHEN = "RECEIVE_A_KITCHEN";

//actions
const receiveKitchens = (kitchens) => ({
  type: RECEIVE_KITCHENS,
  kitchens
});

const receiveAKitchen = (kitchen) => ({
  type: RECEIVE_A_KITCHEN,
  kitchen
});

//thunk actions
export const fetchKitchens = () => dispatch => (
  KitchenAPIUtil.fetchKitchens()
    .then(kitchens => dispatch(receiveKitchens(kitchens)))
  //Errors handling need to be done here! 
);

export const fetchAKitchen = (kitchenId) => dispatch => (
  KitchenAPIUtil.fetchAKitchen(kitchenId)
    .then(kitchen => dispatch(receiveAKitchen(kitchen)))
  //Errors handling need to be done here! 
);




