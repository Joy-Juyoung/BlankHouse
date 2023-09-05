import React, { useEffect } from 'react';
import HostStep1 from './HostStep1';
import {
  BackBtn,
  BecomeBtns,
  BecomeContainer,
  BecomeFooter,
  BecomeFooterWrap,
  BecomeHeader,
  BecomeProgress,
  ButtonsWrapper,
  LogoWrapper,
  NextBtn,
  Progressbar,
} from './StepStyle';
import Logo from '../../../assets/logo-bl.png';
import { useNavigate } from 'react-router-dom';

const BecomeHost = () => {
  const navigate = useNavigate();

  return (
    <BecomeContainer>
      {/* Header Change */}
      <BecomeHeader>
        <LogoWrapper>
          <img src={Logo} alt='' onClick={() => navigate('/')} />
        </LogoWrapper>
        <ButtonsWrapper>
          <button>Questions?</button>
          <button onClick={() => navigate(-1)}>Save & Exit</button>
        </ButtonsWrapper>
      </BecomeHeader>

      {/* main contents step1 */}
      <HostStep1 />

      {/* Progressbar and back/next button */}
      <BecomeFooter>
        <BecomeFooterWrap>
          <BecomeProgress>
            <Progressbar></Progressbar>
            <Progressbar></Progressbar>
            <Progressbar className='last'></Progressbar>
          </BecomeProgress>
          <BecomeBtns>
            <BackBtn>
              <button>Back</button>
            </BackBtn>
            <NextBtn>
              <button>Next</button>
            </NextBtn>
          </BecomeBtns>
        </BecomeFooterWrap>
      </BecomeFooter>
    </BecomeContainer>
  );
};

export default BecomeHost;
