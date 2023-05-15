import propTypes from 'prop-types';
import css from './Buttun.module.css';

export const Button = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={css.Button} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
