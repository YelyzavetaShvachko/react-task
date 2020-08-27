import React from 'react';
import Modal from '../Modal';
import AddMovieContent from '../AddMovieContent';

class AddMovieModal extends React.Component {
  render() {
    return (
      <>
        <Modal onClose={this.props.action.bind(this, false)}>
          <AddMovieContent />
        </Modal>
      </>
    );
  }
}

export default AddMovieModal;