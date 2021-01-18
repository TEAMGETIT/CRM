import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Modal.scss';

function Modal({ content, title, isOpen, onClose }) {
  return (
    <Popup open={isOpen} onClose={onClose}>
      <div className="modal">
        <div className="modal__header d-flex ai-c jc-sb w-100">
          <div className="title">{title}</div>
          <div className="close" onClick={() => onClose()}>
            &times;
          </div>
        </div>
        <div className="modal__content">{content}</div>
      </div>
    </Popup>
  );
}

export default Modal;
