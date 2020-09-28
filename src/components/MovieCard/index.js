import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MovieCard, Image, Year, DescriptionWrapper, Genre } from '../styled.js';
import MovieIcon from '../MovieIcon';
import PropTypes from 'prop-types';
import { HeaderContext } from '../../hooks/HeaderContext';
import { setActiveMovie } from '../../store/actions/actionCreators';

function MovieCardWrapper(props) {
  const [hovered, setHovered] = useState(false);
  // const setMovieData = () => {};
  const { setDetailsVisibility } = useContext(HeaderContext);

  useEffect(() => {
    console.log('render movie card');
  });

  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setActiveMovie(props.id));
    // setMovieData({
    //   title: props.title,
    //   genre: props.genre,
    //   year: props.year,
    //   duration: props.duration,
    //   photo: props.photo,
    //   id: props.id,
    //   raiting: props.raiting,
    //   description: props.description
    // });
  }, [props]);

  const handleDetailsVisibility = useCallback(() => {
    setDetailsVisibility(true);
  }, []);

  const handleHover = useCallback(() => {
    setHovered(true);
  }, [hovered]);

  const handleUnHover = useCallback(() => {
    setHovered(false);
  }, [hovered]);

  return (
    <MovieCard
      className={hovered ? 'movie-card-hovered' : ''}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
      onClick={() => {
        handleClick();
        handleDetailsVisibility();
      }}
    >
      <Image src={props.photo} />
      <MovieIcon />
      <DescriptionWrapper>
        <h3>{props.title}</h3>
        <Genre>{props.genresList}</Genre>
        <Year>{props.year && props.year.split('-')[0]}</Year>
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

// don't rerender component if props not changed ?
export default React.memo(MovieCardWrapper);