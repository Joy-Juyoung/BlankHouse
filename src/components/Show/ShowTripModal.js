import React, { useEffect } from 'react';
import TripsDetails from '../../pages/Trips/TripsDetails';
import ModalLayout from '../Modals/ModalLayout';
import { ModalContainer, ModalMainSection } from '../Modals/ModalStyle';
import { ModalShowMain } from './ShowModalStyle';

const ShowTripModal = ({
  book,
  modalTripShown,
  toggleTripModal,
  bookingInfo,
}) => {
  return (
    <ModalLayout
      shown={modalTripShown}
      close={() => toggleTripModal(false)}
      title={bookingInfo?.room?.name}
    >
      <ModalContainer>
        <ModalShowMain className='trips'>
          <ModalMainSection>
            <TripsDetails
              book={book}
              // bookId={bookId}
              modalTripShown={modalTripShown}
              toggleTripModal={toggleTripModal}
              bookingInfo={bookingInfo}
            />
          </ModalMainSection>
        </ModalShowMain>
      </ModalContainer>
    </ModalLayout>
  );
};

export default ShowTripModal;
