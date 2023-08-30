import React, { useEffect } from 'react';
import { MainSmallContainer, MainWrap } from '../MainHome/MainStyle';
import { TripCardInfo, TripList, TripWrapper } from './TripsStyle';
import TestPic from '../../assets/images/soon.jpg';

const Trips = ({ setIsPageMain }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(false);
  }, []);

  return (
    <MainSmallContainer>
      <h1>Trips</h1>
      <MainWrap>
        <TripWrapper>
          <h2>Upcoming trips</h2>
          <TripList>
            <img src={TestPic} alt='' />
            <TripCardInfo>
              <p>Name</p>
              <span>Location</span>
              <span>Date</span>
            </TripCardInfo>
          </TripList>
        </TripWrapper>
        <TripWrapper>
          <h2>Where you’ve been</h2>
          <TripList>
            <img src={TestPic} alt='' />
            <TripCardInfo>
              <p>Name</p>
              <span>Location</span>
              <span>Date</span>
            </TripCardInfo>
          </TripList>
        </TripWrapper>
        <TripWrapper>
          <h2>Cancelled trips</h2>
          <TripList>
            <img src={TestPic} alt='' />
            <TripCardInfo>
              <p>Name</p>
              <span>Location</span>
              <span>Date</span>
            </TripCardInfo>
          </TripList>
        </TripWrapper>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Trips;
