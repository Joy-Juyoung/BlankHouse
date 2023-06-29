import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { PriceRangeGraph } from './ModalStyle';
// import { PriceRangeGraph } from './ModalStyle';
import ReactEcharts from 'echarts-for-react';

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
        0, 0, 0, 0, 0, 0, 0, 200, 280, 300, 350, 200, 280, 300, 350, 200, 280,
        300, 350, 200, 0, 0, 0, 0, 0,
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
  const [value, setValue] = React.useState([30, 80]);

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
