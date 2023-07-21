import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allReviews } from '../../redux/services/ReviewsService';
// import { allUsers, userMe } from '../redux/slices/users';

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    // dispatch(allUsers());
    dispatch(allReviews());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);
  //
  // console.log('reviews', reviews);

  return (
    <div>
      <div>test page</div>
    </div>
  );
};

export default Reviews;
