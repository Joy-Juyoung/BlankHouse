import React, { useEffect, useState } from 'react';
import {
  StepInWrap,
  StepInWrapper,
  StepPetBox,
  StepPetBoxWrap,
  StepPetWrapper,
} from '../StepStyle';

const Step3_Option = () => {
  const initialStepPet = JSON.parse(localStorage.getItem('getPet')) || false;
  const [isPetOk, setIsPetOk] = useState(initialStepPet);

  // Function to handle the checkbox change
  const handleCheckboxChange = (event) => {
    setIsPetOk(event.target.checked);
  };

  useEffect(() => {
    // Store the updated value in localStorage when isPetOk changes
    localStorage.setItem('getPet', JSON.stringify(isPetOk));
  }, [isPetOk]);

  return (
    <StepInWrap>
      <h1>Pet Friendly</h1>
      <p className='titleSub'>
        You can set up whether pets are allowed in or out.
      </p>

      <StepInWrapper>
        <StepPetBox>
          <StepPetBoxWrap>
            <StepPetWrapper>
              <p className='text'>
                <span>Is this place a pet-friendly space?</span>
              </p>
            </StepPetWrapper>
          </StepPetBoxWrap>
          <StepPetWrapper>
            {!isPetOk ? (
              <label htmlFor='select'>No</label>
            ) : (
              <label htmlFor='select'>Yes</label>
            )}
            <input
              type='checkbox'
              id='select'
              checked={isPetOk}
              onChange={handleCheckboxChange}
            />
          </StepPetWrapper>
        </StepPetBox>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step3_Option;
