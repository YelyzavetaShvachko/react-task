import React from 'react';
import { MovieCard, Image, Year, DescriptionWrapper, Genre } from '../styled.js';
import PropTypes from 'prop-types';

const StyledBlock = ({ title, year, genre, photo }) => (
  <MovieCard>
    <Image src={photo} />
    <DescriptionWrapper>
      <h3>{title}</h3>
      <Genre>{genre}</Genre>
      <Year>{year}</Year>
    </DescriptionWrapper>
  </MovieCard>
);

StyledBlock.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired, 
  genre: PropTypes.string.isRequired, 
  photo: PropTypes.string.isRequired, 
};

export default StyledBlock;