import PropTypes from 'prop-types';
import s from './Form.module.css';

const Form = ({ handleSubmit, searchName, handleNameChange }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies"
        value={searchName}
        onChange={handleNameChange}
      />
      <button type="submit" className={s.button} aria-label="search" />
    </form>
  );
};
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
};
export default Form;
