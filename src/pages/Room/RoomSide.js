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

const RoomSide = ({
  loading,
  roomData,
  rooms,
  reviews,
  checkInDate,
  checkOutDate,
}) => {
  const [isGuests, setIsGuests] = useState(false);
  const [guestsNum, setGuestsNum] = useState(1);

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
                <h2>${roomData?.price?.toFixed(2)}</h2>
                <span>night</span>
              </SideTopPrice>
              <SideTopInfo>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span>{roomData?.rating?.toFixed(2)}</span>
                <span className='coma'>·</span>
                <span>{reviews?.length} Reviews</span>
              </SideTopInfo>
            </RoomSideTop>
            <RoomSideInputField>
              <SideDateInput>
                <DateInput className='checkin'>
                  <InputLabel>CHECK-IN</InputLabel>
                  {/* <input
                    type='date'
                    value={checkInDate}
                    onChange={handleDate}
                  /> */}
                  <DateValue>{checkInDate}</DateValue>
                </DateInput>
                <DateInput>
                  <InputLabel>CHECK-OUT</InputLabel>
                  {/* <input
                    type='date'
                    value={checkOutDate}
                    onChange={handleDate}
                  /> */}
                  <DateValue>{checkOutDate}</DateValue>
                </DateInput>
              </SideDateInput>
              <SideGuestsInput
                onClick={() => setIsGuests(!isGuests)}
                className={isGuests ? 'active' : ''}
              >
                <GuestsInput>
                  <InputLabel>GUESTS</InputLabel>
                  <div>{guestsNum} guests</div>
                </GuestsInput>
                <ExpandMoreIcon />
                {isGuests && (
                  <SideGuestDropdown
                    setIsGuests={setIsGuests}
                    guestsNum={guestsNum}
                    setGuestsNum={setGuestsNum}
                  />
                )}
              </SideGuestsInput>
            </RoomSideInputField>

            <SubmitButton />

            <RoomSideText>You won't be charged yet</RoomSideText>
            <RoomSideOutput>
              <ul>
                <li>
                  <SideOutput className='outputName'>
                    $560.00 x 5 nights
                  </SideOutput>
                  <SideOutput>$2,800.00</SideOutput>
                </li>
                <li>
                  <SideOutput className='outputName'>Cleaning fee</SideOutput>
                  <SideOutput>$148.25</SideOutput>
                </li>
                <li>
                  <SideOutput className='outputName'>Service fee</SideOutput>
                  <SideOutput>$315.25</SideOutput>
                </li>
                <li>
                  <SideOutput className='outputName'>Taxes</SideOutput>
                  <SideOutput>$270.48</SideOutput>
                </li>
              </ul>
            </RoomSideOutput>
            <RoomSideTotal>
              <SideTotal>Total</SideTotal>
              <SideTotal>$3,533.98</SideTotal>
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
