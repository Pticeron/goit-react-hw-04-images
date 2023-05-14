import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  onImageClick,
  tags,
}) => (
  <li className={css.galleryItem}>
    <img
      className={css.ImageGalleryItem}
      src={webformatURL}
      alt={tags}
      onClick={() => onImageClick(largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string,
  largeImageURL: propTypes.string,
  onImageClick: propTypes.func,
};
