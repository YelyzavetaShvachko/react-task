import React from 'react';
import { Title, SearchForm, SearchInput, SearchBtn } from '../styled.js';

const StyledBlock = () => (
  <div className='find-movie-wrapper'>
    <Title>FIND YOUR MOVIE</Title>
    <SearchForm>
      <SearchInput placeholder='What do you want to watch?'/>
      <SearchBtn>SEARCH</SearchBtn>
    </SearchForm>
  </div>
);

export default StyledBlock;