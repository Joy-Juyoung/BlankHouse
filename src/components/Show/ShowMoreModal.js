import React, { useEffect } from 'react';
import RoomAmenity from '../../pages/Room/RoomAmenity';
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
  toggleAmenityModal,
  modalAmenityShown,
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
    if (modalAmenityShown) {
      toggleAmenityModal(false);
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
      shown={modalAboutPlaceShown || modalReviewShown || modalAmenityShown}
      close={onToggleClose}
      title={
        (modalAboutPlaceShown && 'About this place') ||
        (modalReviewShown && 'Reviews') ||
        (modalAmenityShown && 'Amenities')
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
            {modalAmenityShown && <RoomAmenity roomInfo={roomInfo} />}
          </ModalMainSection>
        </ModalShowMain>
      </ModalContainer>
    </ModalLayout>
  );
};

export default ShowMoreModal;
