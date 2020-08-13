import React from 'react';
import { Category } from '../styled.js';
import PropTypes from 'prop-types';

const StyledBlock = ({ title, styleName }) => (
  <Category className={styleName}>
    <h3>{title}</h3>
  </Category>
);

StyledBlock.propTypes = {
  title: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired, 
};

export default StyledBlock;