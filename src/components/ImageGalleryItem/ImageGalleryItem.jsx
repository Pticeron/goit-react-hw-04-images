import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, togleModal }) => {
  return (
    <>
      {images.map(item => (
        <li
          key={item.id}
          onClick={evt => {
            togleModal(item.largeImageURL, item.tags);
          }}
          className={css.galleryItem}
        >
          <img
            loading="lazy"
            className={css.ImageGalleryItem}
            src={item.webformatURL}
            alt={item.tags}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      webformatURL: propTypes.string.isRequired,
      largeImageURL: propTypes.string.isRequired,
      tags: propTypes.string.isRequired,
    }),
  ),
  togleModal: propTypes.func.isRequired,
};

