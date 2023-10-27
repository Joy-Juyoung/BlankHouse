import React from 'react';
import {
  SliderButton,
  SliderWrap,
  SliderWrapper,
  Slide,
  SlideName,
} from '../MainCategorySliderStyle';
import { Skeleton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getFilterRoomsAsync } from '../../../redux/slices/roomSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const MainCategorySk = ({
  loading,
  category,
  sliderWidth,
  goRight,
  goLeft,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickCategory = () => {
    dispatch(
      getFilterRoomsAsync({
        category: category?.name,
        house_type: '',
        number_of_beds: '',
        number_of_bedrooms: '',
        number_of_toilets: '',
      })
    );

    localStorage.setItem('getCategory', JSON.stringify(category?.name));
  };

  return (
    <>
      {loading ? (
        <SlideName
          // key={category?.pk}
          style={{ width: sliderWidth }}
          className='loading'
        >
          <Skeleton
            variant='rect'
            animation='wave'
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '10px',
              padding: '10px',
              margin: '0',
            }}
          />
        </SlideName>
      ) : (
        <>
          <SlideName
            style={{ width: sliderWidth }}
            onClick={handleClickCategory}
            className={
              JSON.parse(localStorage.getItem('getCategory')) ===
                category?.name && 'all'
            }
          >
            <span>{category?.name}</span>
          </SlideName>
        </>
      )}
    </>
  );
};

export default MainCategorySk;
