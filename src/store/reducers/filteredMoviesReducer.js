import { SET_FILTERED_MOVIES } from '../actions/actionTypes';

const initialState = {
  filteredMovies: []
};

export const filteredMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_FILTERED_MOVIES:
    return {
      ...state,
      filteredMovies: action.payload,
    };

  default:
    return state;
  }
};
