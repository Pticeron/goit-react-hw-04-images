import propTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ pictures, openModal }) => (
  <ul className={css.gallery}>
    {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
        openModal={openModal}
      />
    ))}
  </ul>
);

ImageGallery.defaultProps = {
  images: [],
};

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      webformatURL: propTypes.string,
      largeImageURL: propTypes.string,
    })
  ),
  openModal: propTypes.func,
};
