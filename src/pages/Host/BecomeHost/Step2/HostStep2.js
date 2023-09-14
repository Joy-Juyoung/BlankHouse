import React, { useEffect, useRef } from 'react';
import {
  BorderBlur,
  StepMain,
  StepMainWrapper,
  StepVideo,
  StepVideoContents,
  WholePageContents,
} from '../StepStyle';
import Step2Video from '../../../../assets/videos/houseDrowing.mp4';

const HostStep2 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <WholePageContents>
      <StepMain>
        <StepMainWrapper>
          <span>Step 2</span>
          <h1>Make your place stand out</h1>
          <p>
            In this step, you’ll add some of the amenities your place offers,
            plus 5 or more photos. Then, you’ll create a title and description.
          </p>
        </StepMainWrapper>
        <StepMainWrapper>
          <StepVideo>
            <StepVideoContents
              autoPlay
              loop
              muted
              ref={videoRef}
              src={Step2Video}
              type='video/mp4'
              className='step2'
            />
          </StepVideo>
        </StepMainWrapper>
      </StepMain>
    </WholePageContents>
  );
};

export default HostStep2;
