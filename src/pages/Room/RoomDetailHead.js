import React, { useEffect, useState } from 'react';
import {
  RoomDetailHeader,
  DetailHeader,
  DetailHeaderReserve,
  HeaderReserveWrap,
  ReservePrice,
  ReserveReview,
  DetailHeaderWrap,
} from './RoomStyle';
import SmallReserveButton from '../../components/Buttons/SmallReserveButton';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const RoomDetailHead = ({ roomData, reviews, rooms }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClickScroll = (e) => {
    const goPhoto = document.getElementById('viewPhoto');
    const goAmenities = document.getElementById('viewAmenities');
    const goReviews = document.getElementById('viewReviews');
    const goLocation = document.getElementById('viewLocation');

    if (e.target.id === 'vPhoto' && goPhoto) {
      goPhoto.scrollIntoView({ top: 0, behavior: 'smooth' });
    } else if (e.target.id === 'vAmenities' && goAmenities) {
      goAmenities.scrollIntoView({ top: 80, behavior: 'smooth' });
    } else if (e.target.id === 'vReviews' && goReviews) {
      goReviews.scrollIntoView({ behavior: 'smooth' });
    } else if (e.target.id === 'vLocation' && goLocation) {
      goLocation.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY); // => scroll position
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <RoomDetailHeader>
      <DetailHeader
        style={{
          display: scrollPosition >= 2033 && 'flex',
        }}
      >
        <DetailHeaderWrap>
          <span id='vPhoto' onClick={handleClickScroll}>
            Photos
          </span>
          <span id='vAmenities' onClick={handleClickScroll}>
            Amenities
          </span>
          <span id='vReviews' onClick={handleClickScroll}>
            Reviews
          </span>
          <span id='vLocation' onClick={handleClickScroll}>
            Location
          </span>
        </DetailHeaderWrap>
        {scrollPosition >= 2033 && (
          <DetailHeaderReserve>
            <HeaderReserveWrap>
              <ReservePrice>
                <span>${roomData?.price?.toFixed(2)}</span>
                <span>night</span>
              </ReservePrice>
              <ReserveReview>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span>{roomData?.rating?.toFixed(2)}</span>
                <span className='coma'>·</span>
                <span>
                  <Link href=''>{reviews?.length} Reviews</Link>
                </span>
              </ReserveReview>
            </HeaderReserveWrap>

            <SmallReserveButton />
          </DetailHeaderReserve>
        )}
      </DetailHeader>
    </RoomDetailHeader>
  );
};

export default RoomDetailHead;
