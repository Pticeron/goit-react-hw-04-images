import { BiSearch } from 'react-icons/bi';
import propTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ButtonClear } from './'

export const Searchbar = ({ onSubmit, onChange, onClickClear, inputValue }) => (
  <header className={css.searchbar}>
    <form className={css.Form} onSubmit={onSubmit}>
    <button type="submit" className={css.Button}>
            <BiSearch size="20" />
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


Searchbar.propTypes = { onSubmit: propTypes.func };
