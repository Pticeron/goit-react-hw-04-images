import { useEffect } from 'react';
import css from './Modal.module.css';
import propTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, largeImage, tags }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img className={css.modal__image} src={largeImage.src} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: propTypes.func.isRequired,
  largeImage: propTypes.shape({
    src: propTypes.string.isRequired,
  }),
};