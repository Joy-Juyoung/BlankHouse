import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { MainSmallContainer, MainWrap } from '../MainHome/MainStyle';
import {
  RoomMainPhotos,
  RoomMainWrap,
  RoomTopHeader,
  RoomTopInfo,
  RoomTopText,
  RoomTopWrap,
  ShowPhotoBtn,
} from './RoomStyle';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppsIcon from '@mui/icons-material/Apps';
import ShowPhotoModal from '../../components/Show/ShowPhotoModal';
import RoomInfoHead from './RoomInfoHead';
import RoomInfo from './RoomInfo';
import RoomPhotos from './RoomPhotos';
import PageLoading from '../../components/Loading/PageLoading';
import { getRoomInfo, getRoomsByIdAsync } from '../../redux/slices/roomSlice';
import {
  getAllReviewByRoomInfo,
  getReviewByRoomIdAsync,
} from '../../redux/slices/roomReviewSlice';

const Room = ({ setIsPageMain }) => {
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalPhotoShown, togglePhotoModal] = useState(false);

  const { roomId } = useParams();
  const roomInfo = useSelector(getRoomInfo);
  const roomReviewInfo = useSelector(getAllReviewByRoomInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsPageMain(false);
    dispatch(getRoomsByIdAsync({ roomId }));
    dispatch(getReviewByRoomIdAsync({ roomId }));
  }, [dispatch, roomId]);

  const handlePhotoShowAll = () => {
    togglePhotoModal(!modalPhotoShown);
    document.body.style.overflow = 'hidden';
  };

  console.log('roomsById', roomInfo);
  console.log('roomReviews', roomReviewInfo);

  if (loading) {
    return (
      <div>
        <PageLoading />
      </div>
    );
  }

  return (
    <>
      <RoomInfoHead roomInfo={roomInfo} roomReviewInfo={roomReviewInfo} />
      <MainSmallContainer>
        <MainWrap>
          <RoomTopWrap id='viewPhoto'>
            <RoomTopHeader>{roomInfo?.name}</RoomTopHeader>
            <RoomTopText>
              <RoomTopInfo>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span className='strong'>{roomInfo?.rating}</span>
                <span className='coma'>·</span>
                <span>
                  <Link href=''>{roomReviewInfo?.length} Reviews</Link>
                </span>
                <span className='coma'>·</span>
                <span>
                  <Link
                    to={`https://maps.google.com/maps/place/${roomInfo?.address}+${roomInfo?.city}`}
                    target='_blank'
                  >
                    {roomInfo?.address}, {roomInfo?.city}
                  </Link>
                </span>
              </RoomTopInfo>
              <RoomTopInfo>
                <button>
                  <ShareIcon sx={{ fontSize: '18px' }} />
                  <span>Share</span>
                </button>
                <button onClick={() => setFav(!fav)}>
                  {fav ? (
                    <FavoriteIcon sx={{ fontSize: '18px', color: '#e20000' }} />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{ fontSize: '18px', color: '#000' }}
                    />
                  )}
                  <span>Save</span>
                </button>
              </RoomTopInfo>
            </RoomTopText>
          </RoomTopWrap>
          <RoomMainWrap>
            <RoomMainPhotos>
              <RoomPhotos roomInfo={roomInfo} />
              <ShowPhotoBtn onClick={handlePhotoShowAll}>
                <AppsIcon />
                <span>Show all photos</span>
              </ShowPhotoBtn>
            </RoomMainPhotos>

            {/* About place Modal Open */}
            <ShowPhotoModal
              togglePhotoModal={togglePhotoModal}
              modalPhotoShown={modalPhotoShown}
              roomInfo={roomInfo}
            />

            <RoomInfo
              roomInfo={roomInfo}
              roomId={roomId}
              roomReviewInfo={roomReviewInfo}
            />
          </RoomMainWrap>
        </MainWrap>
      </MainSmallContainer>
    </>
  );
};

export default Room;
