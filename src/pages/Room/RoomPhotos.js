import React from 'react';
import { Skeleton } from '@mui/material';
import { RoomPhotoMain, RoomPhotoSub, PhotoSubCover } from './RoomStyle';
import RoomPhotosSk from './Skeletons/RoomPhotosSk';

const RoomPhotos = ({ roomInfo }) => {
  return (
    <>
      {!roomInfo ? (
        <RoomPhotosSk />
      ) : (
        <>
          <RoomPhotoMain>
            <img src={roomInfo?.photos?.[0]?.picture} alt='' />
          </RoomPhotoMain>
          <RoomPhotoSub>
            {roomInfo?.photos?.slice(1, 5).map((pic) => {
              return (
                <PhotoSubCover key={pic?.pk}>
                  <img src={pic?.picture} alt='' />
                  {/* <span className='subCover'></span> */}
                </PhotoSubCover>
              );
            })}
          </RoomPhotoSub>
        </>
      )}
    </>
  );
};

export default RoomPhotos;
