import { useEffect, useState } from 'react';
import Gallery from '../components/gallery/Gallery';
import { renderMovieGlobal } from '../AppServise';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    renderMovieGlobal(page, '', 'home').then(data => {
      if (movies) {
        setMovies([...movies, ...data.results]);
      } else {
        setMovies(data.results);
      }
    });
  }, [page]);

  return (
    <>
      {movies && (
        //   {' '}
        <Gallery movies={movies} />
      )}
    </>
  );
};

export default HomePage;
