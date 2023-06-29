import styled from 'styled-components';

export const SliderContainer = styled.div`
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

export const SliderWrap = styled.div`
  /* padding: 50px; */
`;

export const Arrow = styled.div`
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

export const ArrowRight = styled.div`
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

export const SliderWrapper = styled.div`
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

export const Slide = styled.div`
  background-color: #${(props) => props.bg};
  margin: 0 25px;
  color: ${({ categorypick }) => (categorypick ? '#000' : 'gray')};
  border-bottom: ${({ categorypick }) =>
    categorypick ? '3px solid #000' : ''};

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
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;
`;

export const SlideName = styled.div`
  font-size: 13px;
  padding-bottom: 5px;
  width: 50px;
  height: 15px;
  display: flex;
  justify-content: center;

  /* width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 13px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;
