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
  RoomSideBtn,
  SideSelectInput,
  SideDateInput,
  RoomSideInputField,
  SideTopInfo,
  SideTopPrice,
  RoomSideTop,
  DateInput,
  SelectInput,
  RoomSideText,
  RoomSideInside,
  SideGuestInput,
  SideGuestsInput,
  GuestsDropdown,
  GuestsInput,
  DropBackDrop,
  GuestsCount,
  GuestsNotice,
  GuestsCloseBtn,
} from './RoomSideStyle';
import StarIcon from '@mui/icons-material/Star';
import { Skeleton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FlagIcon from '@mui/icons-material/Flag';
import SubmitButton from '../../components/Buttons/SubmitButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import GuestDropdown from './GuestDropdown';

const RoomSide = ({ loading, roomData, rooms, reviews }) => {
  const [isGuests, setIsGuests] = useState(false);
  const [guestsNum, setGuestsNum] = useState(1);

  return (
    <RoomDetailSide>
      <RoomDetailSideWrap>
        {/* <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '555px', borderRadius: '10px' }}
                />
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{
                    width: '50%',
                    height: '25px',
                    margin: '20px auto',
                    borderRadius: '10px',
                  }}
                /> */}

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
                  <span>CHECK-IN</span>
                  <input type='date' />
                </DateInput>
                <DateInput>
                  <span>CHECK-OUT</span>
                  <input type='date' />
                </DateInput>
              </SideDateInput>
              <SideGuestsInput
                onClick={() => setIsGuests(!isGuests)}
                className={isGuests ? 'active' : ''}
              >
                <GuestsInput>
                  <span>GUESTS</span>
                  <div>{guestsNum} guests</div>
                </GuestsInput>
                <ExpandMoreIcon />
                {isGuests && (
                  <GuestDropdown
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
