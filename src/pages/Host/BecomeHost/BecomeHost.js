import React, { useEffect, useState } from 'react';
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
  ProgressActive,
  Progressbar,
  ProgressBarWrapper,
  ProgressBar,
  ProgressBarFill,
  ProgressBarLabel,
} from './StepStyle';
import Logo from '../../../assets/logo-bl.png';
import { useNavigate, useParams } from 'react-router-dom';
import HostStep1 from './Step1/HostStep1';
import HostStep1Details from './Step1/HostStep1Details';
import HostStep2 from './Step2/HostStep2';
import HostStep2Details from './Step2/HostStep2Details';
import HostStep3 from './Step3/HostStep3';
import HostStep3Details from './Step3/HostStep3Details';

const BecomeHost = () => {
  const navigate = useNavigate();
  // const { stepId } = useParams();
  const [stepId, setStepId] = useState(0);

  const progressPercentage1 =
    stepId >= 0 && stepId < 5 ? (stepId / 5) * 100 : 0;
  const progressPercentage2 =
    stepId >= 5 && stepId < 10 ? ((stepId - 5) / 5) * 100 : 0;
  const progressPercentage3 =
    stepId >= 10 && stepId < 15 ? ((stepId - 10) / 5) * 100 : 0;

  // 각 progress bar의 활성화 여부를 상태로 관리
  const [activeProgressBar1, setActiveProgressBar1] = useState(false);
  const [activeProgressBar2, setActiveProgressBar2] = useState(false);
  const [activeProgressBar3, setActiveProgressBar3] = useState(false);

  // progress bar가 활성화되면 색상을 변경
  useEffect(() => {
    if (progressPercentage1 === 100) {
      setActiveProgressBar1(true);
    }
    if (progressPercentage2 === 100) {
      setActiveProgressBar2(true);
    }
    if (progressPercentage3 === 100) {
      setActiveProgressBar3(true);
    }
  }, [progressPercentage1, progressPercentage2, progressPercentage3]);

  const handleNextStep = () => {
    setStepId(stepId + 1);
    // navigate(`/host/become/step1?step=${stepId}`);
  };

  const handleBackStep = () => {
    if (stepId > 0) {
      setStepId(stepId - 1);
      // navigate(`/host/become/step1?step=${stepId}`);
    } else {
      setStepId(0);
      // navigate(-1);
    }
  };

  useEffect(() => {
    if (stepId < 5) {
      navigate('/host/become?step1');
    }
    if (stepId >= 5) {
      navigate('/host/become?step2');
    }
    if (stepId >= 10) {
      navigate('/host/become?step3');
    }
  }, [stepId]);
  console.log('stepId', stepId);

  return (
    <BecomeContainer>
      <BecomeHeader>
        <LogoWrapper>
          <img src={Logo} alt='' onClick={() => navigate('/')} />
        </LogoWrapper>
        <ButtonsWrapper>
          <button>Questions?</button>
          <button onClick={() => navigate(-1)}>Save & Exit</button>
        </ButtonsWrapper>
      </BecomeHeader>

      {stepId === 0 && <HostStep1 />}
      {stepId > 0 && stepId < 5 && <HostStep1Details stepId={stepId} />}
      {stepId === 5 && <HostStep2 />}
      {stepId > 5 && stepId < 10 && <HostStep2Details stepId={stepId} />}
      {stepId === 10 && <HostStep3 />}
      {stepId > 10 && stepId < 15 && <HostStep3Details stepId={stepId} />}

      <BecomeFooter>
        <BecomeFooterWrap>
          <BecomeProgress>
            <ProgressBarWrapper>
              <ProgressBar>
                <ProgressBarFill
                  style={{
                    width: stepId >= 5 ? '100%' : `${progressPercentage1}%`,
                  }}
                  className={stepId >= 0 && stepId < 5 && 'active'}
                />
              </ProgressBar>
            </ProgressBarWrapper>
            <ProgressBarWrapper>
              <ProgressBar>
                <ProgressBarFill
                  style={{
                    width: stepId >= 10 ? '100%' : `${progressPercentage2}%`,
                  }}
                  className={stepId >= 5 && stepId < 10 && 'active'}
                />
              </ProgressBar>
            </ProgressBarWrapper>
            <ProgressBarWrapper className='last'>
              <ProgressBar>
                <ProgressBarFill
                  style={{
                    width: stepId >= 15 ? '100%' : `${progressPercentage3}%`,
                  }}
                  className={stepId >= 10 && stepId < 15 && 'active'}
                />
              </ProgressBar>
            </ProgressBarWrapper>
          </BecomeProgress>
          <BecomeBtns>
            <BackBtn>
              <button onClick={handleBackStep}>Back</button>
            </BackBtn>
            <NextBtn>
              <button onClick={handleNextStep}>Next</button>
            </NextBtn>
          </BecomeBtns>
        </BecomeFooterWrap>
      </BecomeFooter>
    </BecomeContainer>
  );
};

export default BecomeHost;
