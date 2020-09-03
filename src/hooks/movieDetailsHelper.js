import { useState } from 'react';

function useMovieData() {
  const  [movieData, setMovieData] = useState({
    title: 'Movie title',
    genre: 'Movie genre',
    year: 'release year',
    duration: 'film duration',
    photo: 'movie picture',
    id: 'movie id',
    raiting: 'film raiting',
    description: 'movie description'
  }); 
  return [movieData,setMovieData];
}

export default useMovieData;