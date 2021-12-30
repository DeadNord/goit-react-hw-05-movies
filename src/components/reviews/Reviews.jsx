import { renderParamsCard } from '../../AppServise';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewsItem from './ReviewsItem';
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const params = useParams();

  useEffect(() => {
    renderParamsCard(params.movieId, 'reviews').then(data => setReviews(data));
  }, []);

  return (
    <>
      {reviews && (
        <ul className={s.list}>
          {reviews.results.map(el => (
            <ReviewsItem key={el.id} data={el} />
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
