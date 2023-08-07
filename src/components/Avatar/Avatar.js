import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;

  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
`;

const getRandomColor = () => {
  // const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
  //   Math.random() * 256
  // )}, ${Math.floor(Math.random() * 256)})`;
  const randomColor = `rgb(${Math.floor(Math.random() * 170)}, ${Math.floor(
    Math.random() * 170
  )}, ${Math.floor(Math.random() * 170)})`;
  return randomColor;
};

const Avatar = ({ initials }) => {
  const backgroundColor = getRandomColor();

  return (
    <AvatarContainer style={{ backgroundColor }}>{initials}</AvatarContainer>
  );
};

export default Avatar;
