import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
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
import { Skeleton } from '@mui/material';
import MainPhotoSlider from './MainPhotoSlider';

const MainListCard = ({ room, loading }) => {
  const [fav, setFav] = useState(false);
  const [slideIndex, setSlideIndex] = useState([]);

  useEffect(() => {
    setSlideIndex(room);
  }, []);

  // console.log('slideIndex', slideIndex?.photo);

  return (
    <>
      {loading ? (
        <RoomsEach>
          <Skeleton
            variant='rect'
            animation='wave'
            sx={{ width: '100%', height: '75%', borderRadius: '10px' }}
          />
          <RoomEachDetails>
            <RoomTitle>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{
                  width: '50%',
                  height: '16px',
                  borderRadius: '5px',
                  marginTop: '5px',
                }}
              />
            </RoomTitle>
            <RoomDesc>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{
                  width: '50%',
                  height: '14px',
                  borderRadius: '5px',
                  marginTop: '5px',
                }}
              />
            </RoomDesc>
            <RoomPrice>
              <Skeleton
                variant='rect'
                animation='wave'
                sx={{
                  width: '50%',
                  height: '16px',
                  borderRadius: '5px',
                  marginTop: '5px',
                  marginLeft: '0px !important',
                }}
              />
            </RoomPrice>
          </RoomEachDetails>
        </RoomsEach>
      ) : (
        <RoomsEach>
          {/* {room.photo.lenght > 1 ? ( */}
          <MainPhotoSlider room={room} slideIndex={slideIndex} />
          {/* ) : ( */}
          {/* <RoomEachPhoto src={room.photo[0]} alt='' /> */}
          {/* )} */}
          <ToggleLike
            onClick={(e) => {
              e.preventDefault();
              setFav(!fav);
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
      )}
    </>
  );
};

export default MainListCard;
