import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SliderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const SliderButton = styled.button`
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

  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '0'};
  right: ${(props) => props.direction === 'right' && '0'};
  z-index: 2;
`;

export const SliderWrapper = styled.div`
  margin: 0 30px;
  /* margin: 0; */
  width: 100%;
  display: flex;
  /* transform: translateX(
    ${(props) => `-${props.currentIndex * (props.visibleItems / 2)}%`}
  ); */
  /* transform: translateX(${(props) => `-${props.currentIndex * 100}%`}); */
  /* transform: translateX(${(props) => `-${props.currentIndex * 10}px`}); */
  /* transition: transform 0.5s ease; */

  position: relative;
  /* right: 0;
  transition: right 0.5s ease-in-out; */
`;

export const Slide = styled.div`
  /* flex: 0 0 100%; */
  width: 100%;
  display: flex;
  align-items: center;
  /* transition: transform 0.5s ease; */

  /* position: absolute;
  right: 100px;
  transition: right 0.5s ease-in-out; */
`;

export const SlideIcon = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  justify-content: center;
`;

export const SlideBox = styled.div``;

export const SlideName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: #666666;
  border: 1px solid #999999;
  border-radius: 5px;
  margin: 0 10px;
  padding: 5px;

  /* background: #fff7d8 50%; */

  /* &.goRight {
    background: linear-gradient(to right, #fff7d8 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.3s ease-out;
  }

  &.goLeft {
    background: linear-gradient(to left, #fff7d8 50%, white 50%) right;
    background-size: 200%;
    transition: all 0.3s ease-out;
  } */

  span {
    font-size: 13px;
  }

  &.loading {
    border: none;
    padding: 0;
  }
`;
