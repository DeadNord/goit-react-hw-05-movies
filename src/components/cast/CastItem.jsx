import PropTypes from 'prop-types';
import s from './Cast.module.css';


const CastItem = ({ data }) => {
  return (
    <>
      <li className={s.item}>
       <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt={data.name}
            width="200px"
            height="250px"
          />
        <h4 className={s.title}>{data.name}</h4>
        <p className={s.text}>{data.character}</p>
      </li>
    </>
  );
};
CastItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default CastItem;
