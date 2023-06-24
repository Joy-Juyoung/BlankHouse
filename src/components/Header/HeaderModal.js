import React from 'react';
import styled from 'styled-components';
// import { ModalCloseBtn, ModalTitle, ModalTop } from './ModalStyle';
// import CloseIcon from '@mui/icons-material/Close';

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  overflow: hidden;
`;

const ModalContent = styled.div`
  position: fixed;
  /* top: 0;
  left: 0;
  right: 0; */
  top: -160px;
  left: 0;
  right: 0;
  background-color: #fff;
  /* width: 100px; */
  width: 100%;
  height: 160px;
  /* z-index: 2; */

  -webkit-animation: slide 0.3s forwards;
  animation: slide 0.3s forwards;

  @-webkit-keyframes slide {
    100% {
      top: 0;
      left: 0;
      right: 0;
    }
  }

  @keyframes slide {
    100% {
      top: 0;
      left: 0;
      right: 0;
    }
  }
`;

const HeaderModal = ({ children, shown, close }) => {
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
        {children}
      </ModalContent>
    </ModalBackDrop>
  ) : null;
};

export default HeaderModal;
