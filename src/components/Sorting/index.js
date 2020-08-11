import React from 'react';
import styled from 'styled-components';

const SortingWrapper = styled.div`
    padding: 10px;
    color: #ffffff;
    font-size: 16px;
    display: flex;
    align-items: center;
    &:after {
        content: '\A';
        color: red;
        right: 0;
        position: absolute;
        content: '';
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 4px 6px 4px 0;
        border-color: transparent red transparent transparent;  
        display: inline-block;
        vertical-align: middle;
        transform: rotate(270deg);
}
`;

const SortingTitle = styled.span`
    color: #505050; 
    margin-right: 20px;
`;

const SortingValue = styled.select`
    background: #232323;
    border: none;
    color: #ffffff;
    appearance: none;
    padding-right: 8px;
`;

let StyledBlock = () => (
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

export default StyledBlock;