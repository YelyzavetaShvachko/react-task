import React from 'react';
import { Background } from '../styled.js';
import Logo from '../../assets/img/logo.svg';
import AddMovie from '../AddMovie';
import FindMovie from '../FindMovie';

const StyledBlock = () => (
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