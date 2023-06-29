import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  Arrow,
  ArrowRight,
  SliderContainer,
  SliderWrap,
  SliderWrapper,
  Slide,
  Wrapper,
  SlideIcon,
  SlideName,
} from './CategorySliderStyle';
// import DefaultImg from '../../asset/soon.jpg';
import { CategoryData } from './SampleData';

const CategorySlider = ({ loading }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(CategoryData > 0 && slideIndex - 1);
    } else {
      // setSlideIndex(slideIndex < items.length / 2 && slideIndex + 1);
      setSlideIndex(slideIndex < 1 && slideIndex + 1);
    }
  };

  return (
    <SliderContainer>
      <SliderWrap>
        <Arrow direction='left' onClick={() => handleClick('left')}>
          <ArrowLeftIcon />
        </Arrow>
        <SliderWrapper slideIndex={slideIndex}>
          {CategoryData?.map((category, index) => (
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
                >
                  <SlideIcon>{category?.icon}</SlideIcon>
                  <SlideName>{category?.name}</SlideName>
                </Slide>
              )}
            </>
          ))}
        </SliderWrapper>
        <ArrowRight direction='right' onClick={() => handleClick('right')}>
          <ArrowRightIcon />
        </ArrowRight>
      </SliderWrap>
    </SliderContainer>
  );
};

export default CategorySlider;
