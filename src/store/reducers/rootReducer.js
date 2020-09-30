import { combineReducers } from 'redux';
import { fetchMovieReducer } from './fetchMovieReducer';
import { activeMovieReducer } from './activeMovieReducer';
import { activeGenreReducer } from './activeGenreReducer';


export const rootReducer = combineReducers({
  moviesData: fetchMovieReducer,
  activeMovie: activeMovieReducer,
  activeGenre: activeGenreReducer
});

export default rootReducer;