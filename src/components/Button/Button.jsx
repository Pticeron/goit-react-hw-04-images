import propTypes from 'prop-types';
import css from './Buttun.module.css';

export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.Button} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
