import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { allRoomReviews } from '../../redux/slices/reviews';
import RoomReviewBar from './RoomReviewBar';
import RoomReviewsCard from './RoomReviewsCard';
import {
  BarMax,
  BarRate,
  GraphsRateBar,
  GraphsRateNum,
  ReviewGraphs,
  ReviewGraphsName,
  ReviewGraphsRate,
  ReviewsHead,
  ReviewsList,
  ReviewsMainTop,
  ReviewsWrap,
  RoomReviewsContainter,
} from './RoomReviewsStyle';
// import { allUsers, userMe } from '../redux/slices/users';

const RoomReviews = ({ roomInfo, roomReviewInfo }) => {
  return (
    <RoomReviewsContainter>
      <ReviewsWrap>
        <ReviewsMainTop>
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
        </ReviewsMainTop>
        <ReviewsList>
          {/* {reviewData?.map((review) => {
            return <RoomReviewsCard key={review?.pk} review={review} />;
          })} */}
          {/* <RoomReviewsCard reviewData={reviewData} /> */}

          {roomReviewInfo?.length > 0 &&
            roomReviewInfo?.slice(0, 6)?.map((review) => {
              return <RoomReviewsCard key={review?.pk} review={review} />;
            })}
        </ReviewsList>
      </ReviewsWrap>
    </RoomReviewsContainter>
  );
};

export default RoomReviews;
