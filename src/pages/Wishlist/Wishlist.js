import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RoomCard from '../../components/RoomCard';
import {
  getWishlistAsync,
  RoomAllWishlist,
} from '../../redux/slices/wishlistSlice';
import {
  MainMid,
  MainMidWrap,
  MainSmallContainer,
  MainWrap,
} from '../MainHome/MainStyle';
import { RoomTopHeader, RoomTopWrap } from '../Room/RoomStyle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import { EmptyReview } from '../Room/RoomReviewsStyle';

const Wishlist = ({ setIsPageMain, userMe }) => {
  const wishListForRoom = useSelector(RoomAllWishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(getWishlistAsync());
    setIsPageMain(false);
  }, [dispatch]);

  console.log('wishListForRoom', wishListForRoom);

  return (
    <MainSmallContainer>
      <MainWrap>
        <RoomTopWrap>
          <RoomTopHeader>Wishlist</RoomTopHeader>
        </RoomTopWrap>
        <MainMid>
          {wishListForRoom?.length === 0 ? (
            <EmptyReview>
              <FavoriteBorderIcon sx={{ fontSize: 48 }} color='disabled' />
              <p>Your wish list is empty.</p>
            </EmptyReview>
          ) : (
            <MainMidWrap className='wish'>
              {wishListForRoom?.map((wishRoom, index) => {
                return (
                  <Link key={index} to={`/room/${wishRoom?.pk}`}>
                    <RoomCard wishRoom={wishRoom} userMe={userMe} />
                  </Link>
                );
              })}
            </MainMidWrap>
          )}
        </MainMid>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Wishlist;
