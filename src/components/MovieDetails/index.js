import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { movieId, moviesList } from '../../store/selectors';
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
  const activeMovieId = useSelector(movieId);
  const movieData = useSelector(moviesList).find(movie => movie.id === activeMovieId) || {};

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
                <MovieDetailsRaiting>{movieData.vote_average}</MovieDetailsRaiting>
              </MovieDetailsTitleWrap>
              <p>{movieData.tagline}</p>
              <MovieDurationAndYear>
                <span>{movieData.release_date && movieData.release_date.split('-')[0]}</span>
                <span>{movieData.runtime} min</span>
              </MovieDurationAndYear>
              <p>{movieData.overview}</p>
            </MovieDetailsContent>
          </MovieDetailsWrapper>
        </div>
      </MovieDetailsBlock>
    </div>
  );
};
export default MovieDetails;

