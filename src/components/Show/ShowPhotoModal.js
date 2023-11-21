import React, { useEffect } from 'react';
import {
  ModalCloseBtn,
  ModalPhotos,
  ModalRightBtns,
  ModalTop,
  ModalWholeContainer,
  ModalWholeWrap,
} from '../Modals/ModalStyle';
import WholePageModal from '../Modals/WholePageModalLayout';
import { PhotoSubCover, RoomMainPhotos } from '../../pages/Room/RoomStyle';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import ToggleLiked from '../ToggleLiked';
// import FavoriteBorderIcon from '@mui/icons-material/Favorit;

const ShowPhotoModal = ({
  modalPhotoShown,
  togglePhotoModal,
  roomInfo,
  roomId,
  isPhotoFav,
}) => {
  useEffect(() => {
    if (modalPhotoShown) {
      document.body.style.overflow = 'hidden';
    }
  }, [modalPhotoShown]);

  return (
    <WholePageModal
      shown={modalPhotoShown}
      close={() => {
        togglePhotoModal(false);
        document.body.style.overflow = 'unset';
      }}
    >
      <ModalTop>
        <ModalCloseBtn
          onClick={() => {
            togglePhotoModal(false);
            document.body.style.overflow = 'unset';
          }}
        >
          <CloseIcon fontSize='small' />
        </ModalCloseBtn>
        <ModalRightBtns>
          <button>
            <ShareIcon sx={{ fontSize: '18px' }} />
            <span>Share</span>
          </button>
          <button>
            <ToggleLiked
              roomInfo={roomInfo}
              roomId={roomId}
              isPhotoFav={isPhotoFav}
            />
            <span>Save</span>
          </button>
        </ModalRightBtns>
      </ModalTop>
      <ModalWholeContainer>
        <ModalWholeWrap>
          <ModalPhotos>
            <RoomMainPhotos>
              {roomInfo?.photos?.map((pic) => {
                return (
                  <PhotoSubCover key={pic?.pk}>
                    <img src={pic?.picture} alt='' />
                  </PhotoSubCover>
                );
              })}
            </RoomMainPhotos>
          </ModalPhotos>
        </ModalWholeWrap>
      </ModalWholeContainer>
    </WholePageModal>
  );
};

export default ShowPhotoModal;
