import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  SUCCESS_FETCH_MOVIE,
  REQUEST_FETCH_MOVIE,
  FAIL_FETCH_MOVIE,
  SET_ACTIVE_MOVIE,
  SET_ACTIVE_GENRE,
  SET_SORTING_VALUE,
  SET_FILTERED_MOVIES
} from './actionTypes';

const addMovie = (movie) => ({ type: ADD_MOVIE, payload: movie });
const editMovie = (movie) => ({ type: EDIT_MOVIE, payload: movie });
const deleteMovie = (movie) => ({ type: DELETE_MOVIE, payload: movie });
const requestMovies = (payload) => ({type: REQUEST_FETCH_MOVIE, payload}); 
const successMovies = (payload) => ({type: SUCCESS_FETCH_MOVIE, payload}); 
const failMovies = () => ({type: FAIL_FETCH_MOVIE}); 
const setActiveMovie = (payload) => ({type: SET_ACTIVE_MOVIE, payload});
const setActiveGenre = (payload) => ({type: SET_ACTIVE_GENRE, payload});
const setSortingValue = (payload) => ({type: SET_SORTING_VALUE, payload});
const setFilteredMovies = (payload) => ({type: SET_FILTERED_MOVIES, payload});

export {
  addMovie,
  editMovie,
  deleteMovie,
  requestMovies,
  successMovies,
  failMovies,
  setActiveMovie,
  setActiveGenre,
  setSortingValue,
  setFilteredMovies
};
