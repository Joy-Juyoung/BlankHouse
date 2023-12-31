import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SorryImg from '../../assets/images/sorry.jpg';

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  width: 100%;
  height: 75%;
  /* object-fit: cover; */
  /* z-index: 100; */
`;

const SliderButton = styled.button`
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  padding: 0;
  margin: auto;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  opacity: 0.5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  z-index: 2;

  /* &:hover {
    background-color: #fff;
  } */
`;

const SliderImageWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  /* 
  transition: transform 0.4s ease-in-out;
  transform: translateX(${(props) => props.translateValue * 3}px); */
`;

const MainRoomSlider = ({ room, isBtnShown, roomData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isBtnShown, setIsBtnShown] = useState(false);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === room?.photos?.length - 1 || prevIndex === 4) {
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };

  // const translateValue = currentIndex * -100;

  return (
    <SliderContainer>
      {currentIndex === 0 ? null : (
        <>
          {isBtnShown && (
            <SliderButton
              direction='left'
              onClick={(e) => {
                e.preventDefault();
                goToPrevSlide();
              }}
            >
              <ArrowLeftIcon />
            </SliderButton>
          )}
        </>
      )}
      <SliderImageWrap>
        <SliderImage
          // src={room?.photos[currentIndex]?.picture || SorryImg}
          src={roomData?.photos[currentIndex]?.picture || SorryImg}
          alt='Slider'
        />
      </SliderImageWrap>
      {currentIndex === room?.photos?.length - 1 ||
      currentIndex === 4 ? null : (
        <>
          {isBtnShown && (
            <SliderButton
              direction='right'
              onClick={(e) => {
                e.preventDefault();
                goToNextSlide();
              }}
            >
              <ArrowRightIcon />
            </SliderButton>
          )}
        </>
      )}
    </SliderContainer>
  );
};

export default MainRoomSlider;
