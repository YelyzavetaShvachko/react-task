import React from 'react';
import { SortingWrapper, SortingTitle, SortingValue } from '../styled.js';

const Sorting = () => (
  <SortingWrapper>
    <SortingTitle>SORT BY</SortingTitle>
    <SortingValue>
      <option value="">
        RELEASE DATE
      </option>
      <option value="1">else</option>
      <option value="2">else</option>
    </SortingValue>
  </SortingWrapper>
);

export default Sorting;