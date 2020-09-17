import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE
} from './actionTypes';

const addMovie = (movie) => ({ type: ADD_MOVIE, payload: movie });
const editMovie = (movie) => ({ type: EDIT_MOVIE, payload: movie });
const deleteMovie = (movie) => ({ type: DELETE_MOVIE, payload: movie });

export {
  addMovie,
  editMovie,
  deleteMovie,
};
