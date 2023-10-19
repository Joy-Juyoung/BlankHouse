import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { PriceRangeGraph } from '../Modals/ModalStyle';
// import { PriceRangeGraph } from './ModalStyle';
import ReactEcharts from 'echarts-for-react';
// import { allRooms } from '../../redux/slices/rooms';
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

function valuetext(value) {
  return `${value}`;
}

const FilterPriceRage = ({
  value,
  setValue,
  setMininum_price,
  setMaximum_price,
}) => {
  // const rooms = useSelector((state) => state.rooms);
  // const [value, setValue] = React.useState([10, 85]);
  // const dispatch = useDispatch();

  // const initFetch = useCallback(() => {
  //   dispatch(allRooms());
  // }, [dispatch]);

  // useEffect(() => {
  //   initFetch();
  // }, [initFetch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMininum_price(newValue[0]);
    setMaximum_price(newValue[1]);
  };

  // useEffect(() => {
  //   initFetch();
  // }, [initFetch]);

  // console.log('value', value);

  return (
    <>
      {/* <PriceRangeGraph>
        <ReactEcharts
          option={options}
          style={{ width: '100%', height: '70px' }}
        ></ReactEcharts>
      </PriceRangeGraph> */}
      <Box sx={{ width: '100%' }}>
        <AirbnbSlider
          // getAriaLabel={() => 'Temperature range'}
          min={0}
          max={1000}
          // marks
          // step={100}
          value={value}
          onChange={handleChange}
          // aria-label='Default'
          // valueLabelDisplay='auto'
          // getAriaValueText={valuetext}
          valueLabelDisplay='auto'
          aria-label='pretto slider'
          getAriaLabel={(index) =>
            index === 0 ? 'Minimum price' : 'Maximum price'
          }
          slots={{ thumb: AirbnbThumbComponent }}
          // size='large'
        />
      </Box>
    </>
  );
};

export default FilterPriceRage;
