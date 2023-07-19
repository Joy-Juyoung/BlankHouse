// import { Modal } from '@mui/material';
import React from 'react';
import Modal from './Modal';
import {
  ModalContainer,
  ModalMain,
  ModalMainContents,
  ModalMainSection,
  ModalMainText,
  ModalMainTitle,
} from './ModalStyle';

const ShowMoreModal = ({ modalAboutPlaceShown, toggleAboutPlaceModal }) => {
  return (
    <Modal
      shown={modalAboutPlaceShown}
      close={() => {
        toggleAboutPlaceModal(false);
      }}
      title='About this place'
    >
      <ModalContainer>
        {/* <ModalMain> */}
        {/* <ModalMainSection> */}
        {/* <ModalMainTitle>Price range</ModalMainTitle> */}
        <ModalMainContents>
          The average nightly price is $000,000 The average nightly price is
          $000,000The average nightly price is $000,000The average nightly price
          is $000,000The average nightly price is $000,000The average nightly
          price is $000,000The average nightly price is $000,000The average
          nightly price is $000,000The average nightly price is $000,000The
          average nightly price is $000,000The average nightly price is
          $000,000The average nightly price is $000,000The average nightly price
          is $000,000
        </ModalMainContents>
        {/* </ModalMainSection> */}
        {/* </ModalMain> */}
      </ModalContainer>
    </Modal>
  );
};

export default ShowMoreModal;
