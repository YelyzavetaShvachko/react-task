import React, { useState } from 'react';
import { MovieCard, Image, Year, DescriptionWrapper, Genre } from '../styled.js';
import MovieIcon from '../MovieIcon';
import PropTypes from 'prop-types';
import useMovieData from '../../hooks/movieDetailsHelper';

export default function MovieCardWrapper(props) {
  const [hovered, setHovered] = useState(false);
  const [,setMovieData] = useMovieData();
  return (
    <MovieCard
      className={hovered ? 'movie-card-hovered' : ''}
      onMouseEnter={() => {setHovered(true);}}
      onMouseLeave={() => {setHovered(false);}}
      onClick={() => {
        setMovieData({
          title: props.title,
          genre: props.genre,
          year: props.year,
          duration: '',
          photo: props.photo,
          id: '',
          raiting: '',
          description: ''
        });
      }}
    >
      <Image src={props.photo} />
      <MovieIcon />
      <DescriptionWrapper>
        <h3>{props.title}</h3>
        <Genre>{props.genre}</Genre>
        <Year>{props.year}</Year>
      </DescriptionWrapper>
    </MovieCard>
  );
}

MovieCardWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
