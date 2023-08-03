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
import Avatar from '../../components/Avatar/Avatar';

const RoomReviewsCard = ({ review }) => {
  // const [reviewData, setReviewData] = useState('');

  // const getReviews = () => {
  //   reviewsDataService
  //     .getReviewById(review?.pk)
  //     .then((response) => {
  //       setReviewData(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // useEffect(() => {
  //   getReviews();
  // }, []);
  // console.log('reviewData', reviewData);

  return (
    <ReviewCardWrap>
      <ReviewCardUserWrap>
        <ReviewUserAvatar>
          <Avatar
            initials={review?.user?.username?.substring(0, 1).toUpperCase()}
          />
        </ReviewUserAvatar>
        <ReviewUserInfo>
          <p>{review?.user?.username}</p>
          <span>{review?.created_at?.split('T')[0]}</span>
        </ReviewUserInfo>
      </ReviewCardUserWrap>
      <ReviewCardText>
        <ReviewTextContents>
          {review?.payload?.length > 180 ? (
            <p>{review?.payload?.substring(0, 180)}...</p>
          ) : (
            <p>{review?.payload}</p>
          )}
          {review?.room?.payload?.length >= 180 && (
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
