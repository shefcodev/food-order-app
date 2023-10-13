import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const port = document.getElementById('overlays');

const Modal = ({ children, onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, port)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, port)}
    </Fragment>
  );
};

export default Modal;
