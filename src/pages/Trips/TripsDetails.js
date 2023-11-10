import React, { useEffect, useRef, useState } from 'react';
import {
  TripContainer,
  TripDate,
  TripDateWrapper,
  TripDetailsWrapper,
  TripInfo,
  TripInfoLine,
  TripInfoMore,
  TripInfoText,
  TripPhotoCover,
  TripPhotos,
  TripWrap,
} from './TripsStyle';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PrintIcon from '@mui/icons-material/Print';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PersonIcon from '@mui/icons-material/Person';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import TestPhoto from '../../assets/images/soon.jpg';
import ReactToPrint from 'react-to-print';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import ShowSamllModal from '../../components/Show/ShowSmallModal';

const TripsDetails = ({ bookingInfo }) => {
  // console.log('book', book);
  let printRef = useRef();
  const [modalNoServiceShown, toggleNoServiceModal] = useState(false);

  return (
    <TripContainer ref={printRef}>
      <TripWrap>
        <TripPhotos>
          <img src={bookingInfo?.room?.photos[0]?.picture} alt='' />
          <TripPhotoCover>
            <h2>You stay at HostName's place</h2>
            <span>
              <KeyboardArrowRightIcon />
            </span>
          </TripPhotoCover>
        </TripPhotos>
        <TripDetailsWrapper>
          <TripInfo className='first check'>
            <TripDate>
              <TripDateWrapper className='left'>
                <span>Check-in</span>
                <p>{bookingInfo?.check_in}</p>
                <span className='time'>3:00p.m.</span>
              </TripDateWrapper>
              <TripDateWrapper>
                <span>Check-out</span>
                <p>{bookingInfo?.check_out}</p>
                <span className='time'>12:00p.m.</span>
              </TripDateWrapper>
            </TripDate>
          </TripInfo>
          <TripInfo className='link'>
            <TripInfoLine>
              <QuestionAnswerIcon sx={{ fontSize: 35 }} />
              <TripInfoText>
                <p>Message your Host</p>
                <span>{bookingInfo?.room?.owner?.username}</span>
              </TripInfoText>
            </TripInfoLine>
            <NavigateNextIcon
              onClick={() => toggleNoServiceModal(!modalNoServiceShown)}
            />
          </TripInfo>

          {/*  */}
          <ShowSamllModal
            toggleNoServiceModal={toggleNoServiceModal}
            modalNoServiceShown={modalNoServiceShown}
          />

          <TripInfo className='link'>
            <TripInfoLine>
              <HomeIcon sx={{ fontSize: 35 }} />
              <TripInfoText>
                <p>Your Place</p>
                <span>
                  {bookingInfo?.room?.address}, {bookingInfo?.room?.city},{' '}
                  {bookingInfo?.room?.country}
                </span>
              </TripInfoText>
            </TripInfoLine>
            <NavigateNextIcon
              onClick={() =>
                window.open(`/room/${bookingInfo?.room?.pk}`, '_blank')
              }
            />
          </TripInfo>
        </TripDetailsWrapper>

        <TripDetailsWrapper>
          <h2>Reservation details</h2>
          <TripInfo className='first'>
            <TripInfoText>
              <p>Who’s coming</p>
              <span>{bookingInfo?.guests} guests</span>
            </TripInfoText>
            <PeopleIcon sx={{ fontSize: 45 }} />
          </TripInfo>
          <TripInfo>
            <TripInfoText>
              <p>Cancellation policy</p>
              <span>
                Free cancellation until 12pm three days before the check-in
                date.
              </span>
            </TripInfoText>
          </TripInfo>
          <TripInfo className='showInfo'>
            <ReactToPrint
              content={() => printRef.current}
              trigger={() => (
                <TripInfoMore className='showInfo'>
                  <PrintIcon />
                  <span>Print details</span>
                  <NavigateNextIcon />
                </TripInfoMore>
              )}
            />
          </TripInfo>
        </TripDetailsWrapper>

        <TripDetailsWrapper>
          <h2>Rules and instructions</h2>
          <TripInfo className='first'>
            <TripInfoText>
              <p>House rules</p>
              <span>4 guests maximum Pets allowed No parties or events</span>
              <button>Show more</button>
            </TripInfoText>
          </TripInfo>
        </TripDetailsWrapper>

        <TripDetailsWrapper>
          <h2>Hosted by</h2>
          <TripInfo className='first'>
            <TripInfoLine>
              <PersonIcon />
              <TripInfoText>
                <p>{bookingInfo?.room?.owner?.username}</p>
                <button>Show more</button>
              </TripInfoText>
            </TripInfoLine>
          </TripInfo>
        </TripDetailsWrapper>

        <TripDetailsWrapper>
          <h2>Payment info</h2>
          <TripInfo className='first'>
            <TripInfoText className='cost'>
              <p>Total cost</p>
              <span>
                $
                {bookingInfo?.total_cost?.toLocaleString('en-US', {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                })}
              </span>
            </TripInfoText>
          </TripInfo>
        </TripDetailsWrapper>
      </TripWrap>
    </TripContainer>
  );
};

export default TripsDetails;
