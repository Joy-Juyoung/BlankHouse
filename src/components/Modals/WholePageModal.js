import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ModalCloseBtn,
  ModalRightBtns,
  ModalTitle,
  ModalTop,
} from './ModalStyle';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
  z-index: 5;

  overflow: hidden;
`;

const ModalContent = styled.div`
  height: 100%;
  width: 100vw;
  background-color: white;
  /* border-radius: 10px; */
  overflow: clip;
  position: relative;
  bottom: 0;

  transition: all 0.3s ease-out;
  animation: wslide 0.4s forwards;

  @keyframes wslide {
    100% {
      bottom: 0;
    }
  }
`;

const WholePageModal = ({ children, shown, close, title }) => {
  const [fav, setFav] = useState(false);

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
          <ModalCloseBtn
            onClick={() => {
              close();
            }}
          >
            <CloseIcon fontSize='small' />
          </ModalCloseBtn>
          <ModalRightBtns>
            <button>
              <ShareIcon sx={{ fontSize: '18px' }} />
              <span>Share</span>
            </button>
            <button onClick={(e) => setFav(!fav)}>
              {fav ? (
                <FavoriteIcon sx={{ fontSize: '18px', color: '#e20000' }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: '18px', color: '#000' }} />
              )}
              <span>Save</span>
            </button>
          </ModalRightBtns>
        </ModalTop>

        {children}
      </ModalContent>
    </ModalBackDrop>
  ) : null;
};

export default WholePageModal;
