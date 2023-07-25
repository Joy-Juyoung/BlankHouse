import React, { useEffect, useState } from 'react';
import { RoomEachPhoto } from './ExperienceStyle';
import "./ExSliderStyle.css";
import { ExperiencesData } from './ExperiencesData';

const ExSlider = ({ experiences,isMouseHover, setIsMouseHover }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = ExperiencesData.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 2500;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      console.log("next");
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("prev");
    };
    
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);
  
    return (
      <div className="slider"
        onMouseOver={()=>{setIsMouseHover(true)}}
        onMouseOut={()=>{setIsMouseHover(false)}}
      >
        {isMouseHover === true ? (
          <>
            {ExperiencesData.map((slide, index) => {
              return (    
                <div
                  className={index === currentSlide ? "slide current" : "slide"}
                  key={index}
                >    
                  {index === currentSlide && (                
                      <RoomEachPhoto src={slide.photo} alt="slide" className="image" />                  
                  )}    
                </div>
              );
            })}
          </>
        ):(
          <RoomEachPhoto src={experiences.photo} alt="slide" className="image" />
        )}

      </div>
    );
  };
  
  export default ExSlider;