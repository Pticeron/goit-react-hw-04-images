import propTypes from 'prop-types';
import css from './Buttun.module.css';

export const Button = ({ label, handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={css.Button} type="button">
      {label}
    </button>
  );
};


Button.propTypes = {
  handleLoadMore: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
};
