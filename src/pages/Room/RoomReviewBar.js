import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width: 60%;
  background-color: #dddd;
  border-radius: 4px;
  height: 8px;

  @media screen and (max-width: 1030px) {
    width: 80%;
    margin-right: 5px;
  }

  @media screen and (max-width: 680px) {
    width: 60%;
  }
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
