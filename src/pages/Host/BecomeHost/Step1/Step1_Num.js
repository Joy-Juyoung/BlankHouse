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

const Step1_Num = () => {
  const initialStepGuests = JSON.parse(localStorage.getItem('getGuests')) || 0;
  const initialStepBedroom =
    JSON.parse(localStorage.getItem('getBedroom')) || 0;
  const initialStepBeds = JSON.parse(localStorage.getItem('getBeds')) || 0;
  const initialStepBathrooms =
    JSON.parse(localStorage.getItem('getBathrooms')) || 0;
  const [guestNum, setGuestNum] = useState(initialStepGuests);
  const [bedroomNum, setBedroomNum] = useState(initialStepBedroom);
  const [bedsNum, setBedsNum] = useState(initialStepBeds);
  const [bathroomNum, setBathroomNum] = useState(initialStepBathrooms);

  // console.log('guestNum', guestNum);

  useEffect(() => {
    localStorage.setItem('getGuests', JSON.stringify(guestNum));
    localStorage.setItem('getBedroom', JSON.stringify(bedroomNum));
    localStorage.setItem('getBeds', JSON.stringify(bedsNum));
    localStorage.setItem('getBathrooms', JSON.stringify(bathroomNum));
  }, [guestNum, bedroomNum, bedsNum, bathroomNum]);

  return (
    <StepInWrap>
      <h1>Share some basics about your place</h1>
      <p className='titleSub'>You'll add more details later, like bed types.</p>
      <StepInWrapper>
        <StepNumList>
          <StepNumTitle>Guests</StepNumTitle>
          <StemNumber>
            <GuestsCount>
              <button
                style={{ opacity: guestNum === 0 ? '0.25' : '1' }}
                onClick={() => guestNum !== 0 && setGuestNum(guestNum - 1)}
              >
                <RemoveIcon sx={{ fontSize: '18px' }} />
              </button>
              <span>{guestNum}</span>
              <button onClick={() => setGuestNum(guestNum + 1)}>
                <AddIcon sx={{ fontSize: '18px' }} />
              </button>
            </GuestsCount>
          </StemNumber>
        </StepNumList>

        <StepNumList>
          <StepNumTitle>Bedrooms</StepNumTitle>
          <StemNumber>
            <GuestsCount>
              <button
                style={{ opacity: bedroomNum === 0 ? '0.25' : '1' }}
                onClick={() =>
                  bedroomNum !== 0 && setBedroomNum(bedroomNum - 1)
                }
              >
                <RemoveIcon sx={{ fontSize: '18px' }} />
              </button>
              <span>{bedroomNum}</span>
              <button onClick={() => setBedroomNum(bedroomNum + 1)}>
                <AddIcon sx={{ fontSize: '18px' }} />
              </button>
            </GuestsCount>
          </StemNumber>
        </StepNumList>

        <StepNumList>
          <StepNumTitle>Beds</StepNumTitle>
          <StemNumber>
            <GuestsCount>
              <button
                style={{ opacity: bedsNum === 0 ? '0.25' : '1' }}
                onClick={() => bedsNum !== 0 && setBedsNum(bedsNum - 1)}
              >
                <RemoveIcon sx={{ fontSize: '18px' }} />
              </button>
              <span>{bedsNum}</span>
              <button onClick={() => setBedsNum(bedsNum + 1)}>
                <AddIcon sx={{ fontSize: '18px' }} />
              </button>
            </GuestsCount>
          </StemNumber>
        </StepNumList>

        <StepNumList>
          <StepNumTitle>Bethrooms</StepNumTitle>
          <StemNumber>
            <GuestsCount>
              <button
                style={{ opacity: bathroomNum === 0 ? '0.25' : '1' }}
                onClick={() =>
                  bathroomNum !== 0 && setBathroomNum(bathroomNum - 1)
                }
              >
                <RemoveIcon sx={{ fontSize: '18px' }} />
              </button>
              <span>{bathroomNum}</span>
              <button onClick={() => setBathroomNum(bathroomNum + 1)}>
                <AddIcon sx={{ fontSize: '18px' }} />
              </button>
            </GuestsCount>
          </StemNumber>
        </StepNumList>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step1_Num;
