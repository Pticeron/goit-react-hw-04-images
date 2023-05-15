import { useState } from 'react';
import propTypes from 'prop-types';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';

export const Searchbar =  ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      toast.error('Enter your search query');
      return;
    }

    onSubmit(search);
    setSearch('');
  };

return(
  <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          onChange={handleChange}
          name="search"
          value={search}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
);
};

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
