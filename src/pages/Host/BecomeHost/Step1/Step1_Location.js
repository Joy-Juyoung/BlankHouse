import React, { useEffect, useState } from 'react';
import {
  StepInWrap,
  StepInWrapper,
  StepTypeList,
  StepTypes,
  StepTypesAddress,
} from '../StepStyle';
import TestMap from '../../../../assets/images/map_test.png';

const Step1_Location = () => {
  const initialStepAddress =
    JSON.parse(localStorage.getItem('getAddress')) || null;
  const initialStepCity = JSON.parse(localStorage.getItem('getCity')) || null;
  const initialStepCountry =
    JSON.parse(localStorage.getItem('getCountry')) || null;
  const [stepAddress, setStepAddress] = useState(initialStepAddress);
  const [stepCity, setStepCity] = useState(initialStepCity);
  const [stepCountry, setStepCountry] = useState(initialStepCountry);

  const handleStepValue = (e) => {
    if (e.target.id === 'address') {
      setStepAddress(e.target.value);
    }
    if (e.target.id === 'city') {
      setStepCity(e.target.value);
    }
    if (e.target.id === 'country') {
      setStepCountry(e.target.value);
    }
  };

  useEffect(() => {
    localStorage.setItem('getAddress', JSON.stringify(stepAddress));
    localStorage.setItem('getCity', JSON.stringify(stepCity));
    localStorage.setItem('getCountry', JSON.stringify(stepCountry));
  }, [stepAddress, stepCity, stepCountry]);

  console.log('stepAddress', stepAddress);
  console.log('stepCity', stepCity);
  console.log('stepCountry', stepCountry);

  return (
    <StepInWrap>
      <h1>Is the pin in the right spot?</h1>
      <p className='titleSub'>
        Your address is only shared with guests after they’ve made a
        reservation.
      </p>

      <StepInWrapper>
        {/* <StepTypes> */}
        <StepTypesAddress>
          <label for='address'>Address</label>
          <input
            type='text'
            id='address'
            value={stepAddress}
            onChange={handleStepValue}
          />
        </StepTypesAddress>
        <StepTypesAddress>
          <label for='city'>City</label>
          <input
            type='text'
            id='city'
            value={stepCity}
            onChange={handleStepValue}
          />
        </StepTypesAddress>
        <StepTypesAddress>
          <label for='country'>Country</label>
          <input
            type='text'
            id='country'
            value={stepCountry}
            onChange={handleStepValue}
          />
        </StepTypesAddress>
        {/* </StepTypes> */}
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step1_Location;
