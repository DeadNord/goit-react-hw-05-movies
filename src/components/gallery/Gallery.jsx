import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import img from '../../img/no-image.png';
import s from './Gallery.module.css';

const Gallery = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={s.list}>
        {movies.map(movie => (
          <li className={s.item} key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
              className={s.link}
            >
              {movie.poster_path ? (
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                  width="274"
                  height="398"
                />
              ) : (
                <img
                  className={s.img}
                  src={img}
                  alt={movie.title}
                  loading="lazy"
                  width="274"
                  height="398"
                />
              )}

              <div className={s.card}>
                <h3 className={s.title}>{movie.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
Gallery.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Gallery;
