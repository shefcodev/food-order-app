import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const port = document.getElementById('overlays');

const Modal = ({ children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, port)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, port)}
    </Fragment>
  );
};

export default Modal;
