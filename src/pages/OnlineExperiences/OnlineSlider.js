import React, { useEffect, useState } from 'react';
import { RoomEachPhoto } from './OnlineExpStyle';
import { ExperiencesData } from '../Experiences/ExperiencesData';


const OnlineSlider = ({ experience,isMouseHover, setIsMouseHover,exIndex }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = ExperiencesData.length;
  
    // const autoScroll = true;
    // let slideInterval;
    // let intervalTime = 2500;
  
    // const nextSlide = () => {
    //   setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    //   console.log("next");
    // };
  
    // const prevSlide = () => {
    //   setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    //   console.log("prev");
    // };
    
    // function auto() {
    //   slideInterval = setInterval(nextSlide, intervalTime);
    // }
  
    // useEffect(() => {
    //   setCurrentSlide(0);
    // }, []);
  
    // useEffect(() => {
    //   if (autoScroll) {
    //     auto();
    //   }
    //   return () => clearInterval(slideInterval);
    // }, [currentSlide]);
  
    return (
      <div className="slider"
        onMouseOver={()=>{setIsMouseHover(true)}}
        onMouseOut={()=>{setIsMouseHover(false)}}
      >
                {/* {isMouseHover === true ? (
                  <div
                    className={exIndex === currentSlide ? "slide current" : "slide"}
     
                  >    
                    {exIndex === currentSlide && (                
                        <RoomEachPhoto src={experience?.photos[0]?.picture} alt="slide" className="image" />                  
                    )}    
                  </div>
                ):( */}
                  <RoomEachPhoto src={experience?.photos[0]?.picture} alt="slide" className="image" />
                {/* )} */}

      </div>
    );
  };
  
  export default OnlineSlider;