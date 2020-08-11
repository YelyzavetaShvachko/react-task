import React from 'react';
import styled from 'styled-components';

const SearchResults = styled.h3`
    color: #ffffff;
    padding: 22px 0;
    font-size: 16px;
`;

const MoviesAmount = styled.span`
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    font-weight: 600;
`;


let StyledBlock = () => (
  <SearchResults className='container'>
    <MoviesAmount>39 </MoviesAmount>
    movies found
  </SearchResults>
);

export default StyledBlock;