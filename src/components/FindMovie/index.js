import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchingMovie } from '../../store/actions/actionCreators';
import { Title, SearchForm, SearchInput, SearchBtn } from '../styled.js';

const SearchMovieSection = () => {
  let movie;
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setSearchingMovie(movie.toLowerCase()));
  }, [dispatch]);
  return (
    <div className='find-movie-wrapper'>
      <Title>FIND YOUR MOVIE</Title>
      <SearchForm>
        <SearchInput
          placeholder='What do you want to watch?'
          onChange={e => movie = e.target.value}/>
        <SearchBtn onClick={handleClick}>SEARCH</SearchBtn>
      </SearchForm>
    </div>
  );
};

export default SearchMovieSection;