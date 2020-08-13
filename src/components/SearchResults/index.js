import React from 'react';
import { SearchResults, MoviesAmount } from '../styled.js';

const StyledBlock = () => (
  <SearchResults className='container'>
    <MoviesAmount>39 </MoviesAmount>
    movies found
  </SearchResults>
);

export default StyledBlock;