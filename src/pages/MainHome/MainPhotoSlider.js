// import React from 'react';
// import { useState, useRef, useEffect } from 'react';
// import styled from 'styled-components';
// import { useParams } from 'react-router';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// // import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
// import DefaultImg from '../../assets/images/sorry.jpg';
// import { RoomEachPhoto } from './MainStyle';

// const ImageSlide = styled.div`
//   position: relative;
//   width: 350px;
//   /* width: 100%; */
//   margin: auto;
//   padding-bottom: 30px;
// `;

// const SlideBox = styled.div`
//   position: relative;
//   width: 100%;
//   margin: auto;
//   overflow-x: hidden;
// `;
// const SlideList = styled.div`
//   width: 2800px;
//   /* width: 100%; */
//   overflow: hidden;
// `;

// const SlideContent = styled.div`
//   display: table;
//   float: left;
//   width: 350px;
//   height: 300px;

//   img {
//     /* height: 70%; */
//   }
// `;

// const ButtonPrev = styled.button`
//   position: absolute;
//   top: 150px;
//   border: none;
//   padding-top: 5px;
//   background: none;
//   vertical-align: middle;
//   cursor: pointer;
//   z-index: 4;

//   svg {
//     width: 40px;
//     height: 40px;
//     cursor: pointer;
//   }
// `;

// const ButtonNext = styled.button`
//   position: absolute;
//   top: 150px;
//   padding-top: 5px;
//   background: none;
//   vertical-align: middle;
//   right: 5px;
//   border: none;
//   transition: all ease 0.5s;
//   cursor: pointer;
//   z-index: 4;

//   svg {
//     width: 40px;
//     height: 40px;
//     cursor: pointer;
//   }
// `;

// const MainPhotoSlider = ({ slideIndex }) => {
//   // const [slideIndex, setSlideIndex] = useState([]);
//   const [slideInd, setSlideInd] = useState(0);
//   const slideRef = useRef(null);
//   const IMG_WIDTH = 350;
//   const slideRange = slideInd * IMG_WIDTH;

//   const TOTAL_SLIDES = slideIndex?.photo?.length - 1;

//   useEffect(() => {
//     slideRef.current.style.transition = 'all 0.5s ease-in-out';
//     slideRef.current.style.transform = `translateX(-${slideRange}px)`;
//   }, [slideInd]);

//   const moveToNextSlide = () => {
//     if (slideInd >= TOTAL_SLIDES) {
//       // 더 이상 넘어갈 슬라이드가 없으면
//       setSlideInd(0); // 1번째 사진으로 넘어갑니다.
//       // return;  // 클릭이 작동하지 않습니다.
//     } else {
//       setSlideInd(slideInd + 1);
//     }
//   };
//   // Prev 버튼 클릭 시
//   const moveToPrevSlide = () => {
//     if (slideInd === 0) {
//       setSlideInd(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
//       // return;  // 클릭이 작동하지 않습니다.
//     } else {
//       setSlideInd(slideInd - 1);
//     }
//   };

//   console.log('slideIndex', slideIndex?.photo);

//   return (
//     <ImageSlide>
//       <SlideBox>
//         <>
//           <SlideList ref={slideRef}>
//             {slideIndex?.photo?.map((image, no) => {
//               return (
//                 <SlideContent key={no}>
//                   {/* <picture> */}
//                   <RoomEachPhoto src={image} alt='' />
//                   {/* </picture> */}
//                 </SlideContent>
//               );
//             })}
//           </SlideList>
//           <ButtonPrev
//             onClick={(e) => {
//               e.preventDefault();
//               moveToPrevSlide();
//             }}
//           >
//             <ArrowCircleLeftIcon fontSize='large' />
//           </ButtonPrev>
//           <ButtonNext
//             onClick={(e) => {
//               e.preventDefault();
//               moveToNextSlide();
//             }}
//           >
//             <ArrowCircleRightIcon fontSize='large' />
//           </ButtonNext>
//         </>
//         {/* )}
//           </> */}
//         {/* )} */}
//       </SlideBox>
//     </ImageSlide>
//   );
// };

// export default MainPhotoSlider;
