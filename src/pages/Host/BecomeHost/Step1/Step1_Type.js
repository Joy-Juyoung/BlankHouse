import React, { useEffect, useState } from 'react';
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
    type: 'entire_place',
  },
  {
    id: 2,
    title: 'A room',
    description:
      'Guests have their own room in a home, plus access to shared spaces.',
    type: 'private_room',
  },
  {
    id: 3,
    title: 'A shared room',
    description:
      'Guests sleep in a room or common area that may be shared with you or others.',
    type: 'shared_room',
  },
];

const Step1_Type = () => {
  const initialStepType = JSON.parse(localStorage.getItem('getType')) || null;
  const [stepType, setStepType] = useState(initialStepType);

  const handleStepValue = (value) => {
    setStepType(value);
  };

  useEffect(() => {
    localStorage.setItem('getType', JSON.stringify(stepType));
  }, [stepType]);

  console.log('stepType', stepType);

  return (
    <StepInWrap>
      <h1>What type of place will guests have?</h1>
      <StepTypeWrapper>
        {TypeOfPlace?.map((typ) => (
          <StepTypes
            key={typ?.id}
            onClick={() => handleStepValue(typ?.type)}
            className={stepType === typ?.type ? 'active' : ''}
          >
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
