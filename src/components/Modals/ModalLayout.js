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
  z-index: 6;
  overflow: hidden;
`;

const ModalContentWrap = styled.div`
  padding: 40px;
  width: 100vw;
  height: 100vh;
  z-index: 6;
`;

const ModalContentWrapper = styled.div`
  width: 100%;
  /* max-width: 680px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: -100%; /* Start from the bottom of the screen */
  left: 0;
  right: 0;
  z-index: 6;
  /* Animation */
  transition: all 0.3s ease-out;
  animation: slide 0.4s forwards;

  @keyframes slide {
    100% {
      bottom: 2%;
    }
  }
`;

const ModalContent = styled.div`
  /* max-height: 780px; */
  background-color: white;
  border-radius: 10px;
  z-index: 6;
`;

const ModalLayout = ({ children, shown, close, title }) => {
  return shown ? (
    <ModalBackDrop
      onClick={() => {
        close();
      }}
    >
      <ModalContentWrap>
        <ModalContentWrapper>
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
        </ModalContentWrapper>
      </ModalContentWrap>
    </ModalBackDrop>
  ) : null;
};

export default ModalLayout;
