import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import {
  ReviewCardText,
  ReviewCardUserWrap,
  ReviewCardWrap,
  ReviewTextContents,
  ReviewUserAvatar,
  ReviewUserInfo,
} from './RoomReviewsStyle';
import { ShowMoreBtn } from './RoomStyle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { reviewById } from '../../redux/slices/reviews';
import { useDispatch, useSelector } from 'react-redux';
import reviewsDataService from '../../redux/services/ReviewsService';

const RoomReviewsCard = ({ review }) => {
  const [reviewData, setReviewData] = useState('');

  const getReviews = () => {
    reviewsDataService
      .getReviewById(review?.pk)
      .then((response) => {
        setReviewData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getReviews();
  }, []);
  console.log('reviewData', reviewData);

  return (
    <ReviewCardWrap>
      <ReviewCardUserWrap>
        <ReviewUserAvatar></ReviewUserAvatar>
        <ReviewUserInfo>
          <p>{reviewData?.user?.username}</p>
          <span>{reviewData?.created_at}</span>
        </ReviewUserInfo>
      </ReviewCardUserWrap>
      <ReviewCardText>
        <ReviewTextContents>
          {reviewData?.payload?.length > 180 ? (
            <p>{reviewData?.payload?.substring(0, 180)}...</p>
          ) : (
            <p>{reviewData?.payload}</p>
          )}
          {reviewData?.payload?.length >= 180 && (
            <ShowMoreBtn>
              <span>Show more</span>
              <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
            </ShowMoreBtn>
          )}
        </ReviewTextContents>
      </ReviewCardText>
    </ReviewCardWrap>
  );
};

export default RoomReviewsCard;
