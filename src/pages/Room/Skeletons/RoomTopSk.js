import { Skeleton } from '@mui/material';
import React from 'react';
import { RoomTopHeader, RoomTopText } from '../RoomStyle';

const RoomTopSk = () => {
  return (
    <>
      <RoomTopHeader>
        <Skeleton
          variant='rect'
          animation='wave'
          sx={{ width: '300px', height: '30px', borderRadius: '10px' }}
        />
      </RoomTopHeader>
      <RoomTopText>
        <Skeleton
          variant='rect'
          animation='wave'
          sx={{
            width: '450px',
            height: '20px',
            borderRadius: '10px',
            marginTop: '10px',
            marginBottom: '-10px',
          }}
        />
      </RoomTopText>
    </>
  );
};

export default RoomTopSk;
