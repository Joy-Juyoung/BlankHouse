import React from 'react';
import { PlaceOffers, PlaceOffersList } from './RoomStyle';
import KitchenIcon from '@mui/icons-material/Kitchen';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

const RoomAmenity = ({ roomInfo }) => {
  return (
    <PlaceOffers>
      {roomInfo?.amenities?.map((amenity) => {
        return (
          <PlaceOffersList>
            <KitchenIcon />
            <span>{amenity?.name}</span>
          </PlaceOffersList>
        );
      })}
    </PlaceOffers>
  );
};

export default RoomAmenity;
