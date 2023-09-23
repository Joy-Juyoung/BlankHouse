import React, { useEffect, useState } from 'react';
import {
  StepCheck,
  StepInWrap,
  StepInWrapper,
  StepCheckWrapper,
  StepDiscountWrapper,
  StepCheckPreview,
  PreviewInfo,
  PreviewTitle,
  PreviewPrice,
  StepNextWrapper,
} from '../StepStyle';
import StarIcon from '@mui/icons-material/Star';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import Test from '../../../../assets/images/soon.jpg';

const Step3_Check = () => {
  return (
    <StepInWrap>
      <h1>Review your listing</h1>
      <p className='titleSub'>
        Here's what we'll show to guests. Make sure everything looks good.
      </p>

      <StepCheck>
        <StepCheckWrapper>
          <StepCheckPreview>
            <img src={Test} alt='preview' />
            <PreviewInfo>
              <PreviewTitle>
                <span>Title</span>
                <span>
                  New
                  <StarIcon sx={{ fontSize: 14 }} />
                </span>
              </PreviewTitle>
              <PreviewPrice>
                <p>$173</p>
                <span>night</span>
              </PreviewPrice>
            </PreviewInfo>
          </StepCheckPreview>
        </StepCheckWrapper>
        <StepCheckWrapper>
          <h2>What's next?</h2>
          <StepNextWrapper>
            <AssignmentTurnedInIcon sx={{ fontSize: 35 }} />
            <p>
              <span>Confirm a few details and publish</span>
              <span className='textSub'>
                We’ll let you know if you need to verify your identity or
                register with the local government.
              </span>
            </p>
          </StepNextWrapper>
          <StepNextWrapper>
            <CalendarMonthIcon sx={{ fontSize: 35 }} />
            <p>
              <span>Set up your calendar</span>
              <span className='textSub'>
                Choose which dates your listing is available. It will be visible
                24 hours after you publish.
              </span>
            </p>
          </StepNextWrapper>
          <StepNextWrapper>
            <RoomPreferencesIcon sx={{ fontSize: 35 }} />
            <p>
              <span>Adjust your settings</span>
              <span className='textSub'>
                Set house rules, select a cancellation policy, choose how guests
                book, and more.
              </span>
            </p>
          </StepNextWrapper>
        </StepCheckWrapper>
      </StepCheck>
    </StepInWrap>
  );
};

export default Step3_Check;
