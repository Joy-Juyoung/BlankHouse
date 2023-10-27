import React, { useEffect } from 'react';
import RoomAmenity from '../../pages/Room/RoomAmenity';
import AddBalance from '../AddBalance';
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
  toggleBalanceModal,
  modalBalanceShown,
  userMe,
  roomId,
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
    if (modalBalanceShown) {
      toggleBalanceModal(false);
    }
  };

  return (
    <ModalLayout
      shown={
        modalAboutPlaceShown ||
        modalReviewShown ||
        modalAmenityShown ||
        modalBalanceShown
      }
      close={onToggleClose}
      title={
        (modalAboutPlaceShown && 'About this place') ||
        (modalReviewShown && 'Reviews') ||
        (modalAmenityShown && 'Amenities') ||
        (modalBalanceShown && 'Add Balance')
      }
    >
      <ModalContainer>
        <ModalShowMain>
          <ModalMainSection>
            {modalAboutPlaceShown && (
              <ShowWrap className='about'>
                {roomInfo?.description?.split('.').map((paragraph, index) => (
                  <p key={index}>{paragraph}.</p>
                ))}
              </ShowWrap>
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
            {modalBalanceShown && (
              <AddBalance
                userMe={userMe}
                modalBalanceShown={modalBalanceShown}
                roomId={roomId}
              />
            )}
          </ModalMainSection>
        </ModalShowMain>
      </ModalContainer>
    </ModalLayout>
  );
};

export default ShowMoreModal;
