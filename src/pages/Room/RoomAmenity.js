import React from 'react';
import { PlaceOffers, PlaceOffersList } from './RoomStyle';
import KitchenIcon from '@mui/icons-material/Kitchen';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import IronIcon from '@mui/icons-material/Iron';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import PoolIcon from '@mui/icons-material/Pool';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import { Skeleton } from '@mui/material';

const RoomAmenity = ({ roomInfo, loading }) => {
  const numberOfTimes = 6;
  const placeholderItems = new Array(numberOfTimes).fill(null);

  return (
    <>
      {loading ? (
        <>
          {placeholderItems.map((_, index) => (
            <PlaceOffersList key={index}>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '10px',
                  marginRight: '15px',
                }}
              />
              <span>
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{
                    width: '150px',
                    height: '19px',
                    borderRadius: '10px',
                    marginRight: '15px',
                  }}
                />
              </span>
            </PlaceOffersList>
          ))}
        </>
      ) : (
        <>
          {roomInfo?.amenities?.slice(0, 6).map((amenity) => {
            return (
              <PlaceOffersList>
                {amenity?.name === 'Wifi' && <WifiIcon />}
                {amenity?.name === 'Kitchen' && <KitchenIcon />}
                {amenity?.name === 'Microwave' && <MicrowaveIcon />}
                {amenity?.name === 'Parking' && <LocalParkingIcon />}
                {amenity?.name === 'Tv' && <TvIcon />}
                {amenity?.name === 'Cooking basics' && <RestaurantIcon />}
                {amenity?.name === 'Private entrance' && <DoorFrontIcon />}
                {amenity?.name === 'Laundry' && <LocalLaundryServiceIcon />}
                {amenity?.name === 'BBQ grill' && <OutdoorGrillIcon />}
                {amenity?.name === 'Iron' && <IronIcon />}
                {amenity?.name === 'Pool' && <PoolIcon />}
                <span>{amenity?.name}</span>
              </PlaceOffersList>
            );
          })}
        </>
      )}
    </>
  );
};

export default RoomAmenity;
