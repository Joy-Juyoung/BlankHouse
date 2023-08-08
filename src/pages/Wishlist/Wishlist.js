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

const Wishlist = ({ setIsPageMain }) => {
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
          <MainMidWrap className='wish'>
            {wishListForRoom?.map((wishRoom, index) => {
              return (
                <Link key={index} to={`/room/${wishRoom?.pk}`}>
                  <RoomCard room={wishRoom} />
                </Link>
              );
            })}
          </MainMidWrap>
        </MainMid>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Wishlist;
