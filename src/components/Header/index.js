import React from 'react';
import styled from 'styled-components';
import img from '../../assets/img/background.jpg';
import Logo from '../../assets/img/logo.svg';
import AddMovie from '../AddMovie';
import FindMovie from '../FindMovie';

const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 450px;
    background-image: url(${img});
    z-index: -1;
    background-size: cover;
    &:before {
    content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6787902661064426) 0%, rgba(0,0,0,0.7) 100%);
        opacity: .9; 
  }
`;

let StyledBlock = () => (
  <>
    <Background />
    <header className='header container'>
      <Logo />
      <AddMovie />
      <FindMovie />
    </header>
  </>
);

export default StyledBlock;