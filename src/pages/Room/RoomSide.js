import React, { useState } from 'react';
import {
  RoomDetailSide,
  RoomDetailSideWrap,
  RoomSideReserve,
  RoomSideReport,
  SideTotal,
  RoomSideTotal,
  SideOutput,
  RoomSideOutput,
  SideDateInput,
  RoomSideInputField,
  SideTopInfo,
  SideTopPrice,
  RoomSideTop,
  DateInput,
  RoomSideText,
  RoomSideInside,
  SideGuestsInput,
  GuestsInput,
  InputLabel,
  DateValue,
} from './RoomSideStyle';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FlagIcon from '@mui/icons-material/Flag';
import SubmitButton from '../../components/Buttons/SubmitButton';
import SideGuestDropdown from './SideGuestDropdown';
import SideDateDropdown from './SideDateDropdown';
import { Link } from 'react-router-dom';

const RoomSide = ({
  loading,
  roomInfo,
  roomReviewInfo,
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  roomId,
}) => {
  const [isGuests, setIsGuests] = useState(false);
  const [isSideCheckIn, setIsSideCheckIn] = useState(false);
  const [isSideCheckOut, setIsSideCheckOut] = useState(false);

  const [isSideDate, setIsSideDate] = useState(false);
  const [guestsNum, setGuestsNum] = useState(1);
  const [infantsNum, setInfantsNum] = useState(0);

  const [reviewsTotal, setReviewsTotal] = useState(
    roomReviewInfo?.total_objects
  );

  let perNight =
    new Date(checkOutDate).getDate() - new Date(checkInDate).getDate();
  let totalPerNight = roomInfo?.price * perNight;
  let taxPerNight = totalPerNight * 0.05;
  let finalTotalPrice = totalPerNight + roomInfo?.cleaning_fee + taxPerNight;

  const handleDate = () => {
    // console.log('checkIn', checkInDate);
    // console.log('checkOut', checkOutDate);
  };

  return (
    <RoomDetailSide>
      <RoomDetailSideWrap>
        <RoomSideReserve>
          <RoomSideInside>
            <RoomSideTop>
              <SideTopPrice>
                <h2>
                  $
                  {roomInfo?.price?.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </h2>
                <span>night</span>
              </SideTopPrice>
              <SideTopInfo>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span>{roomInfo?.rating}</span>
                <span className='coma'>·</span>
                <span className='review'>
                  {roomReviewInfo?.total_objects} Reviews
                </span>
              </SideTopInfo>
            </RoomSideTop>
            <RoomSideInputField>
              <SideDateInput
                onClick={() => {
                  setIsSideDate(!isSideDate);
                }}
              >
                <DateInput
                  className={isSideDate ? 'dropOpen' : 'checkin'}
                  // className={`checkin ${
                  //   isSideCheckIn || isSideCheckOut ? 'dropOpen' : ''
                  // }`}
                  // onClick={() => {
                  //   setIsSideCheckIn(!isSideCheckIn);
                  //   setIsSideCheckOut(false);
                  // }}
                >
                  <InputLabel>CHECK-IN</InputLabel>
                  <DateValue>{checkInDate}</DateValue>
                </DateInput>
                <DateInput className={isSideDate && 'dropOpen'}>
                  <InputLabel>CHECK-OUT</InputLabel>
                  <DateValue>{checkOutDate}</DateValue>
                </DateInput>
              </SideDateInput>

              {isSideDate && (
                <SideDateDropdown
                  setIsSideDate={setIsSideDate}
                  isSideDate={isSideDate}
                  setCheckInDate={setCheckInDate}
                  checkInDate={checkInDate}
                  setCheckOutDate={setCheckOutDate}
                  checkOutDate={checkOutDate}
                  roomInfo={roomInfo}
                />
              )}

              <SideGuestsInput
                onClick={() => setIsGuests(!isGuests)}
                className={isGuests ? 'active' : ''}
              >
                <GuestsInput>
                  <InputLabel>GUESTS</InputLabel>
                  <div>
                    {guestsNum} guests
                    {infantsNum !== 0 && ', ' + infantsNum + ' infants'}
                  </div>
                </GuestsInput>
                <ExpandMoreIcon />
                {isGuests && (
                  <SideGuestDropdown
                    setIsGuests={setIsGuests}
                    guestsNum={guestsNum}
                    setGuestsNum={setGuestsNum}
                    infantsNum={infantsNum}
                    setInfantsNum={setInfantsNum}
                    roomInfo={roomInfo}
                  />
                )}
              </SideGuestsInput>
            </RoomSideInputField>

            {/* <Link to={`/room/${roomId}/payment`}> */}
            <Link
              to={`/room/${roomId}/payment?reviews=${reviewsTotal}&checkin=${checkInDate}&checkout=${checkOutDate}&guest=${guestsNum}&night=${perNight}&total=${totalPerNight}&tax=${taxPerNight}&finalTotal=${finalTotalPrice}`}
            >
              <SubmitButton />
            </Link>

            <RoomSideText>You won't be charged yet</RoomSideText>
            <RoomSideOutput>
              <ul>
                <li>
                  <SideOutput className='outputName'>
                    $
                    {roomInfo?.price?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}{' '}
                    x{' '}
                    {new Date(checkOutDate).getDate() -
                      new Date(checkInDate).getDate()}{' '}
                    nights
                  </SideOutput>
                  <SideOutput>
                    $
                    {totalPerNight?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </SideOutput>
                </li>
                <li>
                  <SideOutput className='outputName'>Cleaning fee</SideOutput>
                  <SideOutput>
                    $
                    {roomInfo?.cleaning_fee?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </SideOutput>
                </li>
                {/* <li>
                  <SideOutput className='outputName'>Service fee</SideOutput>
                  <SideOutput>${roomInfo?.cleaning_fee.toFixed(2)}</SideOutput>
                </li> */}
                <li>
                  <SideOutput className='outputName'>Taxes</SideOutput>
                  <SideOutput>
                    $
                    {taxPerNight?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </SideOutput>
                </li>
              </ul>
            </RoomSideOutput>
            <RoomSideTotal>
              <SideTotal>Total</SideTotal>
              <SideTotal>
                $
                {finalTotalPrice?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </SideTotal>
            </RoomSideTotal>
          </RoomSideInside>
        </RoomSideReserve>
        <RoomSideReport>
          <FlagIcon />
          <span>Report this listing</span>
        </RoomSideReport>
      </RoomDetailSideWrap>
    </RoomDetailSide>
  );
};

export default RoomSide;
