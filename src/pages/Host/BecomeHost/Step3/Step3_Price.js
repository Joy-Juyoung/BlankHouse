import React, { useEffect, useState } from 'react';
import {
  StepInWrap,
  StepInWrapper,
  StepPrice,
  StepPriceTotalBox,
  StepPriceEarnBox,
} from '../StepStyle';

const Step3_Price = () => {
  const [price, setPrice] = useState();
  const [serviceFee, setServiceFee] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [hostFee, setHostFee] = useState(0);
  const [totalGuest, setTotalGuest] = useState(0);
  const [totalEarn, setTotalEarn] = useState(0);

  const handlePrice = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  useEffect(() => {
    setPrice(parseFloat(price) || 0);
    setServiceFee(parseFloat(price * 0.15) || 0);
    setTaxes(parseFloat(price * 0.05) || 0);
    setHostFee(parseFloat(price * 0.03) || 0);
    setTotalGuest(parseFloat(price + serviceFee + taxes) || 0);
    setTotalEarn(parseFloat(price - hostFee) || 0);
  }, [price, serviceFee, taxes, hostFee]);

  return (
    <StepInWrap>
      <h1>Now, set your price</h1>
      <p className='titleSub'>You can change it anytime.</p>

      <StepInWrapper>
        <StepPrice>
          $
          <input
            type='number'
            value={price || 0}
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
