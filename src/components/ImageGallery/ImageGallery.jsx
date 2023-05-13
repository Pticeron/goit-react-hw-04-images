import propTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from  '../ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({ images, togleModal }) => {
  return (
    <>
      <ul className={css.gallery}>
        <ImageGalleryItem togleModal={togleModal} images={images} />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ),
  togleModal: propTypes.func.isRequired,
};