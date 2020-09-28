import { combineReducers } from 'redux';
import { fetchMovieReducer } from './fetchMovieReducer';
import { activeMovieReducer } from './activeMovieReducer';

export const rootReducer = combineReducers({
  moviesData: fetchMovieReducer,
  activeMovie: activeMovieReducer
});

export default rootReducer;