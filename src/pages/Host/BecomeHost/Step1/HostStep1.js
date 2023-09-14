import React, { useEffect, useRef } from 'react';
import {
  BorderBlur,
  StepMain,
  StepMainWrapper,
  StepVideo,
  StepVideoContents,
  WholePageContents,
} from '../StepStyle';
import Step1Video from '../../../../assets/videos/building.mp4';

const HostStep1 = () => {
  // Create a ref to the video element
  const videoRef = useRef(null);

  // Set the playback speed when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust this value for your desired speed
    }
  }, []);

  return (
    <WholePageContents>
      <StepMain>
        <StepMainWrapper>
          <span>Step 1</span>
          <h1>Tell us about your place</h1>
          <p>
            In this step, we'll ask you which type of property you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </StepMainWrapper>
        <StepMainWrapper>
          <StepVideo>
            <StepVideoContents
              autoPlay
              loop
              muted
              ref={videoRef}
              src={Step1Video}
              type='video/mp4'
            />
          </StepVideo>
        </StepMainWrapper>
      </StepMain>
    </WholePageContents>
  );
};

export default HostStep1;
