import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  SliderContainer,
  SliderButton,
  SliderWrap,
  SliderWrapper,
  Slide,
  SlideName,
} from './MainCategorySliderStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategory,
  getAllRoomCategoryAsync,
} from '../../redux/slices/categorySlice';

const MainCategorySlider = ({ loading, visibleItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = useSelector(getAllCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoomCategoryAsync());
  }, [dispatch]);

  const totalItems = categories?.length;
  const sliderWidth = `${100 / visibleItems}%`;

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
      if (
        prevIndex === totalItems - visibleItems ||
        totalItems <= visibleItems
      ) {
        // return 0;
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };

  // console.log('categories', categories);

  return (
    <SliderContainer>
      <SliderWrap>
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
        <SliderWrapper>
          <Slide>
            {categories
              ?.slice(currentIndex, currentIndex + visibleItems)
              .map((category, index) => (
                <SlideName key={index} style={{ width: sliderWidth }}>
                  <span>{category?.name}</span>
                </SlideName>
              ))}
          </Slide>
        </SliderWrapper>
        <SliderButton
          direction='right'
          onClick={(e) => {
            e.preventDefault();
            goToNextSlide();
          }}
          disabled={
            currentIndex === totalItems - visibleItems ||
            totalItems <= visibleItems
          }
        >
          <ArrowRightIcon />
        </SliderButton>
      </SliderWrap>
    </SliderContainer>
  );
};

export default MainCategorySlider;
