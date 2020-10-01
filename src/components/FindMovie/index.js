import React, {useState} from 'react';
import { Title, SearchForm, SearchInput, SearchBtn } from '../styled.js';

const SearchMovieSection = () => {
  const [searchKey, setSearchKey] = useState('');
  return (
    <div className='find-movie-wrapper'>
      <Title>FIND YOUR MOVIE</Title>
      <SearchForm>
        <SearchInput
          placeholder='What do you want to watch?'
          onChange={e => setSearchKey(e.target.value)}/>
        <SearchBtn onClick={() => console.log('searchKey',searchKey)}>SEARCH</SearchBtn>
      </SearchForm>
    </div>
  );
};

export default SearchMovieSection;