import React, { useEffect, useRef } from 'react';
import {
  BorderBlur,
  StepMain,
  StepMainWrapper,
  StepVideo,
  StepVideoContents,
  WholePageContents,
} from '../StepStyle';
import Step3Video from '../../../../assets/videos/home1.mp4';

const HostStep3 = () => {
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
          <span>Step 3</span>
          <h1>Finish up and publish</h1>
          <p>
            Finally, you’ll choose if you'd like to start with an experienced
            guest, then you'll set your nightly price. Answer a few quick
            questions and publish when you're ready.
          </p>
        </StepMainWrapper>
        <StepMainWrapper>
          <StepVideo>
            <StepVideoContents
              autoPlay
              loop
              muted
              ref={videoRef}
              src={Step3Video}
              type='video/mp4'
              className='step2'
            />
          </StepVideo>
        </StepMainWrapper>
      </StepMain>
    </WholePageContents>
  );
};

export default HostStep3;
