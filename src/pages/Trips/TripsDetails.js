import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getBookingByIdAsync,
  getBookingDetail,
} from '../../redux/slices/bookingSlice';

const TripsDetails = ({ setIsPageMain }) => {
  const { bookId } = useParams();
  const bookingInfo = useSelector(getBookingDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(false);
    dispatch(getBookingByIdAsync({ bookId }));
  }, [dispatch]);

  console.log('bookingInfo', bookingInfo);

  return (
    <div>
      <div>TripsDetails</div>
    </div>
  );
};

export default TripsDetails;
