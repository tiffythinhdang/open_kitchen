import { fetchKitchens } from './kitchen_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

// action
export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

// thunk action
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchKitchens(getState().ui.filters)(dispatch);
};