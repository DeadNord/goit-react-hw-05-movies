import { useState, useEffect } from 'react';
import { renderMovieGlobal } from 'AppServise';
import Gallery from '../components/Gallery/Gallery';
import { useHistory, useLocation } from 'react-router-dom';
import Form from 'components/Form/Form';

const MoviesPage = () => {
  const [searchName, setSearchName] = useState('');
  const [submitName, setSubmitName] = useState(null);
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const location = useLocation();
  const history = useHistory();
  const sortOrder = new URLSearchParams(location.search).get('searchBy');

  useEffect(() => {
    if (!submitName) {
      if (sortOrder) {
        setSubmitName(sortOrder);
      }
      return;
    }
    renderMovieGlobal(page, submitName).then(data => {
      setMovies([...movies, ...data.results]);
      setStatus('done');
    });
  }, [page, submitName]);

  const handleNameChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitName(searchName);
    setPage(1);
    setSearchName('');
    history.push({
      ...location,
      search: `searchBy=${searchName}`,
    });
  };

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        searchName={searchName}
        handleNameChange={handleNameChange}
      />

      {status === 'idle' && <p>Input value</p>}
      {status === 'done' && <Gallery movies={movies} />}
    </>
  );
};
export default MoviesPage;
