import { useEffect, useState } from 'react';
import { renderMovieGlobal } from '../AppServise';

import Gallery from '../components/gallery/Gallery';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

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
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          style={{ overflow: 'hidden' }}
          loader={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          {' '}
          <Gallery movies={movies} />
        </InfiniteScroll>
      )}
    </>
  );
};

export default HomePage;
