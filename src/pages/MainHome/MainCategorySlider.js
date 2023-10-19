import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffect, useState } from 'react';
import {
  SliderContainer,
  SliderButton,
  SliderWrap,
  SliderWrapper,
  Slide,
} from './MainCategorySliderStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategory,
  getAllRoomCategoryAsync,
} from '../../redux/slices/categorySlice';
import MainCategorySk from './Skeletons/MainCategorySk';

const MainCategorySlider = ({ loading, visibleItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [goRight, setGoRight] = useState(false);
  const [goLeft, setGoLeft] = useState(false);

  const categories = useSelector(getAllCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoomCategoryAsync());
  }, [dispatch]);

  const totalItems = categories?.length;
  const sliderWidth = `${100 / visibleItems}%`;

  const goToPrevSlide = () => {
    setGoLeft(true);
    setTimeout(() => {
      setGoLeft(false);
    }, 500);

    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const goToNextSlide = () => {
    setGoRight(true);
    setTimeout(() => {
      setGoRight(false);
    }, 500);

    setCurrentIndex((prevIndex) => {
      if (
        prevIndex === totalItems - visibleItems ||
        totalItems <= visibleItems
      ) {
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
        {/* <SliderWrapper visibleItems={visibleItems} currentIndex={currentIndex}> */}
        <SliderWrapper>
          <Slide style={{ right: goRight ? '0' : '-200px' }}>
            {categories
              ?.slice(currentIndex, currentIndex + visibleItems)
              ?.map((category) => (
                <MainCategorySk
                  category={category}
                  sliderWidth={sliderWidth}
                  loading={loading}
                  key={category?.pk}
                  goRight={goRight}
                  goLeft={goLeft}
                />
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
