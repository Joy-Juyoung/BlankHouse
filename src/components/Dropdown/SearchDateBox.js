import React, { useState, useEffect } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

const SearchDateDropdown = styled.div`
  background: #fff;
  padding: 10px;
  /* width: 100%; */
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  /* right: -100px; */
  z-index: 5;
  cursor: auto;

  border-radius: 30px;
  border: 1px solid #dddd;
  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.2);
`;

const SearchDropBackDrop = styled.div`
  position: fixed;
  top: 160px;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  cursor: auto;

  overflow: hidden;
`;

const SearchDateBoxWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchDateBox = ({
  setIsCheckInDate,
  setIsCheckOutDate,
  toggleSearchModal,
}) => {
  return (
    <>
      <SearchDateDropdown
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <SearchDateBoxWrap>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangeCalendar']}>
              <DateRangeCalendar />
            </DemoContainer>
          </LocalizationProvider>
        </SearchDateBoxWrap>
      </SearchDateDropdown>
      <SearchDropBackDrop onClick={() => toggleSearchModal(false)} />
    </>
  );
};

export default SearchDateBox;
