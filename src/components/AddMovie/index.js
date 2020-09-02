import React from 'react';
import { AddMovie } from '../styled.js';

const StyledBlock = ({showModal}) => (
  <AddMovie onClick={showModal}>+ ADD MOVIE</AddMovie>
);

export default StyledBlock;