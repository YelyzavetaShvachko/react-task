import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import {
  MovieDetailsBackground,
  MovieDetailsWrapper,
  MovieDetailsContent,
  MovieDetailsTitle,
  MovieDetailsTitleWrap,
  MovieDetailsRaiting,
  MovieDurationAndYear,
  MovieDetailsBlock,
  MovieDetailsImg
} from '../styled.js';
import Logo from '../../assets/img/logo.svg';
import MovieDetailsSearch from '../MovieDetailsSearch';
import { HeaderContext } from '../../hooks/HeaderContext';

const MovieDetails = () => {
  const { detailsVisibility } = useContext(HeaderContext);
  const activeMovieId = useSelector(state => state.activeMovie.id);
  const movieData = useSelector(
    state => state.moviesData.movies.find(movie => movie.id === activeMovieId) || {}
  );

  return (
    <div className={detailsVisibility ? 'show' : 'hidden'} >
      <MovieDetailsBackground />
      <MovieDetailsBlock>
        <div className='container'>
          <Logo />
          <MovieDetailsSearch />
          <MovieDetailsWrapper>
            <div>
              <MovieDetailsImg src={movieData.poster_path} />
            </div>
            <MovieDetailsContent>
              <MovieDetailsTitleWrap>
                <MovieDetailsTitle>{movieData.title}</MovieDetailsTitle>
                <MovieDetailsRaiting>{movieData.raiting}</MovieDetailsRaiting>
              </MovieDetailsTitleWrap>
              <p>{movieData.genre}</p>
              <MovieDurationAndYear>
                <span>{movieData.year && movieData.year.split('-')[0]}</span>
                <span>{movieData.duration}</span>
              </MovieDurationAndYear>
              <p>{movieData.description}</p>
            </MovieDetailsContent>
          </MovieDetailsWrapper>
        </div>
      </MovieDetailsBlock>
    </div>
  );
};
export default MovieDetails;

