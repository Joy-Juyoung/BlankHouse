import React, { useEffect, useRef } from 'react';
import Step1_Category from './Step1_Category';
import Step1_Location from './Step1_Location';
import Step1_Num from './Step1_Num';
import Step1_Type from './Step1_Type';

import {
  StepDetailMain,
  StepDetailMainWrapper,
  WholePageContents,
} from '../StepStyle';

const HostStep1Details = ({ stepId }) => {
  return (
    <WholePageContents className='Detail'>
      <StepDetailMain>
        <StepDetailMainWrapper>
          {stepId === 1 && <Step1_Category />}
          {stepId === 2 && <Step1_Type />}
          {stepId === 3 && <Step1_Location />}
          {stepId === 4 && <Step1_Num />}
        </StepDetailMainWrapper>
      </StepDetailMain>
    </WholePageContents>
  );
};

export default HostStep1Details;
