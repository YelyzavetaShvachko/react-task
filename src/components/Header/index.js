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
            onClick={e => {
              this.showModal(e);
            }}
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

// import AddMovieModal from '../AddMovieModal';

// class Header extends React.Component {
//   constructor() {
//     super();
//     this.handler = this.handler.bind(this);
//     this.state = {
//       show: true
//     };
//   }

//   handler(param) {
//     this.setState({
//       show: param
//     });
//   }

//   render() {
//     return (
//       <>
//         <Background />
//         <header className='header container'>
//           <Logo />
//           {
//             /* this.state.show ? <AddMovieModal action={this.handler}/> : null */
//             this.state.show ? <p>dgdfgdg</p>: null

//           }
//           <AddMovie onClick={() => { this.setState({ show: !this.state.show }); }} />
//           {/* <Modal onClose={this.showModal} show={this.state.show}>
//             <AddMovieContent />
//           </Modal> */}
//           <FindMovie />
//         </header>
//       </>
//     );
//   }
// }

// export default Header;