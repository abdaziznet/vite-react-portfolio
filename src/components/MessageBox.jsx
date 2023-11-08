import React from 'react';
import Modal from 'react-modal';
import "./modal.css";

// Make sure to set appElement for accessibility reasons
Modal.setAppElement('#root');

const MessageBox = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      contentLabel="Message Box"
      className="modal"
    >
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={props.onClose}>Close</button>
    </Modal>
  );
};

export default MessageBox;
