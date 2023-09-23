import React, { useEffect, useState } from 'react';
import {
  StepInWrap,
  StepInWrapper,
  StepDiscountBoxWrap,
  StepDiscountBox,
  StepDiscountWrapper,
} from '../StepStyle';

const Step3_Discount = () => {
  return (
    <StepInWrap>
      <h1>Add discounts</h1>
      <p className='titleSub'>
        Help your place stand out to get booked faster and earn your first
        reviews.
      </p>

      <StepInWrapper>
        <StepDiscountBox>
          <StepDiscountBoxWrap>
            <StepDiscountWrapper>
              <p className='amount'>10%</p>
            </StepDiscountWrapper>
            <StepDiscountWrapper>
              <p className='text'>
                <span>Weekly discount</span>
                <span className='textSub'>For stays of 7 nights or more</span>
              </p>
            </StepDiscountWrapper>
          </StepDiscountBoxWrap>
          <StepDiscountWrapper>
            <input type='checkbox' />
          </StepDiscountWrapper>
        </StepDiscountBox>
        <StepDiscountBox>
          <StepDiscountBoxWrap>
            <StepDiscountWrapper>
              <p className='amount'>15%</p>
            </StepDiscountWrapper>
            <StepDiscountWrapper>
              <p className='text'>
                <span>Monthly discount</span>
                <span className='textSub'>For stays of 28 nights or more</span>
              </p>
            </StepDiscountWrapper>
          </StepDiscountBoxWrap>
          <StepDiscountWrapper>
            <input type='checkbox' />
          </StepDiscountWrapper>
        </StepDiscountBox>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step3_Discount;
