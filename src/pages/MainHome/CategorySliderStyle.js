import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 99%;
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
  background-color: #${(props) => props.bg};
  /* margin: 0 25px; */
  color: ${({ categorypick }) => (categorypick ? '#000' : 'gray')};
  /* border-bottom: ${({ categorypick }) =>
    categorypick ? '3px solid #000' : ''}; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 300px;
  }
`;

export const SlideIcon = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  justify-content: center;
`;

export const SlideName = styled.div`
  font-size: 13px;
  padding-bottom: 5px;
  width: 50px;
  height: 15px;
  display: flex;
  justify-content: center;

  border-bottom: ${({ categorypick }) =>
    categorypick ? '3px solid #000' : ''};
`;
