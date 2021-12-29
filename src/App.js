// importComponent
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Section from './components/section/Section';

const HomePage = lazy(() => import('./views/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage'),
);
const MoviesPage = lazy(() => import('./views/MoviesPage'));

function App() {
  return (
    <>
      <Section>
        <Navigation />
      </Section>
      <Routes>
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
      </Routes>
    </>
  );
}

export default App;
