import React, { useEffect } from 'react';
import { StepInWrap, StepInWrapper } from '../StepStyle';
import TestMap from '../../../../assets/images/map_test.png';

const Step1_Location = () => {
  return (
    <StepInWrap>
      <h1>Is the pin in the right spot?</h1>
      <p className='titleSub'>
        Your address is only shared with guests after they’ve made a
        reservation.
      </p>

      <StepInWrapper>
        <div>
          {/* Shoud change img to real location */}
          {/* <img src={TestMap} alt='' /> */}
          location
        </div>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step1_Location;
