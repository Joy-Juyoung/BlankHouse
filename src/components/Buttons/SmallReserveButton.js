import React, { useState } from 'react';
import styled from 'styled-components';

const RoomSideBtn = styled.button`
  position: relative;
  border: none;
  background: #ffae00;
  padding: 18px;
  border-radius: 10px;
  margin-left: 15px;
  cursor: pointer;

  font-weight: 600;
  font-size: 16px;
  color: #fff;
  cursor: pointer;

  overflow: hidden;

  &:before {
    content: '';
    left: ${({ left }) => left}px;
    top: ${({ top }) => top}px;
    position: absolute;
    width: 0;
    height: 0;
    background: radial-gradient(
      circle closest-side,
      rgb(255, 225, 165, 0.5),
      transparent
    );
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
    cursor: pointer;
  }

  &:hover:before {
    width: 50px;
    height: 50px;
  }
`;

const SmallReserveButton = ({ loading, RoomData }) => {
  const [hoverStyle, setHoverStyle] = useState({
    left: 0,
    top: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;

    setHoverStyle({ left, top });
  };

  return (
    <RoomSideBtn
      left={hoverStyle.left}
      top={hoverStyle.top}
      type='submit'
      variant='contained'
      onMouseMove={handleMouseMove}
    >
      <span>Reserve</span>
    </RoomSideBtn>
  );
};

export default SmallReserveButton;
