import React from 'react';
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
import Avatar from '../../components/Avatar/Avatar';

const RoomReviewsCard = ({ review }) => {
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
            <>
              <p>{review?.payload?.substring(0, 180)}...</p>
              <ShowMoreBtn>
                <span>Show more</span>
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ShowMoreBtn>
            </>
          ) : (
            <p>{review?.payload}</p>
          )}
        </ReviewTextContents>
      </ReviewCardText>
    </ReviewCardWrap>
  );
};

export default RoomReviewsCard;
