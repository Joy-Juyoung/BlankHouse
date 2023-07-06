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
} from './RoomSideStyle';
import StarIcon from '@mui/icons-material/Star';
import { Skeleton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FlagIcon from '@mui/icons-material/Flag';
import SubmitButton from '../../components/Buttons/SubmitButton';

const RoomSide = ({ loading, RoomData }) => {
  const [mouseleft, setMouseleft] = useState(0);
  const [mousetop, setMousetop] = useState(0);
  const [hoverStyle, setHoverStyle] = useState({
    mouseleft: 0,
    mousetop: 0,
  });

  const handleMouseMove = (e) => {
    setMouseleft(e.pageX - e.target.offsetLeft);
    setMousetop(e.pageY - e.target.offsetTop);

    // e.target.style.setProperty('--x', mouseleft + 'px');
    // e.target.style.setProperty('--y', mousetop + 'px');

    setHoverStyle({ mouseleft, mousetop });
  };
  console.log(' mouseleft, mousetop', mouseleft, mousetop);

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
                <h2>$560.00</h2>
                <span>night</span>
              </SideTopPrice>
              <SideTopInfo>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span>{RoomData[0].rating}</span>
                <span className='space'>•</span>
                <span>000 Reviews</span>
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
              <SideSelectInput>
                {/* <div> */}
                <SelectInput>
                  <span>GUESTS</span>
                  <div>1 guest</div>
                </SelectInput>
                <ExpandMoreIcon />
                {/* </div> */}
              </SideSelectInput>
            </RoomSideInputField>
            {/* <RoomSideBtn
              onMouseMove={handleMouseMove}
              mouseleft={mouseleft}
              mousetop={mousetop}
              variant='contained'
            > */}
            <SubmitButton />
            {/* <span>Reserve</span>
            </RoomSideBtn> */}
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
