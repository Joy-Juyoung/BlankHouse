import React from 'react';
import {
  ReviewCardText,
  ReviewCardUserWrap,
  ReviewCardWrap,
  ReviewTextContents,
  ReviewUserAvatar,
  ReviewUserInfo,
} from '../RoomReviewsStyle';
import { Skeleton } from '@mui/material';

const RoomReviewSk = ({ loading }) => {
  return (
    <ReviewCardUserWrap>
      <ReviewUserAvatar>
        <Skeleton
          variant='rect'
          animation='wave'
          sx={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
      </ReviewUserAvatar>
      <ReviewUserInfo>
        <p>
          <Skeleton
            variant='rect'
            animation='wave'
            sx={{
              width: '75px',
              height: '16px',
              borderRadius: '10px',
              margin: '4px 0',
            }}
          />
        </p>
        <span>
          <Skeleton
            variant='rect'
            animation='wave'
            sx={{
              width: '75px',
              height: '13px',
              borderRadius: '10px',
            }}
          />
        </span>
      </ReviewUserInfo>
    </ReviewCardUserWrap>
  );
};

export default RoomReviewSk;
