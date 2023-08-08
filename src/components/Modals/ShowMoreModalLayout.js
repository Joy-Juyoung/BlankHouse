// import { Modal } from '@mui/material';
import React from 'react';
import Modal from './ModalLayout';
import { ModalContainer, ModalMainContents } from './ModalStyle';

const ShowMoreModalLayout = ({ children, shown, close, title }) => {
  return shown ? (
    <Modal
      onClick={() => {
        close();
      }}
    >
      {/* <ModalContainer> */}
      <ModalMainContents
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </ModalMainContents>
      {/* </ModalContainer> */}
    </Modal>
  ) : null;
};

export default ShowMoreModalLayout;
