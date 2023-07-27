// import { Modal } from '@mui/material';
import React from 'react';
// import Modal from './Modal';
import {
  ModalPhotos,
  ModalWholeContainer,
  ModalWholeWrap,
} from '../Modals/ModalStyle';
import WholePageModal from '../Modals/WholePageModal';
import { PhotoSubCover, RoomMainPhotos } from '../../pages/Room/RoomStyle';

const ShowPhotoModal = ({ modalPhotoShown, togglePhotoModal, roomData }) => {
  return (
    <WholePageModal
      shown={modalPhotoShown}
      close={() => {
        togglePhotoModal(false);
        document.body.style.overflow = 'unset';
      }}
      // title='About this place'
    >
      <ModalWholeContainer>
        <ModalWholeWrap>
          <ModalPhotos>
            <RoomMainPhotos>
              {roomData?.photos?.map((pic) => {
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
