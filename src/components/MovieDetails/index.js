import React from 'react';
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
import SearchIcon from '../SearchIcon';
import useMovieData from '../../hooks/movieDataHelper';
import useHeaderContent from '../../hooks/headerContentHelper';

const MovieDetails = () => {
  const [movieData] = useMovieData();
  console.log('movieData', movieData);
  const [activeContent] = useHeaderContent();
  console.log('activeContent in details', activeContent);

  return (
    <div className={activeContent ? 'show' : 'hidden'} >
      <MovieDetailsBackground />
      <MovieDetailsBlock>
        <div className='container'>
          <Logo />
          <SearchIcon />
          <MovieDetailsWrapper>
            <div>
              <MovieDetailsImg src={movieData.photo} />
            </div>
            <MovieDetailsContent>
              <MovieDetailsTitleWrap>
                <MovieDetailsTitle>{movieData.title}</MovieDetailsTitle>
                <MovieDetailsRaiting>{movieData.raiting}</MovieDetailsRaiting>
              </MovieDetailsTitleWrap>
              <p>{movieData.genre}</p>
              <MovieDurationAndYear>
                <span>{movieData.year}</span>
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

