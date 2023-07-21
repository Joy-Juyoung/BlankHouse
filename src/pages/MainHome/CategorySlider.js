import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Skeleton } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import {
  SliderContainer,
  SliderButton,
  SliderWrap,
  SliderWrapper,
  Slide,
  SlideName,
} from './CategorySliderStyle';
import { useDispatch, useSelector } from 'react-redux';
import { allRoomCategories } from '../../redux/slices/categories';

const CategorySlider = ({ loading, visibleItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(allRoomCategories());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

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
      if (prevIndex === totalItems - visibleItems) {
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
          {categories
            ?.slice(currentIndex, currentIndex + visibleItems)
            .map((category, index) => (
              <Slide key={index} style={{ width: sliderWidth }}>
                {/* <SlideIcon>{category?.icon}</SlideIcon> */}
                <SlideName>{category?.name}</SlideName>
              </Slide>
            ))}
        </SliderWrapper>
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
      </SliderWrap>
    </SliderContainer>
  );
};

export default CategorySlider;
