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

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const MainPhotoSlider = ({ room, slideIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    // setCurrentIndex((prevIndex) =>
    //   prevIndex === 0 ? room.photo.length - 1 : prevIndex - 1
    // );
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const goToNextSlide = () => {
    // setCurrentIndex((prevIndex) =>
    //   prevIndex === room.photo.length - 1 ? 0 : prevIndex + 1
    // );
    setCurrentIndex((prevIndex) => {
      if (prevIndex === room.photo.length - 1) {
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };

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
      <SliderImage src={room.photo[currentIndex]} alt='Slider' />
      {currentIndex === room.photo.length - 1 ? null : (
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
