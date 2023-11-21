import React, { useEffect, useRef } from 'react';
import {
  StepDetailMain,
  StepDetailMainWrapper,
  WholePageContents,
} from '../StepStyle';
import Step3_Price from './Step3_Price';
import Step3_Option from './Step3_Option';
import Step3_Discount from './Step3_Discount';
import Step3_Check from './Step3_Check';

const HostStep3Details = ({ stepId }) => {
  return (
    <WholePageContents>
      <StepDetailMain>
        <StepDetailMainWrapper>
          {stepId === 10 && <Step3_Price />}
          {/* {stepId === 11 && <Step3_Discount />} */}
          {stepId === 11 && <Step3_Option />}
          {stepId === 12 && <Step3_Check />}
        </StepDetailMainWrapper>
      </StepDetailMain>
    </WholePageContents>
  );
};

export default HostStep3Details;
