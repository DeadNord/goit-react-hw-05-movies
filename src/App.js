import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Navigation from './components/navigation/Navigation';
import Section from './components/section/Section';

const HomePage = lazy(() => import('./views/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage'),
);
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));
const App = () => {
  return (
    <>
      <Section>
        <Navigation />
      </Section>
      <Suspense
        fallback={
          <Section>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          </Section>
        }
      >
        <Switch>
          <Route exact path="/">
            <Section>
              <HomePage />
            </Section>
          </Route>
          <Route exact path="/movies">
            <Section>
              <MoviesPage />
            </Section>
          </Route>
          <Route path="/movies/:movieId">
            <Section>
              <MovieDetailsPage />
            </Section>
          </Route>
          <Route>
            <Section>
              <NotFoundView />
            </Section>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
