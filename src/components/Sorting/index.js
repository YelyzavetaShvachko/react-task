import React from 'react';
import { SortingWrapper, SortingTitle, SortingValue } from '../styled.js';

const Sorting = () => (
  <SortingWrapper>
    <SortingTitle>SORT BY</SortingTitle>
    <SortingValue>
      <option value="1">RELEASE DATE</option>
      <option value="2">RATING</option>
    </SortingValue>
  </SortingWrapper>
);

export default Sorting;