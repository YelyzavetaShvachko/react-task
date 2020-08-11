import React from 'react';
import styled from 'styled-components';

const AddMovie = styled.button`
    position: absolute;
    right: 0;
    width: 182px;
    padding: 10px 0;
    color: #e50914;
    background-color: rgba(76, 74, 74, 0.7);
    font-size: 18px;
`;

let StyledBlock = () => (
  <AddMovie>+ ADD MOVIE</AddMovie>
);

export default StyledBlock;