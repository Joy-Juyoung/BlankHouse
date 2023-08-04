import React, { useCallback, useEffect, useRef, useState } from 'react';
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
// import Loading from '../../components/Loading';
import AppsIcon from '@mui/icons-material/Apps';
import ShowPhotoModal from '../../components/Show/ShowPhotoModal';
import roomsDataService from '../../redux/services/RoomsService';
import reviewsDataService from '../../redux/services/ReviewsService';
import { allReviews, allRoomReviews } from '../../redux/slices/reviews';
import RoomInfoHead from './RoomInfoHead';
import RoomInfo from './RoomInfo';
import { allRooms } from '../../redux/slices/rooms';
import RoomPhotos from './RoomPhotos';
import PageLoading from '../../components/Loading/PageLoading';
import {
  getAllRoomReviewsAsync,
  selectReview,
} from '../../redux/slices/reviewSlice';
import {
  getRoomsByIdAsync,
  selectRoom,
  selectRoomById,
} from '../../redux/slices/roomSlice';
// import { selectRoomById } from '../../redux/slices/roomSlice';

const Room = ({ setIsPageMain }) => {
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalPhotoShown, togglePhotoModal] = useState(false);

  const { roomId } = useParams();
  const dispatch = useDispatch();

  // const roomsById = useSelector(selectRoom);
  const roomsById = useSelector((state) => state.room[roomId]);

  useEffect(() => {
    setIsPageMain(false);
    dispatch(getAllRoomReviewsAsync());
    dispatch(getRoomsByIdAsync({ id: Number(roomId) }))
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch, roomId]);

  const handlePhotoShowAll = () => {
    togglePhotoModal(!modalPhotoShown);
    document.body.style.overflow = 'hidden';
  };

  console.log('roomsById', roomsById);

  if (loading) {
    return (
      <div>
        <PageLoading />
      </div>
    );
  }

  return (
    <>
      <RoomInfoHead roomsById={roomsById} />
      <MainSmallContainer>
        <MainWrap>
          <RoomTopWrap id='viewPhoto'>
            <RoomTopHeader>{roomsById?.name}</RoomTopHeader>
            <RoomTopText>
              <RoomTopInfo>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span>{roomsById?.rating}</span>
                <span className='coma'>·</span>
                <span>
                  <Link href=''>{roomsById?.reviews?.length} Reviews</Link>
                </span>
                <span>{roomsById?.category?.name}</span>
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
              <RoomPhotos roomsById={roomsById} />
              <ShowPhotoBtn onClick={handlePhotoShowAll}>
                <AppsIcon />
                <span>Show all photos</span>
              </ShowPhotoBtn>
            </RoomMainPhotos>

            {/* About place Modal Open */}
            <ShowPhotoModal
              togglePhotoModal={togglePhotoModal}
              modalPhotoShown={modalPhotoShown}
              roomsById={roomsById}
            />

            <RoomInfo roomsById={roomsById} roomId={roomId} />
          </RoomMainWrap>
        </MainWrap>
      </MainSmallContainer>
    </>
  );
};

export default Room;
