import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Skeleton } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { allRoomCategories } from '../../redux/slices/categories';

const CategorySlider = ({ loading, visibleItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  // const initFetch = useCallback(() => {
  //   dispatch(allRoomCategories());
  // }, [dispatch]);

  // useEffect(() => {
  //   initFetch();
  // }, [initFetch]);

  useEffect(() => {
    dispatch(allRoomCategories());
  }, []);

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

  console.log('categories', categories);

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
          {categories
            ?.slice(currentIndex, currentIndex + visibleItems)
            .map((category, index) => (
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
            ))}
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
