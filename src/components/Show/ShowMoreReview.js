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
} from './ShowStyle';
import StarIcon from '@mui/icons-material/Star';
import RoomReviewBar from '../../pages/Room/RoomReviewBar';
import RoomReviewsCard from '../../pages/Room/RoomReviewsCard';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import usePagination from '@mui/material/usePagination/usePagination';

const ShowMoreReview = ({
  roomInfo,
  roomReviewInfo,
  setPer_page,
  per_page,
  setPage,
  page,
  setIsShowReviews,
  isShowReviews,
}) => {
  const [searchedValue, setSearchedValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

  // console.log('per_page', per_page);
  // console.log('page', page);

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
      <ShowReviewWrapper className='showRight'>
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
                ?.slice(0)
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
        {/* roomReviewInfo?.total_objects */}
        <ShowReviewPage>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(roomReviewInfo?.total_objects / per_page)}
              variant='outlined'
              shape='rounded'
              page={page}
              onChange={handlePageChange}
            />
          </Stack>
        </ShowReviewPage>
      </ShowReviewWrapper>
    </ShowReviewBox>
  );
};

export default ShowMoreReview;
