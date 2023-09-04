import React from 'react';
import {
  TripCardInfo,
  TripInfoTitle,
  TripList,
  TripStatus,
  TripInfoDetails,
} from './TripsStyle';
import { useNavigate } from 'react-router-dom';
import TestPic from '../../assets/images/soon.jpg';

const TripListCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <TripList key={book?.pk} onClick={() => navigate(`/trips/${book?.pk}`)}>
      <img src={TestPic} alt='' />
      <TripCardInfo>
        <TripInfoTitle>
          <p>{book?.room?.name?.toUpperCase()}</p>
          <TripStatus>
            <span
              className={
                (book?.status === 'pending' && 'pending') ||
                (book?.status === 'ongoing' && 'ongoing') ||
                (book?.status === 'completed' && 'completed') ||
                (book?.status === 'canceled' && 'canceled')
              }
            >
              {book?.status?.toUpperCase()}
            </span>
          </TripStatus>
        </TripInfoTitle>
        <TripInfoDetails>
          <span>{book?.guests} Guests</span>
          <span>
            {book?.check_in} ~ {book?.check_out}
          </span>
        </TripInfoDetails>
      </TripCardInfo>
    </TripList>
  );
};

export default TripListCard;
