import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { allRoomReviews } from '../../redux/slices/reviews';
import RoomReviewBar from './RoomReviewBar';
import RoomReviewsCard from './RoomReviewsCard';
import {
  BarMax,
  BarRate,
  EmptyReview,
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
import RateReviewIcon from '@mui/icons-material/RateReview';

const RoomReviews = ({
  roomInfo,
  roomReviewInfo,
  per_page,
  modalReviewShown,
  toggleReviewModal,
  setIsShowReviews,
}) => {
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
        {roomReviewInfo?.total_objects ? (
          <ReviewsList>
            {roomReviewInfo?.results?.map((review) => {
              return (
                <RoomReviewsCard
                  key={review?.pk}
                  review={review}
                  toggleReviewModal={toggleReviewModal}
                  modalReviewShown={modalReviewShown}
                  setIsShowReviews={setIsShowReviews}
                />
              );
            })}
          </ReviewsList>
        ) : (
          <EmptyReview>
            <RateReviewIcon sx={{ fontSize: 48 }} color='disabled' />
            <p>This room has no reviews.</p>
          </EmptyReview>
        )}
      </ReviewsWrap>
    </RoomReviewsContainter>
  );
};

export default RoomReviews;
