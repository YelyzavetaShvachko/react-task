import { combineReducers } from 'redux';
import { fetchMovieReducer } from './fetchMovieReducer';
import { activeMovieReducer } from './activeMovieReducer';
import { activeGenreReducer } from './activeGenreReducer';
import { sortingValueReducer } from './sortingValueReducer';

export const rootReducer = combineReducers({
  moviesData: fetchMovieReducer,
  activeMovie: activeMovieReducer,
  activeGenre: activeGenreReducer,
  sortingValue: sortingValueReducer
});

export default rootReducer;