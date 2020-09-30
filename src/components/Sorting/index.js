import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredMoviesList, moviesList } from '../../store/selectors';
import { setSortingValue, setFilteredMovies } from '../../store/actions/actionCreators';
import { SortingWrapper, SortingTitle, SortingValue } from '../styled.js';

const Sorting = () => {
  const dispatch = useDispatch();
  const FilteredMovies = useSelector(filteredMoviesList);
  const movies = useSelector(moviesList);
  const moviesByRaiting = movies.sort((a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average));
  const moviesByDate = movies.sort((a, b) => parseFloat(b.release_date) - parseFloat(a.release_date));

  console.log('FilteredMovies', FilteredMovies);
  
  const handleChange = useCallback((event) => {
    dispatch(setSortingValue(event.target.value));

    if (event.target.value === 'RELEASE DATE') {
      dispatch(setFilteredMovies(moviesByDate));
    }
    
    if (event.target.value === 'RATING') {
      dispatch(setFilteredMovies(moviesByRaiting));
    }
  }, []);

  return (
    <SortingWrapper>
      <SortingTitle>SORT BY</SortingTitle>
      <SortingValue onChange={handleChange}>
        <option value="RELEASE DATE">RELEASE DATE</option>
        <option value="RATING">RATING</option>
      </SortingValue>
    </SortingWrapper>
  );
};

export default Sorting;