import React, { useEffect } from 'react';
import { MainSmallContainer, MainTitle, MainWrap } from '../MainHome/MainStyle';
import { TripListWrapper, TripWrapper } from './TripsStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllBookingAsync,
  getAllBookingInfo,
} from '../../redux/slices/bookingSlice';
import TripListCard from './TripListCard';

const Trips = ({ setIsPageMain }) => {
  const allBookingInfo = useSelector(getAllBookingInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(false);
    dispatch(getAllBookingAsync());
  }, [dispatch]);

  console.log('All Bookings', allBookingInfo);

  return (
    <MainSmallContainer>
      <MainTitle>Trips</MainTitle>
      <MainWrap>
        <TripWrapper className='upcomingList'>
          <h2>Upcoming trips</h2>
          <TripListWrapper>
            {/* check to ensure that allBookingInfo is an array before attempting to map */}
            {Array.isArray(allBookingInfo) &&
              allBookingInfo
                ?.filter((book) => {
                  // Convert book?.check_in to a Date object
                  const checkInDate = new Date(book?.check_in);
                  // Get today's date
                  const today = new Date();

                  // Compare the check-in date with today's date
                  return book?.status !== 'canceled' && checkInDate >= today;
                })
                .sort((a, b) => {
                  // Convert a and b's check_in dates to Date objects
                  const dateA = new Date(a?.check_in);
                  const dateB = new Date(b?.check_in);

                  // Compare the dates for sorting
                  return dateA - dateB;
                })
                .map((book) => {
                  return <TripListCard key={book?.pk} book={book} />;
                })}
          </TripListWrapper>
        </TripWrapper>
        <TripWrapper>
          <h2>Where you’ve been</h2>
          <TripListWrapper>
            {Array.isArray(allBookingInfo) &&
              allBookingInfo
                ?.filter((book) => {
                  const checkInDate = new Date(book?.check_in);
                  const today = new Date();
                  return book?.status !== 'canceled' && checkInDate < today;
                })
                ?.map((book) => {
                  return <TripListCard key={book?.pk} book={book} />;
                })}
          </TripListWrapper>
        </TripWrapper>
        <TripWrapper>
          <h2>Canceled trips</h2>
          <TripListWrapper>
            {Array.isArray(allBookingInfo) &&
              allBookingInfo
                ?.filter((book) => {
                  return book?.status === 'canceled';
                })
                ?.map((book) => {
                  return <TripListCard key={book?.pk} book={book} />;
                })}
          </TripListWrapper>
        </TripWrapper>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Trips;
