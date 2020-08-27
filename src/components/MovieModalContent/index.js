import React from 'react';
import { MovieModal, MovieModalClose, MovieModalBtn } from '../styled.js';
import Modal from '../Modal';
import EditMovieContent from '../EditMovieContent';
import DeleteMovieContent from '../DeleteMovieContent';

class MovieModalContent extends React.Component {
  constructor() {
    super();
    // this.handler = this.handler.bind(this);
    this.state = {
      showEdit: false,
      showDelete: false
    };
  }

  // handler(param) {
  //   this.setState({
  //     show: param
  //   });
  // }

  showModal = () => {
    this.setState({
      showEdit: !this.state.showEdit,
      showDelete: !this.state.showDelete
    });
  };
  render() {
    return (
      <>
        <MovieModal>
          <MovieModalClose onClick={this.props.action.bind(this, false)} />
          {
            this.state.showEdit ? 
              <Modal onClose={this.showModal} show={this.state.showEdit}>
                <EditMovieContent />
              </Modal>
              : null
          }
          <MovieModalBtn onClick={() => { this.setState({ showEdit: !this.state.showEdit }); }}>Edit</MovieModalBtn>
          {
            this.state.showDelete ? 
            <Modal onClose={this.showModal} show={this.state.showDelete}>
                <DeleteMovieContent />
              </Modal>
            : null
          }
          <MovieModalBtn onClick={() => { this.setState({ showDelete: !this.state.showDelete }); }}>Delete</MovieModalBtn>
        </MovieModal>
      </>
    );
  }
}

export default MovieModalContent;