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
  ToggleLike, } from './OnlineExpStyle';

import OnlineSlider from './OnlineSlider';




const OnlineCard = ({ experience, loading,exIndex }) => {
  const [fav, setFav] = useState(false);
  const [isMouseHover, setIsMouseHover] = useState(false);

  return (
    <RoomsEach  to='/experiences/detail'>
      <OnlineSlider experience={experience} 
                isMouseHover={isMouseHover}
                setIsMouseHover={setIsMouseHover}
                exIndex={exIndex}
                 />
      {/* <RoomEachPhoto src={experiences.photo} alt='' /> */}
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
            <span>{experience?.experience_rating}</span>
          </RoomRating>
        </RoomTitle>
        <RoomTitle>
          <p>{experience?.title}</p>
        </RoomTitle>
        <RoomPrice>
          <p>From ${experience?.price}CAD</p>
          <span>/person</span>
        </RoomPrice>
      </RoomEachDetails>
    </RoomsEach>
  );
};

export default OnlineCard;
