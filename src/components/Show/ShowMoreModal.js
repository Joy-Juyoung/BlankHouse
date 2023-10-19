import React, { useEffect } from 'react';
import RoomAmenity from '../../pages/Room/RoomAmenity';
import ModalLayout from '../Modals/ModalLayout';
import {
  ModalContainer,
  ModalMain,
  ModalMainSection,
  ModalTitle,
} from '../Modals/ModalStyle';
import {
  ModalShowMain,
  ShareWrapper,
  ShowShare,
  ShowShareWrap,
  ShowWrap,
} from './ShowModalStyle';
import ShowMoreReview from './ShowMoreReview';
import StarIcon from '@mui/icons-material/Star';
import ShowMoreModalLayout from '../Modals/ShowMoreModalLayout';

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
  toggleShareModal,
  modalShareShown,
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

// const ShowMoreModal = ({
//   toggleAboutPlaceModal,
//   modalAboutPlaceShown,
//   toggleReviewModal,
//   modalReviewShown,
//   toggleAmenityModal,
//   modalAmenityShown,
//   roomInfo,
//   roomReviewInfo,
//   setPer_page,
//   per_page,
//   setPage,
//   page,
//   setIsShowReviews,
//   isShowReviews,
//   toggleShareModal,
//   modalShareShown,
// }) => {
//   // Function to add or remove the no-scroll class to the body element
//   const toggleBodyScroll = (enableScroll) => {
//     const body = document.body;
//     if (enableScroll) {
//       body.classList.remove('body-no-scroll');
//     } else {
//       body.classList.add('body-no-scroll');
//     }
//   };

//   const onToggleClose = () => {
//     if (modalAboutPlaceShown) {
//       toggleAboutPlaceModal(false);
//     }
//     if (modalAmenityShown) {
//       toggleAmenityModal(false);
//     }
//     if (modalReviewShown) {
//       toggleReviewModal(false);
//       setIsShowReviews(false);
//     }
//     // Ensure scrolling is enabled when the modal is closed
//     toggleBodyScroll(true);
//   };

//   useEffect(() => {
//     // Disable scrolling when the modal is shown
//     if (modalAboutPlaceShown || modalReviewShown || modalAmenityShown) {
//       toggleBodyScroll(false);
//     }

//     // Remove the scroll lock when the component unmounts
//     return () => {
//       toggleBodyScroll(true);
//     };
//   }, [
//     modalAboutPlaceShown,
//     modalReviewShown,
//     modalAmenityShown,
//     toggleAboutPlaceModal,
//     toggleReviewModal,
//     toggleAmenityModal,
//     setIsShowReviews,
//   ]);

//   return (
//     <ModalLayout
//       shown={modalAboutPlaceShown || modalReviewShown || modalAmenityShown}
//       close={onToggleClose}
//       title={
//         (modalAboutPlaceShown && 'About this place') ||
//         (modalReviewShown && 'Reviews') ||
//         (modalAmenityShown && 'Amenities')
//       }
//     >
//       <ModalContainer>
//         <ModalShowMain>
//           <ModalMainSection>
//             {modalAboutPlaceShown && (
//               <ShowWrap>{roomInfo?.description}</ShowWrap>
//             )}
//             {modalReviewShown && (
//               <ShowMoreReview
//                 roomReviewInfo={roomReviewInfo}
//                 roomInfo={roomInfo}
//                 setIsShowReviews={setIsShowReviews}
//                 isShowReviews={isShowReviews}
//                 setPer_page={setPer_page}
//                 per_page={per_page}
//                 setPage={setPage}
//                 page={page}
//               />
//             )}
//             {modalAmenityShown && (
//               <RoomAmenity
//                 roomInfo={roomInfo}
//                 modalAmenityShown={modalAmenityShown}
//               />
//             )}
//           </ModalMainSection>
//         </ModalShowMain>
//       </ModalContainer>
//     </ModalLayout>
//   );
// };

// export default ShowMoreModal;
