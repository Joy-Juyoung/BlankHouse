import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

import DefaultImg from '../../assets/images/soon.jpg';

import Room1 from '../../assets/images/houseSample/room-1.jpg';
import {
  RoomDesc,
  RoomEachDetails,
  RoomEachPhoto,
  RoomLike,
  RoomPrice,
  RoomRating,
  RoomsEach,
  RoomTitle,
  ToggleLike,
} from './MainStyle';

const MainListCard = ({ room }) => {
  const [fav, setFav] = useState(false);

  return (
    <RoomsEach to=''>
      <RoomEachPhoto src={room.photo} alt='' />
      <ToggleLike onClick={(e) => setFav(!fav)}>
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
          <p>{room.title}</p>
          <RoomRating>
            <StarIcon sx={{ fontSize: '16px' }} />
            <span>{room.rating}</span>
          </RoomRating>
        </RoomTitle>
        <RoomDesc>{room.descripton}</RoomDesc>
        <RoomPrice>
          <p>${room.price}</p>
          <span>night</span>
        </RoomPrice>
      </RoomEachDetails>
    </RoomsEach>
  );
};

export default MainListCard;
