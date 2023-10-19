import React, { useEffect } from 'react';
import RoomAmenity from '../../pages/Room/RoomAmenity';
import ModalLayout from '../Modals/ModalLayout';
import { ModalContainer, ModalMainSection } from '../Modals/ModalStyle';
import { ModalShowMain, ShowWrap } from './ShowModalStyle';
import ShowMoreReview from './ShowMoreReview';

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
  setPage,
  page,
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
      // setPage(1);
    }
  };

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
                roomInfo={roomInfo}
                setIsShowReviews={setIsShowReviews}
                isShowReviews={isShowReviews}
                setPer_page={setPer_page}
                per_page={per_page}
                setPage={setPage}
                page={page}
              />
            )}
            {modalAmenityShown && (
              <RoomAmenity
                roomInfo={roomInfo}
                modalAmenityShown={modalAmenityShown}
              />
            )}
          </ModalMainSection>
        </ModalShowMain>
      </ModalContainer>
    </ModalLayout>
  );
};

export default ShowMoreModal;
