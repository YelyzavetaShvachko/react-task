import React from 'react';
import { SearchResults, MoviesAmount } from '../styled.js';

const TotalMoviesAmount = () => (
  <SearchResults className='container'>
    <MoviesAmount>39 </MoviesAmount>
    movies found
  </SearchResults>
);

export default TotalMoviesAmount;