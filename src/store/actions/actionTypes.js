const ADD_MOVIE = 'ADD_MOVIE';
const EDIT_MOVIE = 'EDIT_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';
// для уникальности типов экшенов, область видимости экшенов, можно прописать путь так как он уникальный
const SUCCESS_FETCH_MOVIE = '@store/actions/SUCCESS_FETCH_MOVIE';
const REQUEST_FETCH_MOVIE = '@store/actions/REQUEST_FETCH_MOVIE';
const FAIL_FETCH_MOVIE = '@store/actions/FAIL_FETCH_MOVIE';

export {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  SUCCESS_FETCH_MOVIE,
  REQUEST_FETCH_MOVIE,
  FAIL_FETCH_MOVIE
};