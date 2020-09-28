import { combineReducers } from 'redux';
import { fetchMovieReducer } from './fetchMovieReducer';
import first from './testReducer';

export const rootReducer = combineReducers({
  fetchMovieReducer,
  first
});



export default rootReducer;