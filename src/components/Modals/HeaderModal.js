import React from 'react';
import styled from 'styled-components';

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 4;
  overflow: hidden;
`;

const ModalContent = styled.div`
  position: fixed;
  top: -160px;
  background-color: #fff;
  width: 100%;
  height: 160px;
  z-index: 4;
  transition: all 0.3s ease-out;
  animation: headerslide 0.3s forwards;

  @keyframes headerslide {
    100% {
      top: 0;
    }
  }
`;

const HeaderModal = ({ children, headershown, headerclose }) => {
  return headershown ? (
    <ModalBackDrop
      onClick={() => {
        headerclose();
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
