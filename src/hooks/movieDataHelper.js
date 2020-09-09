import { useContext } from 'react';
import { MovieContext } from './MovieContext';

function useMovieData() {
  const [movieData, setMovieData] = useContext(MovieContext);
  return [movieData,setMovieData];
}

export default useMovieData;