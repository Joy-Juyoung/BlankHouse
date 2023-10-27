import React, { useEffect, useState } from 'react';
import { MainSmallContainer, MainWrap } from '../MainHome/MainStyle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  InfoDetail,
  PayEditBtn,
  PayInfo,
  PaymentHeader,
  PaymentInfo,
  PaymentInfoDetail,
  PaymentInfoTitle,
  PaymentInfoWrapper,
  PaymentMainWrap,
  PaymentTopWrap,
} from './PaymentStyle';
import ColorButton from '../../components/Buttons/ColorButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomInfo } from '../../redux/slices/roomSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bookRoomsByIdAsync } from '../../redux/slices/bookingSlice';
import PaymentSide from './PaymentSide';
import PaymentBalance from './PaymentBalance';

const Payment = ({ setIsPageMain, location, userMe }) => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const roomInfo = useSelector(getRoomInfo);
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);

  const reviews = searchParams.get('reviews');
  const checkInDate = searchParams.get('checkin');
  const checkOutDate = searchParams.get('checkout');
  const guestNum = searchParams.get('guest');
  const perNight = searchParams.get('night');
  const totalPerNight = searchParams.get('total');
  const taxPerNight = searchParams.get('tax');
  const finalTotalPrice = searchParams.get('finalTotal');

  const [isEditDate, setIsEditDate] = useState(false);
  const [isEditGuest, setIsEditGuest] = useState(false);
  // console.log(guestNum);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(false);
  }, [dispatch, roomId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      bookRoomsByIdAsync({
        roomId,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guests: guestNum,
      })
    )
      .then(() => {
        toast.success('booking success.');
      })
      .catch((error) => {
        console.error(error);
        toast.error('booking failed.');
      });
  };

  return (
    <MainSmallContainer>
      <MainWrap>
        <form onSubmit={handleSubmit}>
          <PaymentTopWrap>
            <PaymentHeader>
              <ArrowBackIosIcon onClick={() => navigate(-1)} />
              Confirm and pay
            </PaymentHeader>
          </PaymentTopWrap>
          <PaymentMainWrap>
            <PaymentInfo>
              <PaymentInfoWrapper className='first'>
                <PaymentInfoTitle>Your trip</PaymentInfoTitle>
                <PaymentInfoDetail className='selected'>
                  <PayInfo>
                    <InfoDetail>
                      <p>Dates</p>
                      {checkInDate} ~ {checkOutDate}
                    </InfoDetail>
                    <PayEditBtn onClick={() => setIsEditDate(!isEditDate)}>
                      Edit
                    </PayEditBtn>
                  </PayInfo>
                  <PayInfo className='infoLast'>
                    <InfoDetail>
                      <p>Guests</p>
                      <span>{guestNum} Guest</span>
                    </InfoDetail>
                    <PayEditBtn onClick={() => setIsEditGuest(!isEditGuest)}>
                      Edit
                    </PayEditBtn>
                  </PayInfo>
                </PaymentInfoDetail>
              </PaymentInfoWrapper>

              <PaymentBalance
                userMe={userMe}
                finalTotalPrice={finalTotalPrice}
                roomId={roomId}
              />

              <PaymentInfoWrapper>
                <PaymentInfoTitle>Cancellation policy</PaymentInfoTitle>
                <PaymentInfoDetail>
                  <p>
                    Cancel before Aug. 21 for a partial refund. After that, this
                    reservation is non-refundable.
                    <span>Learn more</span>
                  </p>
                </PaymentInfoDetail>
              </PaymentInfoWrapper>

              <PaymentInfoWrapper>
                <PaymentInfoTitle>Ground rules</PaymentInfoTitle>
                <PaymentInfoDetail>
                  <p>
                    We ask every guest to remember a few simple things about
                    what makes a great guest.
                  </p>
                  <ul>
                    <li>Follow the house rules</li>
                    <li>Treat your Host’s home like your own</li>
                  </ul>
                </PaymentInfoDetail>
              </PaymentInfoWrapper>

              <PaymentInfoWrapper className='last'>
                <PaymentInfoDetail>
                  <p className='notice'>
                    By selecting the button below, I agree to the Host's House
                    Rules, Ground rules for guests, Airbnb's Rebooking and
                    Refund Policy, and that Airbnb can charge my payment method
                    if I’m responsible for damage.
                  </p>
                  <button type='submit'>
                    <ColorButton buttonLabel='Confirm and pay' />
                  </button>
                </PaymentInfoDetail>
              </PaymentInfoWrapper>
            </PaymentInfo>

            <PaymentSide
              roomInfo={roomInfo}
              reviews={reviews}
              perNight={perNight}
              totalPerNight={totalPerNight}
              taxPerNight={taxPerNight}
              finalTotalPrice={finalTotalPrice}
            />
          </PaymentMainWrap>
        </form>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Payment;
