// import { Modal } from '@mui/material';
import React from 'react';
// import Modal from './Modal';
import {
  ModalContainer,
  ModalMainContents,
  ModalPhotos,
  ModalWholeContainer,
  ModalWholeWrap,
} from './ModalStyle';
import WholePageModal from './WholePageModal';
import { Skeleton } from '@mui/material';
import {
  PhotoSubCover,
  RoomMainPhotos,
  RoomPhotoMain,
  RoomPhotoSub,
} from '../../pages/Room/RoomStyle';

const ShowPhotoModal = ({ modalPhotoShown, togglePhotoModal, roomData }) => {
  // useEffect(() => {
  //   window.addEventListener('scroll', listenToScroll);
  //   return () => window.removeEventListener('scroll', listenToScroll);
  // }, []);

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
          {/* <ModalMainSection> */}
          {/* <ModalMainTitle>Price range</ModalMainTitle> */}
          <ModalPhotos>
            <RoomMainPhotos>
              {roomData?.photos?.map((pic) => {
                return (
                  <PhotoSubCover key={pic?.pk}>
                    <img src={pic?.picture} alt='' />
                    {/* <span className='subCover'></span> */}
                  </PhotoSubCover>
                );
              })}
            </RoomMainPhotos>
          </ModalPhotos>
          {/* </ModalMainSection> */}
          {/* </ModalMain> */}
        </ModalWholeWrap>
      </ModalWholeContainer>
    </WholePageModal>
  );
};

export default ShowPhotoModal;
