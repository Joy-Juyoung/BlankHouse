import React, { useState } from 'react';
import { RoomSideBtn } from '../../pages/Room/RoomSideStyle';

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
      <span>Hover me</span>
    </RoomSideBtn>
  );
};

export default SubmitButton;
