import React, { useEffect, useRef } from 'react';
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

const TripsDetails = ({ book, bookingInfo }) => {
  console.log('bookingInfo', bookingInfo);
  let printRef = useRef();

  // const today = new Date();
  // const prevThreeDays = new Date(today.setDate(today.getDate() - 3));

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
                <span className='time'>checkin time</span>
              </TripDateWrapper>
              <TripDateWrapper>
                <span>Check-out</span>
                <p>{bookingInfo?.check_out}</p>
                <span className='time'>checkout time</span>
              </TripDateWrapper>
            </TripDate>
          </TripInfo>
          <TripInfo>
            <TripInfoLine>
              <QuestionAnswerIcon sx={{ fontSize: 35 }} />
              <TripInfoText>
                <p>Message your Host</p>
                <span>{bookingInfo?.room?.owner?.username}</span>
              </TripInfoText>
            </TripInfoLine>
          </TripInfo>
          <TripInfo>
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
          {/* <TripInfo>
            <TripInfoText>
              <p>Confirmation code</p>
              <span>HM9TEP3Z8D</span>
            </TripInfoText>
          </TripInfo> */}
          <TripInfo>
            <TripInfoText>
              <p>Cancellation policy</p>
              {/* need */}
              <span>
                Free cancellation until 12 p.m. three days before the check-in
                date.
              </span>
              <button>Read more</button>
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
            {/* <TripInfoMore className='showInfo'>
              <PrintIcon />
              <span>Print details</span>
              <NavigateNextIcon />
            </TripInfoMore> */}
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
                {/* <span>Host rating</span> */}
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
          {/* <TripInfo>
            <TripInfoMore>
              <ReceiptIcon />
              <span>Get receipt</span>
            </TripInfoMore>
            <NavigateNextIcon />
          </TripInfo> */}
        </TripDetailsWrapper>

        <TripDetailsWrapper>
          <h2>Get support anytime</h2>
          <TripInfo className='first'>
            <TripInfoText>
              <span>
                If you need help, we’re available 24/7 from anywhere in the
                world.
              </span>
            </TripInfoText>
          </TripInfo>
          <TripInfo>
            <TripInfoMore>
              <HelpCenterIcon />
              <span>Help Centre</span>
            </TripInfoMore>
            <NavigateNextIcon />
          </TripInfo>
        </TripDetailsWrapper>
      </TripWrap>
    </TripContainer>
  );
};

export default TripsDetails;
