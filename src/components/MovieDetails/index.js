import React from 'react';
import {
  MovieDetailsBackground,
  MovieDetailsWrapper,
  MovieDetailsContent,
  MovieDetailsTitle,
  MovieDetailsTitleWrap,
  MovieDetailsRaiting,
  MovieDurationAndYear,
  MovieDetailsBlock
} from '../styled.js';
import Logo from '../../assets/img/logo.svg';
import SearchIcon from '../SearchIcon';
import useMovieData from '../../hooks/movieDetailsHelper';

const MovieDetails = () => {
  const [movieData] = useMovieData();
  console.log('movieData', movieData);
  return (
    <>
      <MovieDetailsBackground />
      <MovieDetailsBlock>
        <div className='container'>
          <Logo />
          <SearchIcon />
          <MovieDetailsWrapper>
            <div>
              <img src='img/pulp-fiction.jpg' />
            </div>
            <MovieDetailsContent>
              <MovieDetailsTitleWrap>
                <MovieDetailsTitle>Pulp Fiction</MovieDetailsTitle>
                <MovieDetailsRaiting>4.3</MovieDetailsRaiting>
              </MovieDetailsTitleWrap>
              <p>Oscar winning Movie</p>
              <MovieDurationAndYear>
                <span>1994</span>
                <span>134 min</span>
              </MovieDurationAndYear>
              <p>Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by
              Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson,
              Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal
              Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during
             the mid-20th century, known for their graphic violence and punchy dialogue.</p>
            </MovieDetailsContent>
          </MovieDetailsWrapper>
        </div>
      </MovieDetailsBlock>
    </>
  );
};
export default MovieDetails;

