import React, { useEffect } from 'react';
import { StepInWrap, StepInWrapper } from '../StepStyle';

const Step3_Price = () => {
  return (
    <StepInWrap>
      <h1>Now, set your price</h1>
      <p className='titleSub'>You can change it anytime.</p>

      <StepInWrapper>
        <input type='number' />
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step3_Price;
