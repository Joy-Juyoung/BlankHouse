import React, { useState, useEffect } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import DateRange from '../../components/DateRange';

const SearchDateDropdown = styled.div`
  background: #fff;
  padding: 10px;
  /* width: 100%; */
  position: absolute;
  top: 80px;
  /* left: 0; */
  right: 0;
  z-index: 10;
  cursor: auto;

  border-radius: 5px;
  border: 1px solid #dddd;
  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.2);

  padding-top: 60px;
`;

const SearchDropBackDrop = styled.div`
  position: fixed;
  top: 0;
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

const DateDropTitle = styled.div`
  margin-top: -50px;
  padding: 10px;

  p {
    margin: 0;
  }
`;

const DateDropBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    padding: 10px;
    background: #282828;
    color: #fff;
    margin: 10px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: #000;
    }
  }
`;

const SideDateDropdown = ({
  // setIsSideCheckIn,
  // isSideCheckIn,
  // setIsSideCheckOut,
  // isSideCheckOut,
  setIsSideDate,
  isSideDate,
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  roomInfo,
}) => {
  // const [checkInDate, setCheckInDate] = useState('');
  // const [checkOutDate, setCheckOutDate] = useState('');

  return (
    <>
      <SearchDateDropdown
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DateDropTitle>
          <h2>
            {new Date(checkOutDate).getDate() - new Date(checkInDate).getDate()}{' '}
            nights in {roomInfo?.city}
          </h2>
          <p>
            {checkInDate} ~ {checkOutDate}
          </p>
        </DateDropTitle>
        <SearchDateBoxWrap>
          <DateRange
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            setCheckInDate={setCheckInDate}
            setCheckOutDate={setCheckOutDate}
          />
        </SearchDateBoxWrap>
        <DateDropBtn>
          <span onClick={() => setIsSideDate(false)}>Close</span>
        </DateDropBtn>
      </SearchDateDropdown>
      <SearchDropBackDrop onClick={() => setIsSideDate(false)} />
      {/* {isSideCheckIn && (
        <SearchDropBackDrop onClick={() => setIsSideCheckIn(false)} />
      )}
      {isSideCheckOut && (
        <SearchDropBackDrop onClick={() => setIsSideCheckOut(false)} />
      )} */}
    </>
  );
};

export default SideDateDropdown;
