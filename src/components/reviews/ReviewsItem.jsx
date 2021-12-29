import PropTypes from 'prop-types';
import s from './Reviews.module.css';

const ReviewsItem = ({ data }) => {
  return (
    <>
      <li className={s.item}>
        <h3 className={s.title}>{data.author}</h3>
        <p className={s.text}>{data.content}</p>
      </li>
    </>
  );
};
ReviewsItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default ReviewsItem;
