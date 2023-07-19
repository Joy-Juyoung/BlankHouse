import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  Arrow,
  ArrowRight,
  SliderContainer,
  SliderButton,
  SliderWrap,
  SliderWrapper,
  Slide,
  Wrapper,
  SlideIcon,
  SlideName,
} from './CategorySliderStyle';
import styled from 'styled-components';

const CategorySlider = ({ loading, CategoryData, visibleItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = CategoryData.length;
  const sliderWidth = `${100 / visibleItems}%`;

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        // return totalItems - visibleItems;
        return prevIndex;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === totalItems - visibleItems) {
        // return 0;
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <SliderContainer>
      <SliderWrap>
        {/* {currentIndex === 0 ? null : ( */}
        <SliderButton
          direction='left'
          onClick={(e) => {
            e.preventDefault();
            goToPrevSlide();
          }}
          disabled={currentIndex === 0}
        >
          <ArrowLeftIcon />
        </SliderButton>
        {/* )} */}
        <SliderWrapper>
          {CategoryData?.slice(currentIndex, currentIndex + visibleItems).map(
            (category, index) => (
              <>
                {loading ? (
                  <Slide key={index}>
                    <SlideIcon>
                      <Skeleton
                        variant='circular'
                        width={25}
                        height={25}
                        animation='wave'
                      />
                    </SlideIcon>
                    <SlideName>
                      <Skeleton
                        variant='rect'
                        width={50}
                        height={10}
                        animation='wave'
                        sx={{ margin: '5px 0 -5px 0 ' }}
                      />
                    </SlideName>
                  </Slide>
                ) : (
                  <Slide
                    key={index}
                    categorypick={category?.name === 'All' ? true : false}
                    style={{ width: sliderWidth }}
                  >
                    <SlideIcon>{category?.icon}</SlideIcon>
                    <SlideName
                      categorypick={category?.name === 'All' ? true : false}
                    >
                      {category?.name}
                    </SlideName>
                  </Slide>
                )}
              </>
            )
          )}
        </SliderWrapper>
        {/* {currentIndex === totalItems - visibleItems ? null : ( */}
        <SliderButton
          direction='right'
          onClick={(e) => {
            e.preventDefault();
            goToNextSlide();
          }}
          disabled={currentIndex === totalItems - visibleItems}
        >
          <ArrowRightIcon />
        </SliderButton>
        {/* )} */}
      </SliderWrap>
    </SliderContainer>
  );
};

export default CategorySlider;
