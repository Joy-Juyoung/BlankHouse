import React from 'react';
import Box from '@mui/material/Box';
import Slider,{ SliderThumb } from '@mui/material/Slider';
import { styled } from "@mui/material/styles";

function valuetext(value) {
  return `${value}°C`;
}

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: "#bfbfbf",
    height: 3,
    padding: "13px 0",
    "& .MuiSlider-thumb": {
      height: 27,
      width: 27,
      backgroundColor: "#fff",
      border: "1px solid #bfbfbf",
    //   "&:hover": {
    //     boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)"
    //   },
      "& .airbnb-bar": {
        height: 9,
        width: 1,
        backgroundColor: "#bfbfbf",
        marginLeft: 1,
        marginRight: 1
      }
    },
    "& .MuiSlider-track": {
      height: 3
    },
    "& .MuiSlider-rail": {
      color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
      opacity: theme.palette.mode === "dark" ? undefined : 1,
      height: 3
    }
  }));

  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
const ExPriceRage = () => {
  const [value, setValue] = React.useState([30, 80]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Box sx={{ width: '100%' }}>
        <AirbnbSlider
            slots={{ thumb: AirbnbThumbComponent }}
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

export default ExPriceRage;
