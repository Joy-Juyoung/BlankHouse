import React, { useEffect, useState } from 'react';
import {
  StemNumber,
  StepInWrap,
  StepInWrapper,
  StepNumList,
  StepNumTitle,
} from '../StepStyle';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { GuestsCount } from '../../../Room/RoomSideStyle';

const NumList = ['Guests', 'Bedrooms', 'Beds', 'Bathrooms'];

const Step1_Num = () => {
  const [guestNum, setGuestNum] = useState(0);
  const [childrenNum, setChildrenNum] = useState(0);
  const [infantsNum, setInfantsNum] = useState(0);
  const [petsNum, setPetsNum] = useState(0);

  // console.log('count', count);
  // useEffect(() => {
  //   setGuestNum(guestsNum);
  // }, []);

  // useEffect(() => {
  //   setGuestsNum(guestNum + childrenNum + infantsNum + petsNum);
  // }, [guestNum, childrenNum, infantsNum, petsNum]);

  return (
    <StepInWrap>
      <h1>Share some basics about your place</h1>
      <p className='titleSub'>You'll add more details later, like bed types.</p>
      <StepInWrapper>
        {NumList.map((num, index) => (
          <StepNumList key={index}>
            <StepNumTitle>{num}</StepNumTitle>
            <StemNumber>
              <GuestsCount>
                <button
                  name='guests'
                  style={{ opacity: guestNum === 0 ? '0.25' : '1' }}
                  onClick={() => guestNum !== 0 && setGuestNum(guestNum - 1)}
                >
                  <RemoveIcon sx={{ fontSize: '18px' }} />
                </button>
                <span>{guestNum}</span>
                <button name='guests' onClick={() => setGuestNum(guestNum + 1)}>
                  <AddIcon sx={{ fontSize: '18px' }} />
                </button>
              </GuestsCount>
            </StemNumber>
          </StepNumList>
        ))}
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step1_Num;
