import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategory,
  getAllRoomCategoryAsync,
} from '../../../../redux/slices/categorySlice';
import {
  StepCategories,
  StepCategoriesWrapper,
  StepCategoryList,
  StepInWrap,
} from '../StepStyle';
import HouseIcon from '@mui/icons-material/House';

const Step1_Category = () => {
  const categories = useSelector(getAllCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoomCategoryAsync());
  }, [dispatch]);

  return (
    <StepInWrap>
      <h1>Which of these best describes your place?</h1>
      <StepCategoriesWrapper>
        {categories?.map((category, index) => (
          <StepCategories key={index}>
            <StepCategoryList>
              <span>
                <HouseIcon sx={{ fontSize: 32 }} />
              </span>
              <p>{category?.name}</p>
            </StepCategoryList>
          </StepCategories>
        ))}
      </StepCategoriesWrapper>
    </StepInWrap>
  );
};

export default Step1_Category;
