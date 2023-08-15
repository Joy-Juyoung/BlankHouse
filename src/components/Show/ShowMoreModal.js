import React, { useEffect } from 'react';
import ModalLayout from '../Modals/ModalLayout';
import {
  ModalContainer,
  ModalMain,
  ModalMainSection,
  ModalTitle,
} from '../Modals/ModalStyle';
import { ModalShowMain, ShowWrap } from './ShowModalStyle';
import ShowMoreReview from './ShowMoreReview';
// import ShowMoreModalLayout from '../Modals/ShowMoreModalLayout';

const ShowMoreModal = ({
  toggleAboutPlaceModal,
  modalAboutPlaceShown,
  toggleReviewModal,
  modalReviewShown,
  roomInfo,
  roomReviewInfo,
  setPer_page,
  per_page,
  setpage,
  setIsShowReviews,
  isShowReviews,
}) => {
  const onToggleClose = () => {
    if (modalAboutPlaceShown) {
      toggleAboutPlaceModal(false);
    }
    if (modalReviewShown) {
      toggleReviewModal(false);
      setIsShowReviews(false);
    }
  };

  // useEffect(() => {
  //   if (isShowReviews) {
  //     // setPer_page(roomReviewInfo?.total_objects.toString());
  //     setPer_page(roomReviewInfo?.total_objects.toString());
  //   }
  // }, [modalReviewShown]);

  return (
    <ModalLayout
      shown={modalAboutPlaceShown || modalReviewShown}
      close={onToggleClose}
      title={
        (modalAboutPlaceShown && 'About this place') ||
        (modalReviewShown && 'Reviews')
      }
    >
      <ModalContainer>
        <ModalShowMain>
          <ModalMainSection>
            {modalAboutPlaceShown && (
              <ShowWrap>{roomInfo?.description}</ShowWrap>
            )}
            {modalReviewShown && (
              <ShowMoreReview
                roomReviewInfo={roomReviewInfo}
                setPer_page={setPer_page}
                per_page={per_page}
                setpage={setpage}
                roomInfo={roomInfo}
                setIsShowReviews={setIsShowReviews}
                isShowReviews={isShowReviews}
              />
            )}
          </ModalMainSection>
        </ModalShowMain>
      </ModalContainer>
    </ModalLayout>
  );
};

export default ShowMoreModal;
