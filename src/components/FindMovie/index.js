import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: #ffffff;
    margin-bottom: 30px;
`;

const SearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;    
`;

const SearchInput = styled.input`
    width: 73%;
    background-color: #1d1c1c;
    padding: 16px 10px;
    opacity: 0.9;
    font-size: 18px;
`;

const SearchBtn = styled.button`
    width: 25%;
    padding: 15px 0;
    font-size: 18px;
    background-color: #e50914;
    color: #ffffff;
`;

let StyledBlock = () => (
  <div className='find-movie-wrapper'>
    <Title>FIND YOUR MOVIE</Title>
    <SearchForm>
      <SearchInput placeholder='What do you want to watch?'/>
      <SearchBtn>SEARCH</SearchBtn>
    </SearchForm>
  </div>
);

export default StyledBlock;