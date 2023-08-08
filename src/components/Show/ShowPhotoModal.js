import React from 'react';
import {
  ModalPhotos,
  ModalWholeContainer,
  ModalWholeWrap,
} from '../Modals/ModalStyle';
import WholePageModal from '../Modals/WholePageModalLayout';
import { PhotoSubCover, RoomMainPhotos } from '../../pages/Room/RoomStyle';

const ShowPhotoModal = ({ modalPhotoShown, togglePhotoModal, roomInfo }) => {
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
