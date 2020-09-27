import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  SUCCESS_FETCH_MOVIE,
  REQUEST_FETCH_MOVIE,
  FAIL_FETCH_MOVIE
} from './actionTypes';

const addMovie = (movie) => ({ type: ADD_MOVIE, payload: movie });
const editMovie = (movie) => ({ type: EDIT_MOVIE, payload: movie });
const deleteMovie = (movie) => ({ type: DELETE_MOVIE, payload: movie });
const requestMovies = (payload) => ({type: REQUEST_FETCH_MOVIE, payload}); 
const successMovies = (payload) => ({type: SUCCESS_FETCH_MOVIE, payload}); 
const failMovies = () => ({type: FAIL_FETCH_MOVIE}); 

export {
  addMovie,
  editMovie,
  deleteMovie,
  requestMovies,
  successMovies,
  failMovies
};
