import propTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ButtonClear } from '../ButtonClear/ButtonClear';

export const Searchbar = ({ onSubmit, onChange, onClickClear, inputValue }) => (
  <header className={css.searchBar}>
    <form className={css.searchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.searchFormButton}>
        <span className={css.searchFormButtonLabel}>Search</span>
      </button>
      <input
        className={css.searchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onChange}
        value={inputValue}
      />
      {inputValue && <ButtonClear onClickClear={onClickClear} />}
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  onClickClear: propTypes.func.isRequired,
  query: propTypes.string.isRequired,
};
