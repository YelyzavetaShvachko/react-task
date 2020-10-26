import React, { useState, useContext, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieCard, Image, Year, DescriptionWrapper, Genre } from '../styled.js';
import MovieIcon from '../MovieIcon';
import { HeaderContext } from '../../hooks/HeaderContext';
import { setActiveMovie } from '../../store/actions/actionCreators';

function MovieCardWrapper(props) {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setActiveMovie(props.id));
  }, [props]);

  const handleHover = useCallback(() => {
    setHovered(true);
  }, [hovered]);

  const handleUnHover = useCallback(() => {
    setHovered(false);
  }, [hovered]);

  return (
    <MovieCard
      // to={`/film/${props.id}`}
      className={hovered ? 'movie-card-hovered' : ''}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
      onClick={() => {
        handleClick();
      }}
    >
      <Link to={`/film/${props.id}`}>
        <Image src={props.photo} />
        <MovieIcon />
        <DescriptionWrapper>
          <h3>{props.title}</h3>
          <Genre>{props.genresList}</Genre>
          <Year>{props.year && props.year.split('-')[0]}</Year>
        </DescriptionWrapper>
      </Link>
    </MovieCard>
    // {/* <MovieIcon /> */} outside Card, better to movie list
  );
}

MovieCardWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

// don't rerender component if props not changed ?
export default React.memo(MovieCardWrapper);