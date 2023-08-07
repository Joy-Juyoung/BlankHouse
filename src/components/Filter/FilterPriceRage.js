import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { PriceRangeGraph } from '../Modals/ModalStyle';
// import { PriceRangeGraph } from './ModalStyle';
import ReactEcharts from 'echarts-for-react';
import { allRooms } from '../../redux/slices/rooms';

function valuetext(value) {
  return `${value}°C`;
}

const options = {
  grid: { top: 0, right: 0, bottom: 0, left: 0 },
  xAxis: {
    type: 'category',
    data: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [
        0, 0, 0, 100, 2100, 1300, 3100, 2000, 2800, 3000, 3500, 200, 2800, 300,
        3500, 2000, 2810, 300, 3510, 2100, 100, 0, 0, 0, 0,
      ],
      type: 'bar',
      smooth: true,
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
};

const FilterPriceRage = () => {
  const rooms = useSelector((state) => state.rooms);
  const [value, setValue] = React.useState([10, 85]);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(allRooms());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <PriceRangeGraph>
        <ReactEcharts
          option={options}
          style={{ width: '100%', height: '70px' }}
        ></ReactEcharts>
      </PriceRangeGraph>
      <Box sx={{ width: '100%' }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay='auto'
          getAriaValueText={valuetext}
        />
      </Box>
    </>
  );
};

export default FilterPriceRage;
