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

  console.log('stepAmenity', stepAmenity);

  useEffect(() => {
    dispatch(getAllAmenityAsync());
  }, [dispatch]);

  console.log('roomAmenity', roomAmenity);
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
                    <HouseIcon sx={{ fontSize: 32 }} />
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
