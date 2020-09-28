import { useSelector } from 'react-redux';

const moviesList = useSelector(state => state.app.movies);

export default {
  moviesList
};