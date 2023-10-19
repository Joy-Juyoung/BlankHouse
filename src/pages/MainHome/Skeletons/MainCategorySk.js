import React from 'react';
import {
  SliderButton,
  SliderWrap,
  SliderWrapper,
  Slide,
  SlideName,
} from '../MainCategorySliderStyle';
import { Skeleton } from '@mui/material';

const MainCategorySk = ({
  loading,
  category,
  sliderWidth,
  goRight,
  goLeft,
}) => {
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
        <SlideName
          style={{ width: sliderWidth }}
          // className={goRight ? 'goRight' : '' || goLeft ? 'goLeft' : ''}
        >
          <span>{category?.name}</span>
        </SlideName>
      )}
    </>
  );
};

export default MainCategorySk;
