import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { setSearchingMovie } from '../../store/actions/actionCreators';
import { Title, SearchForm, SearchInput, SearchBtn } from '../styled.js';

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchMovieSection = () => {
  const dispatch = useDispatch();
  let movie;
  let searchedMovie;

  const handleClick = useCallback(() => {
    console.log('searchedMovie click', searchedMovie);
    dispatch(setSearchingMovie(movie.toLowerCase()));
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    e.persist();
    movie = e.target.value;
    searchedMovie = e.target.value.toLowerCase();
    console.log('searchedMovie', searchedMovie);
  };

  return (
    <div className='find-movie-wrapper'>
      <Title>FIND YOUR MOVIE</Title>
      <SearchForm>
        <SearchInput
          placeholder='What do you want to watch?'
          onChange={handleChange} />
        <SearchBtn
          as={Link}
          // to={`/search?name=${searchedMovie}`}
          to={{ pathname: "/search", search: `?name=${searchedMovie}` }}
          onClick={handleClick}
        >
          SEARCH
        </SearchBtn>
      </SearchForm>
    </div>
  );
};

export default SearchMovieSection;