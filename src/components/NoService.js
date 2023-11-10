import React from 'react';
// import Smile from '../assets/images/smile.svg';
import Coming from '../assets/images/coming3.png';
import styled from 'styled-components';

const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0; */
  h1 {
    /* margin: 20px auto; */
    font-size: 22px;
    /* margin: 0 auto; */
  }

  img {
    width: 350px;
    height: 350px;
    margin-top: -80px;
    /* padding: 0; */
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
