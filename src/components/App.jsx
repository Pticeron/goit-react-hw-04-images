import { useState, useEffect } from 'react';
import css from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';

import { fetchImages } from '../services/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);

  useEffect(() => {
    if (!search) return;

    const fetchImagesByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(search, page);
        data.hits.length === 0
          ? toast.error('Nothing found')
          : setImages(prevPictures => [...prevPictures, ...data.hits]);
        setTotalHits(data.totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImagesByQuery();
  }, [search, page]);

  const searchPictures = newSearch => {
    setSearch(newSearch);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = data => {
    setShowModal(true);
    setLargeImage(data);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={css.App}>
      
      <Searchbar onSubmit={searchPictures} />
      {images.length !== 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {showModal && <Modal toggleModal={toggleModal} largeImage={largeImage} />}
      {isLoading && <Loader />}
      {error && <p>Something goes wrong</p>}
      {totalHits > images.length && !isLoading && (
        <Button onClick={handleLoadMore} />
      )}
      <ToastContainer autoClose={1500} />
    </div>
  );
};
