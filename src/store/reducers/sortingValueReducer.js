import { SET_SORTING_VALUE } from '../actions/actionTypes';

const initialState = {
  sortingBy: 'release_date'
};

export const sortingValueReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_SORTING_VALUE:
    return {
      ...state,
      sortingBy: action.payload,
    };

  default:
    return state;
  }
};
