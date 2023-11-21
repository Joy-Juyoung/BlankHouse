import React from 'react';
import { RoomDetailsSections, SleepWrap, SleepWrapper } from './RoomStyle';
import BedIcon from '@mui/icons-material/Bed';
import { Skeleton } from '@mui/material';

const RoomBed = ({ roomInfo, loading }) => {
  return (
    <RoomDetailsSections>
      <h2>Where you'll sleep</h2>
      <SleepWrap>
        {loading ? (
          <Skeleton
            variant='rect'
            animation='wave'
            sx={{
              width: '120px',
              height: '120px',
              borderRadius: '10px',
              margin: '20px 0',
              padding: '10px 0 10px 30px',
            }}
          />
        ) : (
          <>
            {Array.from({ length: roomInfo?.number_of_room }, (_, index) => (
              <SleepWrapper key={index}>
                <BedIcon />
                <p>{index + 1} Bedroom</p>
                {/* <span>{roomInfo?.number_of_bed} bed</span> */}
                <span>1 bed</span>
              </SleepWrapper>
            ))}
          </>
        )}
      </SleepWrap>
    </RoomDetailsSections>
  );
};

export default RoomBed;
