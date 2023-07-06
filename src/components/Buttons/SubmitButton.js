import React, { useState } from 'react';
import styled from 'styled-components';

const RoomSideBtn = styled.button`
  position: relative;
  border: none;
  border-radius: 10px;
  background: #ffae00;
  color: #fff;
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
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
    color: red;
    width: 200px;
    height: 200px;
  }
`;

const SubmitButton = ({ loading, RoomData }) => {
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

export default SubmitButton;
