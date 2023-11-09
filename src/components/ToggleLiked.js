import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoomLike, ToggleLike } from '../pages/MainHome/MainStyle';
import {
  addRoomWishlistAsync,
  RoomAddWishlist,
} from '../redux/slices/wishlistSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ToggleLiked = ({ room, roomInfo, roomId, isPhotoFav, roomData }) => {
  const [fav, setFav] = useState(false);
  const [roomPk, setRoomPk] = useState();

  const addwishlistToRoom = useSelector(RoomAddWishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roomData) {
      const isLiked = roomData?.is_liked || false;
      setFav(isLiked);
    }
    if (roomInfo) {
      const isLiked = roomInfo?.is_liked || false;
      setFav(isLiked);
    }
  }, [room, roomInfo, isPhotoFav, roomData]);

  const handleLiked = (pk) => {
    setRoomPk(pk);
    dispatch(addRoomWishlistAsync({ room_pk: pk }));
    setFav(!fav);
  };

  return (
    <ToggleLike
      onClick={(e) => {
        e.preventDefault();
        handleLiked(roomData?.pk || roomId);
      }}
    >
      <RoomLike className={roomData ? 'card' : 'detail'}>
        {fav ? (
          <FavoriteIcon sx={{ color: '#e20000' }} />
        ) : (
          <FavoriteBorderIcon
            sx={{
              color: roomData ? '#fff' : '#000',
              fontSize: !roomData && '24px',
            }}
          />
        )}

        {!roomData && <span>Save</span>}
      </RoomLike>
    </ToggleLike>
  );
};

export default ToggleLiked;
