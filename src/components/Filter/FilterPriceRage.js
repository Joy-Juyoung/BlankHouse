import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 10,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    // circle
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 10,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    // able range bar height
    height: 10,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    // disable range bar height
    height: 10,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className='airbnb-bar' />
      <span className='airbnb-bar' />
      <span className='airbnb-bar' />
    </SliderThumb>
  );
}

const FilterPriceRage = ({
  value,
  setValue,
  setMinimumPrice,
  minimumPrice,
  setMaximumPrice,
  maximumPrice,
}) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMinimumPrice(newValue[0]);
    setMaximumPrice(newValue[1]);
  };

  useEffect(() => {
    setValue([Number(minimumPrice), Number(maximumPrice)]);
  }, [minimumPrice, maximumPrice]);

  // console.log('value', value);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <AirbnbSlider
          // min={Number(minimumPrice)}
          // max={Number(maximumPrice)}
          min={0}
          max={2000}
          value={value}
          onChange={handleChange}
          valueLabelDisplay='auto'
          slots={{ thumb: AirbnbThumbComponent }}
        />
      </Box>
    </>
  );
};

export default FilterPriceRage;
