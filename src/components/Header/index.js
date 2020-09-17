import React, { useContext } from 'react';
import { Background } from '../styled.js';
import Logo from '../../assets/img/logo.svg';
import AddMovie from '../AddMovie';
import FindMovie from '../FindMovie';
import Modal from '../Modal';
import AddMovieContent from '../AddMovieContent';
import useModalStatus from '../../hooks/modalHelper';
import { HeaderContext } from '../../hooks/HeaderContext';

const Header = () => {
  const [modalContent, setModalContent] = useModalStatus();
  const { detailsVisibility } = useContext(HeaderContext);

  return (
    <div className={detailsVisibility ? 'hidden' : 'show'}>
      <Background />
      <header className='header container'>
        <Logo />
        <AddMovie
          showModal={() => { setModalContent({ key: 'addMovie', movie: 1 }); }}
        />
        <Modal
          onClose={() => { setModalContent(null); }}
          show={(modalContent && modalContent.key === 'addMovie')}>
          <AddMovieContent />
        </Modal>
        <FindMovie />
      </header>
    </div>
  );
};

export default Header;