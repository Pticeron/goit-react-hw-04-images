import propTypes from 'prop-types';
import css from './ButtonClear.module.css';

export const ButtonClear = ({ onClickClear }) => (
  <button
    type="button"
    className={css.ButtonClear}
    onClick={onClickClear}
  ></button>
);

ButtonClear.propTypes = {
  onClickClear: propTypes.func.isRequired,
};
