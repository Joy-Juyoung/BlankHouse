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
} from './ShowStyle';
import StarIcon from '@mui/icons-material/Star';
// import {
//   GraphsRateNum,
//   ReviewGraphs,
//   ReviewGraphsName,
//   ReviewGraphsRate,
// } from '../../pages/Room/RoomReviewsStyle';
import RoomReviewBar from '../../pages/Room/RoomReviewBar';
import RoomReviewsCard from '../../pages/Room/RoomReviewsCard';
import SearchIcon from '@mui/icons-material/Search';

const ShowMoreReview = ({
  roomInfo,
  roomReviewInfo,
  setPer_page,
  per_page,
  setpage,
  setIsShowReviews,
  isShowReviews,
}) => {
  // const [isShowReviews, setIsShowReviews] = useState(true);

  // useEffect(()=> {
  //   setIsShowReviews()
  // })

  // useEffect(() => {
  //   if (isShowReviews) {
  //     // setPer_page(roomReviewInfo?.total_objects.toString());
  //     setPer_page('14');
  //   }
  // }, [isShowReviews]);

  return (
    <ShowReviewBox>
      <ShowReviewWrapper className='showSide'>
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
      <ShowReviewWrapper>
        <ShowReviewSearch>
          <span>
            <SearchIcon />
          </span>
          <input type='text' placeholder='Search reviews' />
        </ShowReviewSearch>
        <ShowReviewList>
          <ShowReviewEach>
            {roomReviewInfo?.total_objects > 0 &&
              roomReviewInfo?.results
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
      </ShowReviewWrapper>
    </ShowReviewBox>
  );
};

export default ShowMoreReview;
