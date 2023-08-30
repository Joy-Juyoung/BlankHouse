import React, { useEffect } from 'react';
import { MainSmallContainer, MainWrap } from '../MainHome/MainStyle';
import { RoomTopHeader, RoomTopWrap } from '../Room/RoomStyle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  PaymentSideWrapper,
  InfoDetail,
  PayEditBtn,
  PayInfo,
  PaymentHeader,
  PaymentInfo,
  PaymentInfoDetail,
  PaymentInfoTitle,
  PaymentInfoWrapper,
  PaymentMainWrap,
  PaymentOptions,
  PaymentTopWrap,
  PaymentSideInfo,
  PaymentSideDetail,
  PaymentSideTop,
  PayTopTitle,
  PayTopRating,
  PaymentList,
  PayList,
  PaymentSideImg,
} from './PaymentStyle';
import ColorButton from '../../components/Buttons/ColorButton';
import { useNavigate, useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch, useSelector } from 'react-redux';
import {
  bookRoomsByIdAsync,
  getRoomInfo,
  getRoomsByIdAsync,
} from '../../redux/slices/roomSlice';
import StarIcon from '@mui/icons-material/Star';
import {
  RoomSideOutput,
  RoomSideTotal,
  SideOutput,
  SideTotal,
  // SideTotal,
} from '../Room/RoomSideStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = ({ setIsPageMain, location }) => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const roomInfo = useSelector(getRoomInfo);
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);

  // const roomId = searchParams.get('reviews');
  const reviews = searchParams.get('reviews');
  const checkInDate = searchParams.get('checkin');
  const checkOutDate = searchParams.get('checkout');
  const guestNum = searchParams.get('guest');
  const perNight = searchParams.get('night');
  const totalPerNight = searchParams.get('total');
  const taxPerNight = searchParams.get('tax');
  const finalTotalPrice = searchParams.get('finalTotal');

  // console.log(guestNum);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(false);
    dispatch(getRoomsByIdAsync({ roomId }));
  }, [dispatch, roomId]);

  const handleSubmit = (event) => {
    event.preventDefault();
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
                    <PayEditBtn>Edit</PayEditBtn>
                  </PayInfo>
                  <PayInfo className='infoLast'>
                    <InfoDetail>
                      <p>Guests</p>
                      <span>{guestNum} Guest</span>
                    </InfoDetail>
                    <PayEditBtn>Edit</PayEditBtn>
                  </PayInfo>
                </PaymentInfoDetail>
              </PaymentInfoWrapper>

              <PaymentInfoWrapper>
                <PaymentInfoTitle>Pay with</PaymentInfoTitle>
                <PaymentInfoDetail>
                  <PaymentOptions>
                    <div>
                      <span>payIcon</span>
                      <span>payNum</span>
                    </div>
                    {/* <button> */}
                    <KeyboardArrowDownIcon />
                    {/* </button> */}
                  </PaymentOptions>
                </PaymentInfoDetail>
              </PaymentInfoWrapper>

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

            <PaymentSideWrapper>
              {/* <form onSubmit={handleSubmit}> */}
              <PaymentSideInfo>
                <PaymentSideDetail className='sideTop'>
                  <PaymentSideImg>
                    <img src={roomInfo?.photos?.[0]?.picture} alt='photo' />
                  </PaymentSideImg>
                  <PaymentSideTop>
                    <PayTopTitle>
                      <span>
                        {' '}
                        {roomInfo?.house_type === 'entire_place' &&
                          'Entire home'}
                        {roomInfo?.house_type === 'private_room' &&
                          'Private room '}
                        {roomInfo?.house_type === 'shared_room' &&
                          'Shared room '}
                      </span>
                      <p>{roomInfo?.name}</p>
                    </PayTopTitle>
                    <PayTopRating>
                      <span className='strong'>
                        <StarIcon
                          sx={{ fontSize: '16px', marginRight: '3px' }}
                        />
                      </span>
                      <span className='strong'>
                        {roomInfo?.rating?.toFixed(2)}
                      </span>
                      <span>({reviews} reviews)</span>
                    </PayTopRating>
                  </PaymentSideTop>
                </PaymentSideDetail>

                <PaymentSideDetail className='sideMid'>
                  <PaymentInfoTitle>Price details</PaymentInfoTitle>
                  <RoomSideOutput>
                    <ul>
                      <li>
                        <SideOutput className='outputName'>
                          $
                          {roomInfo?.price?.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}{' '}
                          x {perNight} nights
                        </SideOutput>
                        <SideOutput>
                          $
                          {totalPerNight?.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </SideOutput>
                      </li>
                      <li>
                        <SideOutput className='outputName'>
                          Cleaning fee
                        </SideOutput>
                        <SideOutput>
                          $
                          {roomInfo?.cleaning_fee?.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </SideOutput>
                      </li>
                      <li>
                        <SideOutput className='outputName'>Taxes</SideOutput>
                        <SideOutput>
                          $
                          {taxPerNight?.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </SideOutput>
                      </li>
                    </ul>
                  </RoomSideOutput>
                  <RoomSideTotal>
                    <SideTotal>Total (CAD)</SideTotal>
                    <SideTotal>
                      $
                      {finalTotalPrice?.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </SideTotal>
                  </RoomSideTotal>
                </PaymentSideDetail>
              </PaymentSideInfo>
            </PaymentSideWrapper>
          </PaymentMainWrap>
        </form>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Payment;
