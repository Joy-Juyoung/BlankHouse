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
import { Skeleton } from '@mui/material';

const RoomSide = ({
  loading,
  roomInfo,
  roomReviewInfo,
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  roomId,
  roomReviewAll,
  daysDifference,
}) => {
  const [isGuests, setIsGuests] = useState(false);
  const [isSideCheckIn, setIsSideCheckIn] = useState(false);
  const [isSideCheckOut, setIsSideCheckOut] = useState(false);

  const [isSideDate, setIsSideDate] = useState(false);
  const [guestsNum, setGuestsNum] = useState(1);
  const [infantsNum, setInfantsNum] = useState(0);
  const reviewsTotal = roomReviewAll?.length;

  // console.log('reviewsTotal', roomReviewAll?.length);
  // let perNight =
  //   new Date(checkOutDate).getTime() - new Date(checkInDate).getTime();
  // let daysDifference = Math.ceil(perNight / (1000 * 60 * 60 * 24));

  let totalPerNight = roomInfo?.price * daysDifference;
  let taxPerNight = totalPerNight * 0.05;
  let finalTotalPrice = totalPerNight + roomInfo?.cleaning_fee + taxPerNight;

  return (
    <RoomDetailSide>
      <RoomDetailSideWrap>
        <RoomSideReserve>
          <RoomSideInside>
            <RoomSideTop>
              <SideTopPrice>
                {loading ? (
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    sx={{
                      width: '98px',
                      height: '27px',
                      borderRadius: '10%',
                    }}
                  />
                ) : (
                  <h2>
                    $
                    {roomInfo?.price?.toLocaleString('en-US', {
                      style: 'decimal',
                      minimumFractionDigits: 2,
                    })}
                  </h2>
                )}
                <span>night</span>
              </SideTopPrice>
              <SideTopInfo>
                <StarIcon sx={{ fontSize: '16px' }} />
                {loading ? (
                  <span>
                    <Skeleton
                      variant='rect'
                      animation='wave'
                      sx={{
                        width: '24px',
                        height: '16px',
                        borderRadius: '10%',
                      }}
                    />
                  </span>
                ) : (
                  <span>
                    {roomInfo?.rating?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                )}
                <span className='coma'>·</span>
                {loading ? (
                  <span className='review'>
                    <Skeleton
                      variant='rect'
                      animation='wave'
                      sx={{
                        width: '63px',
                        height: '16px',
                        borderRadius: '10%',
                      }}
                    />
                  </span>
                ) : (
                  <span className='review'>
                    {roomReviewAll?.length || '00'} Reviews
                  </span>
                )}
              </SideTopInfo>
            </RoomSideTop>
            <RoomSideInputField>
              <SideDateInput
                onClick={() => {
                  setIsSideDate(!isSideDate);
                }}
              >
                <DateInput className={isSideDate ? 'dropOpen' : 'checkin'}>
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
                  daysDifference={daysDifference}
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

            {/* guestsNum > 0 && */}
            <Link
              to={
                guestsNum > 0 &&
                `/room/${roomId}/payment?reviews=${reviewsTotal}&checkin=${checkInDate}&checkout=${checkOutDate}&guest=${guestsNum}&night=${daysDifference}&total=${totalPerNight.toLocaleString(
                  'en-US',
                  {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                  }
                )}&tax=${taxPerNight.toLocaleString('en-US', {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                })}&finalTotal=${finalTotalPrice.toLocaleString('en-US', {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                })}`
              }
            >
              <SubmitButton />
            </Link>

            <RoomSideText>You won't be charged yet</RoomSideText>
            <RoomSideOutput>
              <ul>
                <li>
                  <SideOutput className='outputName'>
                    $
                    {loading
                      ? '0.00'
                      : roomInfo?.price?.toLocaleString('en-US', {
                          style: 'decimal',
                          minimumFractionDigits: 2,
                        })}{' '}
                    x {daysDifference} nights
                  </SideOutput>
                  <SideOutput>
                    $
                    {loading
                      ? '0.00'
                      : totalPerNight?.toLocaleString('en-US', {
                          style: 'decimal',
                          minimumFractionDigits: 2,
                        })}
                  </SideOutput>
                </li>
                <li>
                  <SideOutput className='outputName'>Cleaning fee</SideOutput>
                  <SideOutput>
                    $
                    {loading
                      ? '0.00'
                      : roomInfo?.cleaning_fee?.toLocaleString('en-US', {
                          style: 'decimal',
                          minimumFractionDigits: 2,
                        })}
                  </SideOutput>
                </li>
                <li>
                  <SideOutput className='outputName'>Taxes</SideOutput>
                  <SideOutput>
                    $
                    {loading
                      ? '0.00'
                      : taxPerNight?.toLocaleString('en-US', {
                          style: 'decimal',
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
                {loading
                  ? '0.00'
                  : finalTotalPrice?.toLocaleString('en-US', {
                      style: 'decimal',
                      minimumFractionDigits: 2,
                    }) || '0.0'}
              </SideTotal>
            </RoomSideTotal>
          </RoomSideInside>
        </RoomSideReserve>
      </RoomDetailSideWrap>
    </RoomDetailSide>
  );
};

export default RoomSide;
