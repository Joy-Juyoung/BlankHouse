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
import ToggleLiked from '../../components/ToggleLiked';

const Room = ({ setIsPageMain }) => {
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalPhotoShown, togglePhotoModal] = useState(false);
  const [per_page, setPer_page] = useState('6');
  const [page, setpage] = useState('1');

  const { roomId } = useParams();
  const roomInfo = useSelector(getRoomInfo);
  const roomReviewInfo = useSelector(getAllReviewByRoomInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsPageMain(false);
    dispatch(getRoomsByIdAsync({ roomId }));
    dispatch(getReviewByRoomIdAsync({ roomId, per_page, page }));
  }, [dispatch, roomId]);

  const handlePhotoShowAll = () => {
    togglePhotoModal(!modalPhotoShown);
    document.body.style.overflow = 'hidden';
  };

  // console.log('roomsById', roomInfo);
  // console.log('roomReviews', roomReviewInfo);
  // console.log('page_size', roomReviewInfo?.page_size);

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
                  <Link href=''>{roomReviewInfo?.total_objects} Reviews</Link>
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
                <button className='share'>
                  <ShareIcon sx={{ fontSize: '18px' }} />
                  <span>Share</span>
                </button>
                <button>
                  <ToggleLiked roomInfo={roomInfo} roomId={roomId} />
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
              setPer_page={setPer_page}
              per_page={per_page}
              setpage={setpage}
            />
          </RoomMainWrap>
        </MainWrap>
      </MainSmallContainer>
    </>
  );
};

export default Room;
