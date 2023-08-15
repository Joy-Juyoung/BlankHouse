import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoomLike, ToggleLike } from '../pages/MainHome/MainStyle';
import {
  addRoomWishlistAsync,
  RoomAddWishlist,
} from '../redux/slices/wishlistSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ToggleLiked = ({ room, roomInfo, roomId }) => {
  const [fav, setFav] = useState(false);
  const [roomPk, setRoomPk] = useState();

  const addwishlistToRoom = useSelector(RoomAddWishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (room) {
      const isLiked = room.is_liked || false;
      setFav(isLiked);
    }
    if (roomInfo) {
      const isLiked = roomInfo.is_liked || false;
      setFav(isLiked);
    }
  }, [room, roomInfo]);

  const handleLiked = (pk) => {
    setRoomPk(pk);
    dispatch(addRoomWishlistAsync({ room_pk: pk }));
    setFav(!fav);
  };

  return (
    <ToggleLike
      onClick={(e) => {
        e.preventDefault();
        handleLiked(room?.pk || roomId);
      }}
    >
      <RoomLike className={room ? 'card' : 'detail'}>
        {fav ? (
          <FavoriteIcon sx={{ color: '#e20000' }} />
        ) : (
          <FavoriteBorderIcon
            sx={{ color: room ? '#fff' : '#000', fontSize: !room && '20px' }}
          />
        )}
      </RoomLike>
    </ToggleLike>
  );
};

export default ToggleLiked;
