import React, { useEffect, useState } from 'react';
import {
  ShowReviewBox,
  ShowReviewEach,
  ShowReviewGraph,
  ShowReviewList,
  ShowReviewRatingGraph,
  ShowReviewSearch,
  ShowReviewSide,
  ShowReviewTitle,
  ShowReviewWrapper,
  GraphsRateNum,
  ReviewGraphs,
  ReviewGraphsName,
  ReviewGraphsRate,
  ShowReviewPage,
  ShowReviewText,
} from './ShowStyle';
import StarIcon from '@mui/icons-material/Star';
import RoomReviewBar from '../../pages/Room/RoomReviewBar';
import RoomReviewsCard from '../../pages/Room/RoomReviewsCard';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import usePagination from '@mui/material/usePagination/usePagination';
import { EmptyReview, ReviewCardWrap } from '../../pages/Room/RoomReviewsStyle';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getAllReviewByRoomInfo,
  getAllRoomReviews,
  getAllRoomReviewsAsync,
  getReviewByRoomIdAsync,
} from '../../redux/slices/roomReviewSlice';

const ShowMoreReview = ({ roomInfo, setIsShowReviews, isShowReviews }) => {
  const [searchedValue, setSearchedValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [per_page, setPer_page] = useState(6);
  const [page, setPage] = useState(1);

  const { roomId } = useParams();
  const roomReviewInfo = useSelector(getAllReviewByRoomInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewByRoomIdAsync({ roomId, per_page, page }));
  }, [dispatch, roomId, per_page, page]);

  useEffect(() => {
    setSearchResults(roomReviewInfo?.results);
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearchedValue(keyword);

    const filteredResults = roomReviewInfo?.results?.filter((item) =>
      item?.payload.toLowerCase().includes(searchedValue.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const handlePageChange = (e, p) => {
    console.log('p', p);
    setPage(p);
  };

  return (
    <ShowReviewBox>
      <ShowReviewWrapper className='showLeft'>
        <ShowReviewSide>
          <ShowReviewTitle>
            <h2 className='rating'>
              <StarIcon sx={{ fontSize: '24px', marginRight: '5px' }} />
              <span>
                {roomInfo?.rating?.toFixed(2)} / {roomReviewInfo?.total_objects}{' '}
                reviews
              </span>
            </h2>
          </ShowReviewTitle>
          <ShowReviewRatingGraph>
            <ShowReviewGraph>
              <ReviewGraphs>
                <ReviewGraphsName>Cleanliness</ReviewGraphsName>
                <ReviewGraphsRate>
                  <RoomReviewBar rating={roomInfo?.cleanliness_rating} />
                  <GraphsRateNum>
                    {roomInfo?.cleanliness_rating?.toFixed(2)}
                  </GraphsRateNum>
                </ReviewGraphsRate>
              </ReviewGraphs>
              <ReviewGraphs>
                <ReviewGraphsName>Accuracy</ReviewGraphsName>
                <ReviewGraphsRate>
                  <RoomReviewBar rating={roomInfo?.accuracy_rating} />
                  <GraphsRateNum>
                    {roomInfo?.accuracy_rating?.toFixed(2)}
                  </GraphsRateNum>
                </ReviewGraphsRate>
              </ReviewGraphs>
              <ReviewGraphs>
                <ReviewGraphsName>Comminication</ReviewGraphsName>
                <ReviewGraphsRate>
                  <RoomReviewBar rating={roomInfo?.communication_rating} />
                  <GraphsRateNum>
                    {roomInfo?.communication_rating?.toFixed(2)}
                  </GraphsRateNum>
                </ReviewGraphsRate>
              </ReviewGraphs>
              <ReviewGraphs>
                <ReviewGraphsName>Location</ReviewGraphsName>
                <ReviewGraphsRate>
                  <RoomReviewBar rating={roomInfo?.location_rating} />
                  <GraphsRateNum>
                    {roomInfo?.location_rating?.toFixed(2)}
                  </GraphsRateNum>
                </ReviewGraphsRate>
              </ReviewGraphs>
              <ReviewGraphs>
                <ReviewGraphsName>Check-in</ReviewGraphsName>
                <ReviewGraphsRate>
                  <RoomReviewBar rating={roomInfo?.check_in_rating} />
                  <GraphsRateNum>
                    {roomInfo?.check_in_rating?.toFixed(2)}
                  </GraphsRateNum>
                </ReviewGraphsRate>
              </ReviewGraphs>
            </ShowReviewGraph>
          </ShowReviewRatingGraph>
        </ShowReviewSide>
      </ShowReviewWrapper>
      <ShowReviewWrapper className='modal'>
        <ShowReviewSearch>
          <span>
            <SearchIcon />
          </span>
          <input
            type='text'
            placeholder='Search reviews'
            value={searchedValue}
            onChange={handleSearch}
          />
        </ShowReviewSearch>
        <ShowReviewText>
          {roomReviewInfo?.results?.filter((item) =>
            item?.payload.toLowerCase().includes(searchedValue.toLowerCase())
          )?.length === 0 ? (
            <EmptyReview className='modal'>
              <RateReviewIcon sx={{ fontSize: 48 }} color='disabled' />
              <p>No reviews match your search.</p>
            </EmptyReview>
          ) : (
            <ShowReviewList>
              <ShowReviewEach>
                {roomReviewInfo?.total_objects > 0 &&
                  // searchResults
                  roomReviewInfo?.results
                    ?.filter((item) =>
                      item?.payload
                        .toLowerCase()
                        .includes(searchedValue.toLowerCase())
                    )
                    .reverse()
                    .map((review) => {
                      return (
                        <RoomReviewsCard
                          key={review?.pk}
                          review={review}
                          isShowReviews={isShowReviews}
                          setPer_page={setPer_page}
                          per_page={per_page}
                        />
                      );
                    })}
              </ShowReviewEach>
            </ShowReviewList>
          )}
          <ShowReviewPage>
            <Stack spacing={2}>
              <Pagination
                count={
                  searchedValue
                    ? Math.ceil(
                        roomReviewInfo?.results?.filter((item) =>
                          item?.payload
                            .toLowerCase()
                            .includes(searchedValue.toLowerCase())
                        )?.length / per_page
                      )
                    : Math.ceil(roomReviewInfo?.total_objects / per_page || 1)
                }
                variant='outlined'
                shape='rounded'
                page={page || 1}
                onChange={handlePageChange}
              />
            </Stack>
          </ShowReviewPage>
        </ShowReviewText>
      </ShowReviewWrapper>
    </ShowReviewBox>
  );
};

export default ShowMoreReview;
