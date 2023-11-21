import React, { useEffect, useState } from 'react';
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

  const initialStepCategory =
    JSON.parse(localStorage.getItem('getCategory')) || null;
  const [stepCategory, setStepCategory] = useState(initialStepCategory);

  useEffect(() => {
    dispatch(getAllRoomCategoryAsync());
  }, [dispatch]);

  const handleStepValue = (value) => {
    setStepCategory(value);
  };

  useEffect(() => {
    localStorage.setItem('getCategory', JSON.stringify(stepCategory));
  }, [stepCategory]);

  console.log('stepCategory', stepCategory);

  return (
    <StepInWrap>
      <h1>Which of these best describes your place?</h1>
      <StepCategoriesWrapper>
        {categories?.map((category, index) => (
          <StepCategories
            key={index}
            onClick={() => handleStepValue(category?.pk)}
            className={stepCategory === category?.pk ? 'active' : ''}
          >
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
