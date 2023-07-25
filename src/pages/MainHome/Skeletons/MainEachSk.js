import React from 'react';
import {
  RoomDesc,
  RoomEachDetails,
  RoomPrice,
  RoomsEach,
  RoomTitle,
} from '../MainStyle';
import { Skeleton } from '@mui/material';

const RoomEachSk = () => {
  return (
    <RoomsEach>
      <Skeleton
        variant='rect'
        animation='wave'
        sx={{ width: '100%', height: '75%', borderRadius: '10px' }}
      />
      <RoomEachDetails>
        <RoomTitle>
          <Skeleton
            variant='rect'
            animation='wave'
            sx={{
              width: '50%',
              height: '16px',
              borderRadius: '5px',
              marginTop: '5px',
            }}
          />
        </RoomTitle>
        <RoomDesc>
          <Skeleton
            variant='rect'
            animation='wave'
            sx={{
              width: '50%',
              height: '14px',
              borderRadius: '5px',
              marginTop: '5px',
            }}
          />
        </RoomDesc>
        <RoomPrice>
          <Skeleton
            variant='rect'
            animation='wave'
            sx={{
              width: '50%',
              height: '16px',
              borderRadius: '5px',
              marginTop: '5px',
              marginLeft: '0px !important',
            }}
          />
        </RoomPrice>
      </RoomEachDetails>
    </RoomsEach>
  );
};

export default RoomEachSk;
