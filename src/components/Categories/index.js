import React from 'react';
import styled from 'styled-components';
import Category from '../Category';

let categories = [
  {
    title: 'ALL',
    styleName: 'category active',
    id: '1'
  },
  {
    title: 'DOCUMENTARY',
    styleName: 'category',
    id: '2'
  },
  {
    title: 'COMEDY',
    styleName: 'category',
    id: '3'
  },
  {
    title: 'HORROR',
    styleName: 'category',
    id: '4'
  },
  {
    title: 'CRIME',
    styleName: 'category',
    id: '5'
  }
];

const CategoriesWrapper = styled.div`
    display: flex;
`;

let StyledBlock = () => (
  <CategoriesWrapper>
    {categories.map((category) =>
      <Category
        title={category.title}
        styleName={category.styleName}
        key={category.id}
      />
    )}
  </CategoriesWrapper>
);

export default StyledBlock;