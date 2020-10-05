import React from 'react';
import notFoundImage from '../../assets/img/404.png';
import Logo from '../../assets/img/logo.svg';
import Footer from '../Footer';
import {
  PnfWrap,
  PnfTitle,
  PnfBtn,
  PnfFooter,
  PnfContent
} from '../styled.js';

const PageNotFound = () => {
  return (
    <PnfWrap className="page-not-found">
      <Logo />
      <PnfContent >
        <PnfTitle >Page not found</PnfTitle>
        <img src={notFoundImage} />
        <PnfBtn>GO BACK HOME</PnfBtn>
      </PnfContent>
      <Footer css={PnfFooter} />
    </PnfWrap>
  );
};

export default PageNotFound;