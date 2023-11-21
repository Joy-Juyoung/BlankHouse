import React from 'react';
// import Smile from '../assets/images/smile.svg';
import Coming from '../assets/images/coming7.png';
import styled from 'styled-components';

const EmptyContainer = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: #f5f5f5; */
  margin-top: -50px;
  margin-left: 10px;
  /* transform: rotate(30deg); */

  /* padding: 20px; */ /* margin: 0; */
  img {
    width: 350px;
    height: 350px;
    /* margin-top: -80px; */
    /* padding: 0; */
    margin-bottom: 10px;

    background: #f5f5f5;
    transform: rotate(15deg);
  }
`;

const NoService = () => {
  return (
    <EmptyContainer>
      {/* <EmptyWrap> */}
      <img src={Coming} alt='Smile' />
      {/* </EmptyWrap> */}
      {/* <h1>Sorry, This Service Is Coming Soon!</h1> */}
    </EmptyContainer>
  );
};

export default NoService;
