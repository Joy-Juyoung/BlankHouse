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
import { useDispatch } from 'react-redux';
import { listingRoomAsync } from '../../../redux/slices/hostSlice';
import { ToastContainer, toast } from 'react-toastify';

const BecomeHost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [stepId, setStepId] = useState(0);
  const [stepValue, setStepValue] = useState();

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
  };

  const handleBackStep = () => {
    if (stepId > 0) {
      setStepId(stepId - 1);
    } else {
      setStepId(0);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem('stepId', stepId);
  // }, [stepId]);

  useEffect(() => {
    localStorage.setItem('stepId', stepId);
    switch (stepId) {
      case 1:
        navigate('/host/become?step1&category');
        break;
      case 2:
        navigate('/host/become?step1&type');
        break;
      case 3:
        navigate('/host/become?step1&address');
        break;
      case 4:
        navigate('/host/become?step1&num');
        break;
      case 5:
        navigate('/host/become?step2');
        break;
      case 6:
        navigate('/host/become?step2&amenity');
        break;
      case 7:
        navigate('/host/become?step2&title');
        break;
      case 8:
        navigate('/host/become?step2&description');
        break;
      case 9:
        navigate('/host/become?step3');
        break;
      case 10:
        navigate('/host/become?step3&price');
        break;
      case 11:
        navigate('/host/become?step3&pet');
        break;
      case 12:
        navigate('/host/become?step3&review');
        break;

      default:
        navigate('/host/become?step1');
    }
  }, [stepId]);
  // console.log('stepId', stepId);

  // console.log('stepValue', stepValue);

  const handleListing = (e) => {
    e.preventDefault();
    dispatch(
      listingRoomAsync({
        category_id: JSON.parse(localStorage.getItem('getCategory')),
        house_type: JSON.parse(localStorage.getItem('getType')),
        address: JSON.parse(localStorage.getItem('getAddress')),
        city: JSON.parse(localStorage.getItem('getCity')),
        country: JSON.parse(localStorage.getItem('getCountry')),
        maximum_guests: JSON.parse(localStorage.getItem('getGuests')),
        number_of_room: JSON.parse(localStorage.getItem('getBedroom')),
        number_of_bed: JSON.parse(localStorage.getItem('getBeds')),
        number_of_toilet: JSON.parse(localStorage.getItem('getBathrooms')),
        amenities_id: [JSON.parse(localStorage.getItem('getAmenity'))],
        name: JSON.parse(localStorage.getItem('getTitle')),
        description: JSON.parse(localStorage.getItem('getDesctiprion')),
        price: JSON.parse(localStorage.getItem('getPrice')),
        cleaning_fee: JSON.parse(localStorage.getItem('getCleaningFee')),
        pet_friendly: JSON.parse(localStorage.getItem('getPet')),
      })
    )
      .then(() => {
        toast.success('Listing success.');
        navigate('/host/listing');
        localStorage.removeItem('stepId');

        localStorage.removeItem('getCategory');
        localStorage.removeItem('getType');
        localStorage.removeItem('getAddress');
        localStorage.removeItem('getCity');
        localStorage.removeItem('getCountry');
        localStorage.removeItem('getGuests');
        localStorage.removeItem('getBedroom');
        localStorage.removeItem('getBeds');
        localStorage.removeItem('getBathrooms');
        localStorage.removeItem('getAmenity');
        localStorage.removeItem('getTitle');
        localStorage.removeItem('getDesctiprion');
        localStorage.removeItem('getPrice');
        localStorage.removeItem('getCleaningFee');
        localStorage.removeItem('getPet');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Listing failed.');
      });
  };

  return (
    <BecomeContainer>
      <BecomeHeader>
        <LogoWrapper>
          <img src={Logo} alt='' onClick={() => navigate('/')} />
        </LogoWrapper>
        <ButtonsWrapper>
          {/* <button>Questions?</button> */}
          <button onClick={() => navigate('/host/listing')}>Save & Exit</button>
        </ButtonsWrapper>
      </BecomeHeader>

      {stepId === 0 && <HostStep1 />}
      {stepId > 0 && stepId < 5 && (
        <HostStep1Details
          stepId={stepId}
          stepValue={stepValue}
          setStepValue={setStepValue}
        />
      )}
      {stepId === 5 && <HostStep2 />}
      {stepId > 5 && stepId < 9 && (
        <HostStep2Details
          stepId={stepId}
          stepValue={stepValue}
          setStepValue={setStepValue}
        />
      )}
      {stepId === 9 && <HostStep3 />}
      {stepId > 9 && stepId < 13 && (
        <HostStep3Details
          stepId={stepId}
          stepValue={stepValue}
          setStepValue={setStepValue}
        />
      )}

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
                    width: stepId >= 9 ? '100%' : `${progressPercentage2}%`,
                  }}
                  className={stepId >= 5 && stepId < 9 && 'active'}
                />
              </ProgressBar>
            </ProgressBarWrapper>
            <ProgressBarWrapper className='last'>
              <ProgressBar>
                <ProgressBarFill
                  style={{
                    width: stepId >= 9 ? '100%' : `${progressPercentage3}%`,
                  }}
                  className={stepId >= 9 && stepId < 13 && 'active'}
                />
              </ProgressBar>
            </ProgressBarWrapper>
          </BecomeProgress>
          <BecomeBtns>
            <BackBtn>
              <button onClick={handleBackStep}>Back</button>
            </BackBtn>
            <NextBtn>
              {stepId === 12 ? (
                <button onClick={handleListing}> Add to Listing</button>
              ) : (
                <button onClick={handleNextStep}>Next</button>
              )}
            </NextBtn>
          </BecomeBtns>
        </BecomeFooterWrap>
      </BecomeFooter>
    </BecomeContainer>
  );
};

export default BecomeHost;
