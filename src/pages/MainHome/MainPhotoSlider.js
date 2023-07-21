import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  width: 100%;
  height: 75%;
  /* object-fit: cover; */
`;

const SliderButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: auto;
  border-radius: 50%;
  opacity: 0.5;

  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  z-index: 2;
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

const MainPhotoSlider = ({ room }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // console.log('translateValue', translateValue);

  return (
    <SliderContainer>
      {currentIndex === 0 ? null : (
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
      <SliderImageWrap>
        <SliderImage
          src={room?.photos[currentIndex]?.picture}
          alt='Slider'
          // translateValue={translateValue}
        />
      </SliderImageWrap>
      {currentIndex === room?.photos?.length - 1 ||
      currentIndex === 4 ? null : (
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
    </SliderContainer>
  );
};

export default MainPhotoSlider;
