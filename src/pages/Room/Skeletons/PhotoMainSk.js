import React from 'react';
import { Skeleton } from '@mui/material';
import { RoomPhotoMain, RoomPhotoSub } from '../RoomStyle';

const PhotoMainSk = ({ roomData }) => {
  return (
    <>
      {!roomData ? (
        <RoomPhotoMain>
          <Skeleton
            variant='rect'
            animation='wave'
            sx={{ width: '100%', height: '536px', borderRadius: '10px' }}
          />
        </RoomPhotoMain>
      ) : (
        <RoomPhotoMain>
          <img src={roomData?.photos[0]?.picture} alt='' />
        </RoomPhotoMain>
      )}
    </>
  );
};

export default PhotoMainSk;
