import { useState, useEffect } from 'react';
import css from './App.module.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchPicturesQuery } from '../services/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [search, setSearch] = useState('');
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchPictures = async () => {
      try {
        setLoading(true);
        const data = await fetchPicturesQuery(search, page);
        data.hits.length === 0
          ? toast.error('Nothing found')
          : setPictures(prevPictures => [...prevPictures, ...data.hits]);
        setTotalHits(data.totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPictures();
  }, [search, page]);

  const searchPictures = newSearch => {
    setSearch(newSearch);
    setPictures([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
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
      {pictures.length !== 0 && (
        <ImageGallery pictures={pictures} openModal={openModal} />
      )}
      {showModal && <Modal toggleModal={toggleModal} largeImage={largeImage} />}

      {loading && <Loader />}
      {error && <p>Something goes wrong</p>}
      {totalHits > pictures.length && !loading && <Button onClick={loadMore} />}
      <ToastContainer autoClose={1500} />
    </div>
  );
};

