import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Category = styled.div`
    padding: 10px;
    color: #ffffff;
    font-size: 16px;
`;

let StyledBlock = ({ title, styleName }) => (
  <Category className={styleName}>
    <h3>{title}</h3>
  </Category>
);

StyledBlock.propTypes = {
  title: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired, 
};

export default StyledBlock;