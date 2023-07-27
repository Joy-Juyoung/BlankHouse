// import { Modal } from '@mui/material';
import React from 'react';
import Modal from '../Modals/Modal';
import { ModalContainer, ModalMainContents } from '../Modals/ModalStyle';

const ShowMoreModal = ({
  modalAboutPlaceShown,
  toggleAboutPlaceModal,
  roomData,
}) => {
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
        <ModalMainContents>{roomData?.description}</ModalMainContents>
        {/* </ModalMainSection> */}
        {/* </ModalMain> */}
      </ModalContainer>
    </Modal>
  );
};

export default ShowMoreModal;
