import React, { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(getAllAmenityAsync());
  }, [dispatch]);

  return (
    <StepInWrap>
      <h1>Tell guests what your place has to offer</h1>
      <p className='titleSub'>
        You can add more amenities after you publish your listing.
      </p>
      <StepInWrapper>
        <StepCategoriesWrapper>
          {/* {roomAmenity?.map((amenity, index) => (
            <StepCategories key={index}>
              <StepCategoryList>
                <span>
                  <HouseIcon sx={{ fontSize: 32 }} />
                </span>
                <p>{amenity?.name}</p>
              </StepCategoryList>
            </StepCategories>
          ))} */}
        </StepCategoriesWrapper>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step2_Amenity;
