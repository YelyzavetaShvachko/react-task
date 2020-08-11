import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieCard = styled.div`
    background-color: #232323;
    width: 30%;
    margin-bottom: 50px;
    color: #a2a2a2;
`;

const Image = styled.img`
    width: 100%;
    height: 320px;
    margin-bottom: 10px;
    @media (min-width: 768px) {
        height: 380px;
  }
    @media (min-width: 1200px) {
        height: 520px;
  }
`;

const Year = styled.span`
    border: 1px solid #555555;
    padding: 0 10px;
    border-radius: 5px;
    position: absolute;
    top: 35px;
    right: 0;
`;

const DescriptionWrapper = styled.span`
    position: relative;
    font-size: 16px;
`;

const Genre = styled.p`
    font-size: 14px;
`;

let StyledBlock = ({ title, year, genre, photo }) => (
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