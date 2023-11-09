import React, { useEffect, useState } from 'react';
import { MainSmallContainer, MainTitle, MainWrap } from '../MainHome/MainStyle';
import {
  LoadMore,
  LoadMoreBtn,
  LoadMoreBtnDisabled,
  TripListWrapper,
  TripWrapper,
} from './TripsStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllBookingAsync,
  getAllBookingInfo,
} from '../../redux/slices/bookingSlice';
import TripListCard from './TripListCard';
import { Skeleton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Trips = ({ setIsPageMain }) => {
  const [loading, setLoading] = useState(false);
  const [nextList, setNextList] = useState(9);
  const allBookingInfo = useSelector(getAllBookingInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(false);
    setLoading(true);
    dispatch(getAllBookingAsync())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, [dispatch]);

  const handleShowMore = () => {
    setNextList(nextList + 20);
  };

  return (
    <MainSmallContainer>
      <MainTitle>Trips</MainTitle>
      <MainWrap>
        <TripWrapper className='upcomingList'>
          <h2>Upcoming trips</h2>
          {loading ? (
            <TripListWrapper>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '300px', height: '80px', borderRadius: '10px' }}
              />
            </TripListWrapper>
          ) : (
            <>
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
                      return (
                        book?.status !== 'canceled' && checkInDate >= today
                      );
                    })
                    ?.sort((a, b) => {
                      // Convert a and b's check_in dates to Date objects
                      const dateA = new Date(a?.check_in);
                      const dateB = new Date(b?.check_in);

                      // Compare the dates for sorting
                      return dateB - dateA;
                    })
                    ?.slice(0, nextList)
                    ?.map((book) => {
                      return <TripListCard key={book?.pk} book={book} />;
                    })}
              </TripListWrapper>
              {Array.isArray(allBookingInfo) &&
                allBookingInfo?.filter((book) => {
                  const checkInDate = new Date(book?.check_in);
                  const today = new Date();
                  return book?.status !== 'canceled' && checkInDate >= today;
                })?.length > 9 && (
                  <LoadMore>
                    {nextList / allBookingInfo?.length <= 1 ? (
                      <LoadMoreBtn onClick={handleShowMore}>
                        Load more <ExpandMoreIcon />
                      </LoadMoreBtn>
                    ) : (
                      <LoadMoreBtnDisabled disabled>
                        Load more <ExpandMoreIcon />
                      </LoadMoreBtnDisabled>
                    )}
                  </LoadMore>
                )}
            </>
          )}
        </TripWrapper>
        <TripWrapper>
          <h2>Where you’ve been</h2>
          {loading ? (
            <TripListWrapper>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '300px', height: '80px', borderRadius: '10px' }}
              />
            </TripListWrapper>
          ) : (
            <TripListWrapper>
              {Array.isArray(allBookingInfo) &&
                allBookingInfo
                  ?.filter((book) => {
                    const checkInDate = new Date(book?.check_in);
                    const today = new Date();
                    return book?.status !== 'canceled' && checkInDate < today;
                  })
                  ?.sort((a, b) => {
                    const dateA = new Date(a?.check_in);
                    const dateB = new Date(b?.check_in);
                    return dateB - dateA;
                  })
                  ?.slice(0, nextList)
                  ?.map((book) => {
                    return <TripListCard key={book?.pk} book={book} />;
                  })}
            </TripListWrapper>
          )}

          {Array.isArray(allBookingInfo) &&
            allBookingInfo?.filter((book) => {
              const checkInDate = new Date(book?.check_in);
              const today = new Date();
              return book?.status !== 'canceled' && checkInDate < today;
            })?.length > 9 && (
              <LoadMore>
                {nextList / allBookingInfo?.length <= 1 ? (
                  <LoadMoreBtn onClick={handleShowMore}>
                    Load more <ExpandMoreIcon />
                  </LoadMoreBtn>
                ) : (
                  <LoadMoreBtnDisabled disabled>
                    Load more <ExpandMoreIcon />
                  </LoadMoreBtnDisabled>
                )}
              </LoadMore>
            )}
        </TripWrapper>
        <TripWrapper>
          <h2>Canceled trips</h2>
          {loading ? (
            <TripListWrapper>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '300px', height: '80px', borderRadius: '10px' }}
              />
            </TripListWrapper>
          ) : (
            <>
              <TripListWrapper>
                {Array.isArray(allBookingInfo) &&
                  allBookingInfo
                    ?.filter((book) => {
                      return book?.status === 'canceled';
                    })
                    ?.sort((a, b) => {
                      const dateA = new Date(a?.check_in);
                      const dateB = new Date(b?.check_in);
                      return dateB - dateA;
                    })
                    ?.slice(0, nextList)
                    ?.map((book) => {
                      return <TripListCard key={book?.pk} book={book} />;
                    })}
              </TripListWrapper>
              {Array.isArray(allBookingInfo) &&
                allBookingInfo?.filter((book) => {
                  return book?.status === 'canceled';
                })?.length > 9 && (
                  <LoadMore>
                    {nextList / allBookingInfo?.length <= 1 ? (
                      <LoadMoreBtn onClick={handleShowMore}>
                        Load more <ExpandMoreIcon />
                      </LoadMoreBtn>
                    ) : (
                      <LoadMoreBtnDisabled disabled>
                        Load more <ExpandMoreIcon />
                      </LoadMoreBtnDisabled>
                    )}
                  </LoadMore>
                )}
            </>
          )}
        </TripWrapper>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Trips;
