
import { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from '../actions/actionTypes';

const initialState = {
  app: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_MOVIE:
    return {
      ...state,
      app: [],
    };

  default:
    return state;
  }
};

export default rootReducer;