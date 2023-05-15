import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  openModal,
  tags,
}) => (
  <li className={css.ImageGalleryItem}>
    <img
      className={css.ImageGalleryItem}
      src={webformatURL}
      alt={tags}
      onClick={() => openModal({ src: largeImageURL })}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string,
  largeImageURL: propTypes.string,
  openModal: propTypes.func.isRequired,
};
