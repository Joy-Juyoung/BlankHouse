import React from 'react';
import {
  PaymentSideWrapper,
  PaymentInfoTitle,
  PaymentSideInfo,
  PaymentSideDetail,
  PaymentSideTop,
  PayTopTitle,
  PayTopRating,
  PaymentSideImg,
} from './PaymentStyle';
import {
  RoomSideOutput,
  SideOutput,
  SideTotal,
  RoomSideTotal,
} from '../Room/RoomSideStyle';
import StarIcon from '@mui/icons-material/Star';

const PaymentSide = ({
  roomInfo,
  reviews,
  perNight,
  totalPerNight,
  taxPerNight,
  finalTotalPrice,
}) => {
  return (
    <PaymentSideWrapper>
      <PaymentSideInfo>
        <PaymentSideDetail className='sideTop'>
          <PaymentSideImg>
            <img src={roomInfo?.photos?.[0]?.picture} alt='Room' />
          </PaymentSideImg>
          <PaymentSideTop>
            <PayTopTitle>
              <span>
                {' '}
                {roomInfo?.house_type === 'entire_place' && 'Entire home'}
                {roomInfo?.house_type === 'private_room' && 'Private room '}
                {roomInfo?.house_type === 'shared_room' && 'Shared room '}
              </span>
              <p>{roomInfo?.name}</p>
            </PayTopTitle>
            <PayTopRating>
              <span className='strong'>
                <StarIcon sx={{ fontSize: '16px', marginRight: '3px' }} />
              </span>
              <span className='strong'>{roomInfo?.rating?.toFixed(2)}</span>
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
                  {roomInfo?.price?.toLocaleString('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                  })}{' '}
                  x {perNight} nights
                </SideOutput>
                <SideOutput>
                  $
                  {totalPerNight?.toLocaleString('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                  })}
                </SideOutput>
              </li>
              <li>
                <SideOutput className='outputName'>Cleaning fee</SideOutput>
                <SideOutput>
                  $
                  {roomInfo?.cleaning_fee?.toLocaleString('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                  })}
                </SideOutput>
              </li>
              <li>
                <SideOutput className='outputName'>Taxes</SideOutput>
                <SideOutput>
                  $
                  {taxPerNight?.toLocaleString('en-US', {
                    style: 'decimal',
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
              {finalTotalPrice?.toLocaleString('en-US', {
                style: 'decimal',
                minimumFractionDigits: 2,
              })}
            </SideTotal>
          </RoomSideTotal>
        </PaymentSideDetail>
      </PaymentSideInfo>
    </PaymentSideWrapper>
  );
};

export default PaymentSide;
