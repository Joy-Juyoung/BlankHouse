import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import {
  RoomDesc,
  RoomEachDetails,
  RoomLike,
  RoomPrice,
  RoomRating,
  RoomsEach,
  RoomTitle,
  ToggleLike,
} from '../pages/MainHome/MainStyle';
import RoomEachSk from '../pages/MainHome/Skeletons/MainEachSk';
import MainRoomSlider from '../pages/MainHome/MainRoomSlider';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRoomWishlistAsync,
  RoomAddEishlist,
  RoomAddWishlist,
} from '../redux/slices/wishlistSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoomCard = ({ room, loading }) => {
  const [fav, setFav] = useState(false);
  const [isBtnShown, setIsBtnShown] = useState(false);
  const [roomId, setRoomId] = useState(room?.pk);

  const addwishlistToRoom = useSelector(RoomAddWishlist);
  const dispatch = useDispatch();

  const handleLiked = () => {
    dispatch(addRoomWishlistAsync(room?.pk))
      .then(() => {
        setFav(!fav);
      })
      .catch((error) => {
        console.error(error);
        toast.error('Logout failed. Please try again.');
      });
    // dispatch(addRoomWishlistAsync({ roomId }));
    // }
  };

  useEffect(() => {
    // if (fav) {
    // }
  }, [fav, roomId]);

  console.log('room?.rooms', addwishlistToRoom);

  return (
    <>
      {loading ? (
        <RoomEachSk />
      ) : (
        <RoomsEach
          onMouseEnter={() => setIsBtnShown(true)}
          onMouseLeave={() => setIsBtnShown(false)}
        >
          <MainRoomSlider room={room} isBtnShown={isBtnShown} />
          <ToggleLike
            onClick={(e) => {
              e.preventDefault();
              // setFav(!fav);
              handleLiked(room?.pk);
            }}
          >
            <RoomLike>
              {fav ? (
                <FavoriteIcon sx={{ color: '#e20000' }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: '#fff' }} />
              )}
            </RoomLike>
          </ToggleLike>

          <RoomEachDetails>
            <RoomTitle>
              {room?.name?.length > 20 ? (
                <p>{room?.name?.substring(0, 20)}...</p>
              ) : (
                <p>{room?.name}</p>
              )}
              <RoomRating>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span>{room?.rating?.toFixed(2)}</span>
              </RoomRating>
            </RoomTitle>
            <RoomDesc>
              {/* {room?.house_type} */}
              {room?.house_type === 'entire_place' && 'Entire '}
              {room?.house_type === 'private_room' && 'Private room '}
              {room?.house_type === 'shared_room' && 'Shared room '}
              {room?.category?.name?.toLowerCase()}
              in
              {room?.city}
            </RoomDesc>
            <RoomPrice>
              <p>${room?.price?.toFixed(2)}</p>
              <span>night</span>
            </RoomPrice>
          </RoomEachDetails>
        </RoomsEach>
      )}
    </>
  );
};

export default RoomCard;
