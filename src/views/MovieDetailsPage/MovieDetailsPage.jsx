import { renderParamsCard } from '../../AppServise';
import { lazy, useEffect, useState } from 'react';
import {
  useParams,
  useMatch,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../../components/cast/Cast'));

const Reviews = lazy(() => import('../../components/reviews/Reviews'));

const MovieDetailsPage = () => {
  const [movies, setMovies] = useState(null);
  const params = useParams();
  const location = useLocation();
  const history = useNavigate();
  const { url } = useMatch();

  useEffect(() => {
    renderParamsCard(params.movieId).then(data => setMovies(data));
  }, []);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/movies');
  };

  return (
    <>
      <div className={s.box}>
        <button type="button" className={s.button} onClick={onGoBack}>
          Go Back
        </button>
      </div>
      {movies && (
        <div>
          <div className={s.ModalOneMovieImage}>
            <img
              className={s.ModalOneMovieImagePicture}
              srcSet={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              alt={movies.title}
            />
          </div>

          <div className={s.ModalOneMovieTextBox}>
            <h3 className={s.ModalOneMovieTitle}>{movies.original_title}</h3>
            <table className={s.ModalOneMovieTable}>
              <caption className={s.ModalOneMovieCaption}>about movie</caption>
              <tbody>
                <tr className={s.ModalOneMovieTableRow}>
                  <td className={s.ModalOneMovieTableFirstList}>
                    Vote / Votes
                  </td>
                  <td className={s.ModalOneMovieTableSecondList}>
                    <span className={s.ModalOneMovieTextBoxAccent}>
                      {movies.vote_average}
                    </span>
                    <span className={s.ModalOneMovieTextBoxSecondary}>
                      {movies.vote_count}
                    </span>
                  </td>
                </tr>
                <tr className={s.ModalOneMovieTableRow}>
                  <td className={s.ModalOneMovieTableFirstList}>Popularity</td>
                  <td className={s.ModalOneMovieTableSecondList}>
                    {movies.popularity}
                  </td>
                </tr>
                <tr className={s.ModalOneMovieTableRow}>
                  <td className={s.ModalOneMovieTableFirstList}>Genre</td>
                  <td className={s.ModalOneMovieTableSecondList}>
                    {movies.genres.map(el => `${el.name} `)}
                  </td>
                </tr>
                <tr className={s.ModalOneMovieTableRow}>
                  <td className={s.ModalOneMovieTableFirstList}>
                    Original title
                  </td>
                  <td className={s.ModalOneMovieTableSecondList}>
                    {movies.original_title}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={s.ModalOneMovieAboutBox}>
              <h4 className={s.ModalOneMovieAbout}>ABOUT</h4>
              <p className={s.ModalOneMovieAboutText}>{movies.overview}</p>
            </div>
          </div>

          <div className={s.LinkBox}>
            <Link className={s.Link} to={`${url}/cast`}>
              Cast
            </Link>
            <Link className={s.Link} to={`${url}/reviews`}>
              Reviews
            </Link>
          </div>

          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
