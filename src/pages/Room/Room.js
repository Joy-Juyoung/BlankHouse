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

const Room = ({ setIsPageMain }) => {
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalPhotoShown, togglePhotoModal] = useState(false);
  const [roomData, setRoomData] = useState('');
  const [reviewData, setReviewData] = useState('');
  const { roomId } = useParams();

  const rooms = useSelector((state) => state.rooms[0]);
  const reviews = useSelector((state) => state.reviews[0]);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    // dispatch(allRoomReviews());
    // dispatch(allRooms());
  }, [dispatch]);

  const getRoom = (id) => {
    roomsDataService
      .getRoomById(id)
      .then((response) => {
        setRoomData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getRoomReview = (id) => {
    reviewsDataService
      .getReviewByRoom(id)
      .then((response) => {
        setReviewData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log('reviewData', reviewData);

  useEffect(() => {
    initFetch();
    setIsPageMain(false);
    getRoom(roomId);
    getRoomReview(roomId);
    // getReviews(roomId);
  }, [initFetch]);

  const handlePhotoShowAll = () => {
    togglePhotoModal(!modalPhotoShown);
    document.body.style.overflow = 'hidden';
  };

  console.log('rooms', roomData);

  if (loading)
    return (
      <div>
        <PageLoading />
      </div>
    );
  return (
    <>
      <RoomInfoHead roomData={roomData} rooms={rooms} reviewData={reviewData} />
      <MainSmallContainer>
        <MainWrap>
          <RoomTopWrap id='viewPhoto'>
            <RoomTopHeader>{roomData?.name}</RoomTopHeader>
            <RoomTopText>
              <RoomTopInfo>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span>{roomData?.rating}</span>
                <span className='coma'>·</span>
                <span>
                  <Link href=''>{reviewData?.length} Reviews</Link>
                </span>
                <span>{roomData?.category?.name}</span>
              </RoomTopInfo>
              <RoomTopInfo>
                <button>
                  <ShareIcon sx={{ fontSize: '18px' }} />
                  <span>Share</span>
                </button>
                <button onClick={(e) => setFav(!fav)}>
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
              <RoomPhotos roomData={roomData} />
              <ShowPhotoBtn onClick={handlePhotoShowAll}>
                <AppsIcon />
                <span>Show all photos</span>
              </ShowPhotoBtn>
            </RoomMainPhotos>

            {/* About plce Modal Open */}
            <ShowPhotoModal
              togglePhotoModal={togglePhotoModal}
              modalPhotoShown={modalPhotoShown}
              roomData={roomData}
            />

            <RoomInfo
              roomData={roomData}
              reviewData={reviewData}
              rooms={rooms}
              roomId={roomId}
            />
          </RoomMainWrap>
        </MainWrap>
      </MainSmallContainer>
    </>
  );
};

export default Room;
