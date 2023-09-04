import React from 'react';
import { TripCardInfo, TripList, TripStatus } from './TripsStyle';
import { useNavigate } from 'react-router-dom';
import TestPic from '../../assets/images/soon.jpg';

const TripListCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <TripList key={book?.pk} onClick={() => navigate(`/trips/${book?.pk}`)}>
      <img src={TestPic} alt='' />
      <TripCardInfo>
        <p>{book?.room?.name}</p>
        <span>Location</span>
        <span>
          {book?.check_in} ~ {book?.check_out}
        </span>
      </TripCardInfo>
      <TripStatus>
        <span
          className={
            (book?.status === 'pending' && 'pending') ||
            (book?.status === 'ongoing' && 'ongoing') ||
            (book?.status === 'completed' && 'completed') ||
            (book?.status === 'canceled' && 'canceled')
          }
        >
          {book?.status}
        </span>
      </TripStatus>
    </TripList>
  );
};

export default TripListCard;
