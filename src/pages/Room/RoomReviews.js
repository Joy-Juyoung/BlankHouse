import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allRoomReviews } from '../../redux/slices/reviews';
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

const RoomReviews = ({ roomData, reviews }) => {
  return (
    <RoomReviewsContainter>
      <ReviewsWrap>
        <ReviewsMainTop>
          <ReviewGraphs>
            <ReviewGraphsName>Cleanliness</ReviewGraphsName>
            <ReviewGraphsRate>
              <RoomReviewBar rating={roomData?.cleanliness_rating} />
              <GraphsRateNum>
                {roomData?.cleanliness_rating?.toFixed(2)}
              </GraphsRateNum>
            </ReviewGraphsRate>
          </ReviewGraphs>
          <ReviewGraphs>
            <ReviewGraphsName>Accuracy</ReviewGraphsName>
            <ReviewGraphsRate>
              <RoomReviewBar rating={roomData?.accuracy_rating} />
              <GraphsRateNum>
                {roomData?.accuracy_rating?.toFixed(2)}
              </GraphsRateNum>
            </ReviewGraphsRate>
          </ReviewGraphs>
          <ReviewGraphs>
            <ReviewGraphsName>Comminication</ReviewGraphsName>
            <ReviewGraphsRate>
              <RoomReviewBar rating={roomData?.communication_rating} />
              <GraphsRateNum>
                {roomData?.communication_rating?.toFixed(2)}
              </GraphsRateNum>
            </ReviewGraphsRate>
          </ReviewGraphs>
          <ReviewGraphs>
            <ReviewGraphsName>Location</ReviewGraphsName>
            <ReviewGraphsRate>
              <RoomReviewBar rating={roomData?.location_rating} />
              <GraphsRateNum>
                {roomData?.location_rating?.toFixed(2)}
              </GraphsRateNum>
            </ReviewGraphsRate>
          </ReviewGraphs>
          <ReviewGraphs>
            <ReviewGraphsName>Check-in</ReviewGraphsName>
            <ReviewGraphsRate>
              <RoomReviewBar rating={roomData?.check_in_rating} />
              <GraphsRateNum>
                {roomData?.check_in_rating?.toFixed(2)}
              </GraphsRateNum>
            </ReviewGraphsRate>
          </ReviewGraphs>
        </ReviewsMainTop>
        <ReviewsList>
          {reviews
            ?.filter((rf) => rf?.room !== null)
            ?.slice(0, 6)
            ?.map((review) => {
              return <RoomReviewsCard key={review?.pk} review={review} />;
            })}
        </ReviewsList>
      </ReviewsWrap>
    </RoomReviewsContainter>
  );
};

export default RoomReviews;
