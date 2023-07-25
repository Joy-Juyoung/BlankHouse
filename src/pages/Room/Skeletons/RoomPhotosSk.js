import React from 'react';
import { Skeleton } from '@mui/material';
import { RoomPhotoMain, RoomPhotoSub } from '../RoomStyle';

const RoomPhotosSk = () => {
  return (
    <>
      <RoomPhotoMain>
        <Skeleton
          variant='rect'
          animation='wave'
          sx={{ width: '100%', height: '536px', borderRadius: '10px' }}
        />
      </RoomPhotoMain>
      <RoomPhotoSub>
        <Skeleton
          variant='rect'
          animation='wave'
          sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
        />
        <Skeleton
          variant='rect'
          animation='wave'
          sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
        />
        <Skeleton
          variant='rect'
          animation='wave'
          sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
        />
        <Skeleton
          variant='rect'
          animation='wave'
          sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
        />
      </RoomPhotoSub>
    </>
  );
};

export default RoomPhotosSk;
