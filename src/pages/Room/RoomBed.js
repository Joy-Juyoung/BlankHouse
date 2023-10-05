import React from 'react';
import { RoomDetailsSections, SleepWrap, SleepWrapper } from './RoomStyle';
import BedIcon from '@mui/icons-material/Bed';

const RoomBed = ({ roomInfo }) => {
  return (
    <RoomDetailsSections>
      <h2>Where you'll sleep</h2>
      <SleepWrap>
        {Array.from({ length: roomInfo?.number_of_room }, (_, index) => (
          <SleepWrapper key={index}>
            <BedIcon />
            <p>{index + 1} Bedroom</p>
            {/* <span>{roomInfo?.number_of_bed} bed</span> */}
            <span>1 bed</span>
          </SleepWrapper>
        ))}
      </SleepWrap>
    </RoomDetailsSections>
  );
};

export default RoomBed;
