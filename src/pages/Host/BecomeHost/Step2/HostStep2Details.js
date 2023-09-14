import React, { useEffect, useRef } from 'react';
import {
  StepDetailMain,
  StepDetailMainWrapper,
  WholePageContents,
} from '../StepStyle';
import Step2_Amenity from './Step2_Amenity';
import Step2_Description from './Step2_Description';
import Step2_Photos from './Step2_Photos';
import Step2_Title from './Step2_Title';

const HostStep2Details = ({ stepId }) => {
  return (
    <WholePageContents className='Detail'>
      <StepDetailMain>
        <StepDetailMainWrapper>
          {stepId === 6 && <Step2_Amenity />}
          {stepId === 7 && <Step2_Photos />}
          {stepId === 8 && <Step2_Title />}
          {stepId === 9 && <Step2_Description />}
        </StepDetailMainWrapper>
      </StepDetailMain>
    </WholePageContents>
  );
};

export default HostStep2Details;
