import { lazy, Suspense, useEffect, useState } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import { renderParamsCard } from '../../AppServise';

import s from './MovieDetailsPage.module.css';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Cast = lazy(() => import('../../components/cast/Cast'));
const Reviews = lazy(() => import('../../components/reviews/Reviews'));
const MovieDetailsPage = () => {
  const [movies, setMovies] = useState(null);
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();
  useEffect(() => {
    renderParamsCard(params.movieId).then(data => setMovies(data));
  }, []);
  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };
  return (
    <>
      <button type="button" className={s.buttonBack} onClick={onGoBack}>
        Back
      </button>

      {movies && (
        <>
          <div className={s.desc}>
            <img
              className={s.img}
              srcSet={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              alt={movies.title}
            />

            <div className={s.content}>
              <h3 className={s.title}>{movies.original_title}</h3>
              <table className={s.table}>
                <caption className={s.caption}>about movie</caption>
                <tbody>
                  <tr>
                    <td className={s.category}>Vote / Votes</td>
                    <td>
                      <span className={s.value}>{movies.vote_average}</span>
                      <span className={s.value}>{movies.vote_count}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={s.category}>Popularity</td>
                    <td>{movies.popularity}</td>
                  </tr>
                  <tr>
                    <td className={s.category}>Genre</td>
                    <td>{movies.genres.map(el => `${el.name} `)}</td>
                  </tr>
                  <tr>
                    <td className={s.category}>Original title</td>
                    <td>{movies.original_title}</td>
                  </tr>
                </tbody>
              </table>
              <div className={s.about}>
                <h4 className={s.titleAbout}>ABOUT</h4>
                <p className={s.text}>{movies.overview}</p>
              </div>
            </div>
          </div>
          <div className={s.links}>
            <Link
              className={s.link}
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from },
              }}
            >
              Cast
            </Link>
            <Link
              className={s.link}
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from },
              }}
            >
              Reviews
            </Link>
          </div>
          <Suspense
            fallback={
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            }
          >
            <Route path="/movies/:movieId/cast">
              <Cast />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <Reviews />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
