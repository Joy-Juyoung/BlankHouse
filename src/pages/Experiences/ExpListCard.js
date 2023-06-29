import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';


import {   RoomDesc,
  RoomEachDetails,
  RoomEachPhoto,
  RoomLike,
  RoomPrice,
  RoomRating,
  RoomsEach,
  RoomTitle,
  ToggleLike, } from './ExperienceStyle';



const ExpListCard = ({ experiences }) => {
  const [fav, setFav] = useState(false);

  return (
    <RoomsEach  to='/experiences/detail'>
      <RoomEachPhoto src={experiences.photo} alt='' />
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
          <RoomRating>
            <StarIcon sx={{ fontSize: '16px' }} />
            <span>{experiences.rating}</span>
          </RoomRating>
        </RoomTitle>
        <RoomTitle>
          <p>{experiences.title}</p>
        </RoomTitle>
        <RoomPrice>
          <p>From ${experiences.price}CAD</p>
          <span>/person</span>
        </RoomPrice>
      </RoomEachDetails>
    </RoomsEach>
  );
};

export default ExpListCard;
