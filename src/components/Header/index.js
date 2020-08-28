import React from 'react';
import { Background } from '../styled.js';
import Logo from '../../assets/img/logo.svg';
import AddMovie from '../AddMovie';
import FindMovie from '../FindMovie';
import Modal from '../Modal';
import AddMovieContent from '../AddMovieContent';

class StyledBlock extends React.Component {
  state = {
    show: false // set true to see Add Movie modal
  };
  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <>
        <Background />
        <header className='header container'>
          <Logo />
          <AddMovie
            showModal={this.showModal}
          />
          <Modal onClose={this.showModal} show={this.state.show}>
            <AddMovieContent />
          </Modal>
          <FindMovie />
        </header>
      </>
    );
  }
}

export default StyledBlock;
