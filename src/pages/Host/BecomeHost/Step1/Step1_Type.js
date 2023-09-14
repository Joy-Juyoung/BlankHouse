import React, { useEffect } from 'react';
import {
  StepTypeWrapper,
  StepTypes,
  StepTypeList,
  StepTypeInfo,
  StepInWrap,
} from '../StepStyle';
import HouseIcon from '@mui/icons-material/House';

const TypeOfPlace = [
  {
    id: 1,
    title: 'An entire place',
    description: 'Guests have the whole place to themselves.',
  },
  {
    id: 2,
    title: 'A room',
    description:
      'Guests have their own room in a home, plus access to shared spaces.',
  },
  {
    id: 3,
    title: 'A shared room',
    description:
      'Guests sleep in a room or common area that may be shared with you or others.',
  },
];

const Step1_Type = () => {
  return (
    <StepInWrap>
      <h1>What type of place will guests have?</h1>
      <StepTypeWrapper>
        {TypeOfPlace?.map((typ) => (
          <StepTypes key={typ?.id}>
            <StepTypeList>
              <StepTypeInfo>
                <p>{typ?.title}</p>
                <span>{typ?.description}</span>
              </StepTypeInfo>
              <span>
                <HouseIcon sx={{ fontSize: 38 }} />
              </span>
            </StepTypeList>
          </StepTypes>
        ))}
      </StepTypeWrapper>
    </StepInWrap>
  );
};

export default Step1_Type;
