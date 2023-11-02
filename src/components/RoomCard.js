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
import ToggleLiked from './ToggleLiked';
import PageLoading from './Loading/PageLoading';

const RoomCard = ({ wishRoom, room, loading, userMe }) => {
  const [isBtnShown, setIsBtnShown] = useState(false);
  // const [roomId, setRoomId] = useState(room?.pk);
  const [roomData, setRoomData] = useState();

  useEffect(() => {
    if (wishRoom) {
      setRoomData(wishRoom);
    } else {
      setRoomData(room);
    }
  }, [wishRoom, room]);

  return (
    <>
      {loading ? (
        <RoomEachSk />
      ) : (
        <RoomsEach
          onMouseEnter={() => setIsBtnShown(true)}
          onMouseLeave={() => setIsBtnShown(false)}
        >
          <MainRoomSlider
            // room={room}
            isBtnShown={isBtnShown}
            roomData={roomData}
          />

          {userMe && <ToggleLiked room={room} roomData={roomData} />}

          <RoomEachDetails>
            <RoomTitle>
              {roomData?.name?.length > 20 ? (
                <p>{roomData?.name?.substring(0, 20)}...</p>
              ) : (
                <p>{roomData?.name}</p>
              )}
              <RoomRating>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span>{roomData?.rating?.toFixed(2)}</span>
              </RoomRating>
            </RoomTitle>
            <RoomDesc>
              {roomData?.house_type === 'entire_place' && 'Entire place '}
              {roomData?.house_type === 'private_room' && 'Private room '}
              {roomData?.house_type === 'shared_room' && 'Shared room '}
              in {roomData?.city}, {roomData?.country}
            </RoomDesc>
            <RoomPrice>
              <p>${roomData?.price?.toFixed(2)}</p>
              <span>night</span>
            </RoomPrice>
          </RoomEachDetails>

          {/* <RoomEachDetails>
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
              {room?.house_type === 'entire_place' && 'Entire place '}
              {room?.house_type === 'private_room' && 'Private room '}
              {room?.house_type === 'shared_room' && 'Shared room '}
              in {room?.city}, {room?.country}
            </RoomDesc>
            <RoomPrice>
              <p>${room?.price?.toFixed(2)}</p>
              <span>night</span>
            </RoomPrice>
          </RoomEachDetails> */}
        </RoomsEach>
      )}
    </>
  );
};

export default RoomCard;
