import React, { useEffect } from 'react';
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
import { Skeleton } from '@mui/material';
import RoomReviewSk from './Skeletons/RoomReviewSk';

const RoomReviewsCard = ({
  review,
  isShowReviews,
  setPer_page,
  per_page,
  modalReviewShown,
  toggleReviewModal,
  setIsShowReviews,
  loading,
}) => {
  //   useEffect(() => {
  // if(isShowReviews) {

  //   setPer_page(roomReviewInfo?.total_objects.toString())
  // }
  //   }, [isShowReviews]);
  // console.log("  setPer_page('12');")

  return (
    <ReviewCardWrap>
      {loading ? (
        <RoomReviewSk />
      ) : (
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
      )}
      <ReviewCardText>
        <ReviewTextContents>
          {loading && (
            <p>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{
                  width: '490px',
                  height: '92px',
                  borderRadius: '10px',
                  margin: '10px 0',
                }}
              />
            </p>
          )}
          {!isShowReviews && review?.payload?.length > 180 ? (
            <>
              <p>{review?.payload?.substring(0, 180)}...</p>

              <ShowMoreBtn
                onClick={() => {
                  toggleReviewModal(!modalReviewShown);
                  setIsShowReviews(true);
                  // setPer_page('14');
                  // setPer_page(roomReviewInfo?.total_objects.toString());
                }}
              >
                <span>Show more</span>
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ShowMoreBtn>
            </>
          ) : (
            <p style={{ marginBottom: isShowReviews && '20px' }}>
              {review?.payload}
            </p>
          )}
        </ReviewTextContents>
      </ReviewCardText>
    </ReviewCardWrap>
  );
};

export default RoomReviewsCard;
