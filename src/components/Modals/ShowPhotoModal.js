// import { Modal } from '@mui/material';
import React from 'react';
// import Modal from './Modal';
import {
  ModalContainer,
  ModalMainContents,
  ModalPhotos,
  ModalWholeContainer,
} from './ModalStyle';
import WholePageModal from './WholePageModal';
import { Skeleton } from '@mui/material';
import {
  RoomMainPhotos,
  RoomPhotoMain,
  RoomPhotoSub,
} from '../../pages/Room/RoomStyle';

const ShowPhotoModal = ({ modalPhotoShown, togglePhotoModal }) => {
  return (
    <WholePageModal
      shown={modalPhotoShown}
      close={() => {
        togglePhotoModal(false);
      }}
      // title='About this place'
    >
      <ModalWholeContainer>
        {/* <ModalMain> */}
        {/* <ModalMainSection> */}
        {/* <ModalMainTitle>Price range</ModalMainTitle> */}
        <ModalPhotos>
          <RoomMainPhotos>
            <RoomPhotoMain>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '100%', height: '536px', borderRadius: '10px' }}
              />
            </RoomPhotoMain>
            <RoomPhotoSub>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
              />
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
              />
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
              />
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
              />
            </RoomPhotoSub>
            <RoomPhotoMain>
              <img src='../assets/houseSample.room-1.jpg' alt='' />
            </RoomPhotoMain>
            <RoomPhotoMain>
              <img src='' alt='' />
            </RoomPhotoMain>
            {/* <RoomPhotoMain>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '100%', height: '536px', borderRadius: '10px' }}
              />
            </RoomPhotoMain>
            <RoomPhotoMain>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '100%', height: '536px', borderRadius: '10px' }}
              />
            </RoomPhotoMain>
            <RoomPhotoMain>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '100%', height: '536px', borderRadius: '10px' }}
              />
            </RoomPhotoMain>
            <RoomPhotoMain>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{ width: '100%', height: '536px', borderRadius: '10px' }}
              />
            </RoomPhotoMain>
           */}
          </RoomMainPhotos>
        </ModalPhotos>
        {/* </ModalMainSection> */}
        {/* </ModalMain> */}
      </ModalWholeContainer>
    </WholePageModal>
  );
};

export default ShowPhotoModal;
