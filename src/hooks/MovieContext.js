import React, { createContext, useState } from 'react';

export const MovieContext = createContext({
  title: 'Movie title',
  genre: 'Movie genre',
  year: 'release year',
  duration: 'film duration',
  photo: 'movie picture',
  id: 'movie id',
  raiting: 'film raiting',
  description: 'movie description'
});

export const MovieContextProvider = props => {
  const [movieData, setMovieData] = useState(props.movieData);
  const movieContext = [movieData, setMovieData];
  return (<MovieContext.Provider value={movieContext}>{props.children}</MovieContext.Provider>);
};

export const { Consumer: MovieContextConsumer } = MovieContext;