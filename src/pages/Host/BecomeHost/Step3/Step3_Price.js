import React, { useEffect, useState } from 'react';
import {
  StepInWrap,
  StepInWrapper,
  StepPrice,
  StepPriceTotalBox,
  StepPriceEarnBox,
} from '../StepStyle';

const Step3_Price = () => {
  const initialStepGuestPrice =
    JSON.parse(localStorage.getItem('getPrice')) || 0;

  const initialStepCleaningFee =
    JSON.parse(localStorage.getItem('getCleaningFee')) || 0;

  const initialStepInputPrice =
    JSON.parse(localStorage.getItem('inputPrice')) || 0;

  const [price, setPrice] = useState(initialStepInputPrice);
  const [cleaningFee, setCleaningFee] = useState(initialStepCleaningFee);
  const [serviceFee, setServiceFee] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [hostFee, setHostFee] = useState(0);
  const [totalGuest, setTotalGuest] = useState(initialStepGuestPrice);
  const [totalEarn, setTotalEarn] = useState(0);

  const handlePrice = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  useEffect(() => {
    setPrice(parseFloat(price));
    setCleaningFee(Math.floor(parseFloat(price * 0.15)) || 0);
    setServiceFee(parseFloat(price * 0.15) || 0);
    setTaxes(parseFloat(price * 0.05) || 0);
    setHostFee(parseFloat(price * 0.03) || 0);
    setTotalGuest(
      Math.floor(parseFloat(price + cleaningFee + serviceFee + taxes)) || 0
    );
    setTotalEarn(parseFloat(price + cleaningFee - hostFee) || 0);
  }, [price, serviceFee, taxes, hostFee]);

  useEffect(() => {
    localStorage.setItem('inputPrice', JSON.stringify(price));
    localStorage.setItem('getCleaningFee', JSON.stringify(cleaningFee));
    localStorage.setItem('getPrice', JSON.stringify(totalGuest));
  }, [price, totalGuest]);

  return (
    <StepInWrap>
      <h1>Now, set your price</h1>
      <p className='titleSub'>You can change it anytime.</p>

      <StepInWrapper>
        <StepPrice>
          $
          <input
            type='number'
            value={price}
            name='price'
            id='price'
            onChange={handlePrice}
          />
        </StepPrice>
        <StepPriceTotalBox>
          <p>
            <span>Base price</span>
            <span>${price?.toFixed(2)}CAD</span>
          </p>
          <p>
            <span>Cleaning fee</span>
            <span>${cleaningFee?.toFixed(2)}CAD</span>
          </p>
          <p>
            <span>Guest service fee</span>
            <span>${serviceFee?.toFixed(2)}CAD</span>
          </p>
          <p>
            <span>Taxes</span>
            <span>${taxes?.toFixed(2)}CAD</span>
          </p>
          <p className='total'>
            <span>Guest price</span>
            <span>${totalGuest?.toFixed(2)}CAD</span>
          </p>
        </StepPriceTotalBox>
        <StepPriceTotalBox>
          <p>
            <span>Base price</span>
            <span>${price?.toFixed(2)}CAD</span>
          </p>
          <p>
            <span>Cleaning fee</span>
            <span>${cleaningFee?.toFixed(2)}CAD</span>
          </p>
          <p>
            <span>Host service fee</span>
            <span>-${hostFee?.toFixed(2)}CAD</span>
          </p>
          <p className='total'>
            <span>You earn</span>
            <span>${totalEarn?.toFixed(2)}CAD</span>
          </p>
        </StepPriceTotalBox>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step3_Price;
