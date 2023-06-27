import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import DefaultImg from '../../asset/soon.jpg';
import MainCategories from './MainCategories';

import { RoomData, CategoryData } from './SampleData';

const Container = styled.div`
  width: 100%;
  /* height: 50vh; */
  display: flex;
  position: relative;
  overflow: hidden;
  /* position: absolute; */

  align-items: center;
  /* justify-content: space-between; */

  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;

const SliderWrap = styled.div`
  /* padding: 50px; */
`;

const Arrow = styled.div`
  width: 60px;
  height: 100%;
  background-color: #fff7f7;
  /* border-radius: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  /* left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'}; */
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const ArrowRight = styled.div`
  /* width: 50px;
  height: 50px; */
  width: 60px;
  height: 100%;
  background-color: #fff7f7;
  /* border-radius: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  /* left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'}; */
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

const Wrapper = styled.div`
  margin: 20px 40px 0 40px;
  width: 100%;
  display: flex;
  transition: all 1s ease;
  /* transform: translateX(${(props) => props.slideIndex * -100}vw); */
  transform: translateX(${(props) => props.slideIndex * -315}px);

  @media screen and (max-width: 1024px) {
    transform: translateX(${(props) => props.slideIndex * -250}px);
  }

  @keyframes scroll {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
`;

const Slide = styled.div`
  background-color: #${(props) => props.bg};
  margin: 0 30px;
  color: ${({ categorypick }) => (categorypick ? '#000' : 'gray')};
  border-bottom: ${({ categorypick }) =>
    categorypick ? '3px solid #000' : ''};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.catName {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    /* margin: 3px 0; */
    font-size: 13px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 300px;
  }
`;

// const Image = styled.img`
//   width: 250px;
//   height: 280px;
//   object-fit: cover;

//   @media screen and (max-width: 1024px) {
//     width: 200px;
//     height: 200px;
//   }
// `;

const CategorySlider = () => {
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
    <Container>
      <SliderWrap>
        <Arrow direction='left' onClick={() => handleClick('left')}>
          <ArrowLeftIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {CategoryData?.map((category, index) => (
            <Slide
              key={index}
              categorypick={category?.name === 'All' ? true : false}
            >
              <div className='catName'>{category?.icon}</div>
              <span>{category?.name}</span>
            </Slide>
          ))}
        </Wrapper>
        <ArrowRight direction='right' onClick={() => handleClick('right')}>
          <ArrowRightIcon />
        </ArrowRight>
      </SliderWrap>
    </Container>
  );
};

export default CategorySlider;
