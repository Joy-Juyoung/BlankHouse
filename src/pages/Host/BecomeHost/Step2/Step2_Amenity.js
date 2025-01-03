import React, { useEffect, useState } from 'react';
import {
  StepCategories,
  StepCategoriesWrapper,
  StepCategoryList,
  StepInWrap,
  StepInWrapper,
} from '../StepStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllAmenity,
  getAllAmenityAsync,
} from '../../../../redux/slices/roomSlice';
import HouseIcon from '@mui/icons-material/House';
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
import LivingIcon from '@mui/icons-material/Living';

const Step2_Amenity = () => {
  const roomAmenity = useSelector(getAllAmenity);
  const dispatch = useDispatch();

  const initialStepAmenity =
    JSON.parse(localStorage.getItem('getAmenity')) || [];
  const [stepAmenity, setStepAmenity] = useState(initialStepAmenity);

  const handleStepValue = (value) => {
    setStepAmenity(value);
  };

  useEffect(() => {
    localStorage.setItem('getAmenity', JSON.stringify(stepAmenity));
  }, [stepAmenity]);

  // console.log('stepAmenity', stepAmenity);

  useEffect(() => {
    dispatch(getAllAmenityAsync());
  }, [dispatch]);

  // console.log('roomAmenity', roomAmenity);
  // It should be selected multiple

  return (
    <StepInWrap>
      <h1>Tell guests what your place has to offer</h1>
      <p className='titleSub'>
        You can add more amenities after you publish your listing.
      </p>
      <StepInWrapper>
        <StepCategoriesWrapper>
          {Array.isArray(roomAmenity) &&
            roomAmenity?.map((amenity, index) => (
              <StepCategories
                key={index}
                onClick={() => handleStepValue(amenity?.pk)}
                className={stepAmenity === amenity?.pk ? 'active' : ''}
              >
                <StepCategoryList>
                  <span>
                    {/* <HouseIcon sx={{ fontSize: 32 }} /> */}

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
                  </span>
                  <p>{amenity?.name}</p>
                </StepCategoryList>
              </StepCategories>
            ))}
        </StepCategoriesWrapper>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step2_Amenity;
