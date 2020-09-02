import React from 'react';
import PropTypes from 'prop-types';
import { ModalBackground, ModalWindow, ModalClose } from '../styled';

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <>
        <ModalBackground />
        <ModalWindow>
          <div className="modal-content">{this.props.children}</div>
          <ModalClose onClick={this.onClose}/>
        </ModalWindow>
      </>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};