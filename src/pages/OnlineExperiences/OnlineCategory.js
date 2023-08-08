import React, { useState,useCallback, useEffect } from 'react'
import { BtnDetail, 
    DetailInfo, 
    ExFilterBtn, 
    FilterBtnWrap, 
    FilterWrap, 
    MenuBtn, 
    MenuDetail, 
    MenuLine, 
    MenuMid, 
    MenuMidList, 
    MidListBtn, 
    MidListDetail,  
    RightArrowBtns,  
    TopMenuList, 
    } from './OnlineExpStyle';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { allExCategories } from '../../redux/slices/categories';
import {   SliderContainer,
    SliderButton,
    SliderWrap,
    SliderWrapper,
    Slide,
    SlideName, } from './OnlineCategoryStyle';


const OnlineCategory = ({visibleItems}) => {
    const [modalShown, toggleModal] = useState(false);
    const categories = useSelector((state) => state.categories[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();
  
    const initFetch = useCallback(() => {
      dispatch(allExCategories());
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
  )
}

export default OnlineCategory;