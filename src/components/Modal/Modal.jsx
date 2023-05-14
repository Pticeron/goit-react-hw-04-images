import { useEffect } from 'react';
import css from './Modal.module.css';
import propTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');


export const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown); 



return () => {
      window.removeEventListener('keydown', handleKeyDown); 
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img className={css.modal__image} src={largeImageURL} alt="" />
      </div>
    </div>, modalRoot
  );
};

Modal.propTypes = {
  onClose: propTypes.func,
  largeImageURL: propTypes.string,
};


  