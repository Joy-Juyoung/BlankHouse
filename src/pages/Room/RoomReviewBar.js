import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width: 60%;
  background-color: #f0f0f0;
  /* background-color: rgb(244, 221, 173, 0.3); */
  border-radius: 4px;
  height: 8px;
`;

const Progress = styled.div`
  height: 8px;
  border-radius: 4px;
  background-color: #2d2d2d;
  transition: width 0.3s;
`;

const RoomReviewBar = ({ rating }) => {
  return (
    <ProgressContainer>
      <Progress style={{ width: `${(rating / 5) * 100}%` }} />
    </ProgressContainer>
  );
};

export default RoomReviewBar;
