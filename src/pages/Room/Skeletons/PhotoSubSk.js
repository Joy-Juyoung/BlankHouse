import React from 'react';
import { Skeleton } from '@mui/material';
import { PhotoCover, PhotoSubCover, RoomPhotoSub } from '../RoomStyle';

const PhotoSubSk = ({ roomData }) => {
  return (
    <>
      {!roomData ? (
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
      ) : (
        <RoomPhotoSub>
          {roomData?.photos?.slice(1, 5).map((pic) => {
            return (
              <PhotoSubCover key={pic?.pk}>
                <img src={pic?.picture} alt='' />
                {/* <span className='subCover'></span> */}
              </PhotoSubCover>
            );
          })}
        </RoomPhotoSub>
      )}
    </>
  );
};

export default PhotoSubSk;
