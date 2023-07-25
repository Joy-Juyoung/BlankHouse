import React from 'react';
import { Skeleton } from '@mui/material';
import { RoomPhotoMain, RoomPhotoSub, PhotoSubCover } from './RoomStyle';
import RoomPhotosSk from './Skeletons/RoomPhotosSk';

const RoomPhotos = ({ roomData }) => {
  return (
    <>
      {!roomData ? (
        <RoomPhotosSk />
      ) : (
        <>
          <RoomPhotoMain>
            <img src={roomData?.photos[0]?.picture} alt='' />
          </RoomPhotoMain>
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
        </>
      )}
    </>
  );
};

export default RoomPhotos;
