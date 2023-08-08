import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 75%; */
  /* object-fit: cover; */
`;

export const SliderWrap = styled.div`
  /* padding: 50px; */
  /* width: 95%; */
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
  /* opacity: 0.5; */

  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '0'};
  right: ${(props) => props.direction === 'right' && '0'};
  z-index: 2;
`;

export const SliderWrapper = styled.div`
  margin: 0 30px;
  width: 100%;
  display: flex;
  transition: all 1s ease;
`;

export const Slide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SlideIcon = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  justify-content: center;
`;

export const SlideName = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #f4f2f2;

  color: #666666;
  border: 1px solid #999999;
  border-radius: 30px;
  margin: 0 10px;
  padding: 7px 10px;

  span {
        font-weight: 400 ;
        font-size: 14px ;
        line-height: 18px ;
  }
`;
