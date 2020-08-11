import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/img/logo.svg';

const Footer = styled.footer`
    background-color: #424242;
    padding: 25px;
`;

let StyledBlock = () => (
  <Footer>
    <Logo />
  </Footer>
);

export default StyledBlock;