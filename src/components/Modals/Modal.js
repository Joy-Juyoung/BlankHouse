import React from 'react';
import styled from 'styled-components';
import { ModalCloseBtn, ModalTitle, ModalTop } from './ModalStyle';
import CloseIcon from '@mui/icons-material/Close';

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  overflow: hidden;
`;

const ModalContent = styled.div`
  /* width: 750px; */
  min-height: 200px;
  background-color: white;
  /* padding: 20px 0; */
  border-radius: 10px;
`;

const Modal = ({ children, shown, close, title }) => {
  return shown ? (
    <ModalBackDrop
      onClick={() => {
        close();
      }}
    >
      <ModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalTop>
          <div></div>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseBtn
            onClick={() => {
              close();
            }}
          >
            <CloseIcon fontSize='small' />
          </ModalCloseBtn>
        </ModalTop>

        {children}
      </ModalContent>
    </ModalBackDrop>
  ) : null;
};

export default Modal;
