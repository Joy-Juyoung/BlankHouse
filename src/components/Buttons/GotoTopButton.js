import React from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const TopBtn = styled.div`
  position: fixed;
  bottom: 55px;
  right: 10px;

  cursor: pointer;
  width: 30px;
  height: 40px;
  background: #000;
  color: #fff;

  border: 4px double #fff;
  border-radius: 50%;
  padding: 0px 10px 7px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  opacity: 0.7;

  span {
    margin-top: -3px;
  }

  &:hover {
    opacity: 1;
  }
`;

const GotoTopButton = () => {
  return (
    <TopBtn
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    >
      <KeyboardArrowUpIcon />
      <span>Top</span>
    </TopBtn>
  );
};

export default GotoTopButton;
