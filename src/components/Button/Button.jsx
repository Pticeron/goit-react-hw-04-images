import propTypes from 'prop-types';
import css from './Buttun.module.css';

export const Button = ({ clickLoad }) => {
  return (
    <button onClick={clickLoad} className={css.Button} type="button">
      Load more
    </button>
  );
};


Button.propTypes = {
  clickLoad: propTypes.func,
};
