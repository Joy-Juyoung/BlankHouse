import React from 'react';
import { Skeleton } from '@mui/material';
import { TripListWrapper } from '../TripsStyle';

const TripsSk = ({ loading }) => {
  return (
    <TripListWrapper>
      <Skeleton
        variant='rect'
        animation='wave'
        sx={{ width: '300px', height: '80px', borderRadius: '10px' }}
      />
    </TripListWrapper>
  );
};

export default TripsSk;
