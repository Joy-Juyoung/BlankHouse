import React, { useState } from 'react';
import {
  TripCardInfo,
  TripInfoTitle,
  TripList,
  TripStatus,
  TripInfoDetails,
} from './TripsStyle';
import TestPic from '../../assets/images/soon.jpg';
import ShowTripModal from '../../components/Show/ShowTripModal';
import {
  getBookingByIdAsync,
  getBookingDetail,
} from '../../redux/slices/bookingSlice';
import { useDispatch, useSelector } from 'react-redux';

const TripListCard = ({ book }) => {
  // const navigate = useNavigate();
  const [modalTripShown, toggleTripModal] = useState(false);
  // const [bookId, setBookId] = useState();
  const bookingInfo = useSelector(getBookingDetail);
  const dispatch = useDispatch();
  // const bookId = book?.pk;

  const handleOpenTrip = (id) => {
    dispatch(getBookingByIdAsync({ bookId: id }));
    // setBookId(id);
    toggleTripModal(!modalTripShown);
  };

  return (
    <TripList
      key={book?.pk}
      onClick={(e) => {
        handleOpenTrip(book?.pk);
      }}
    >
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

      <ShowTripModal
        book={book}
        // bookId={bookId}
        modalTripShown={modalTripShown}
        toggleTripModal={toggleTripModal}
        bookingInfo={bookingInfo}
      />
    </TripList>
  );
};

export default TripListCard;
