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
import AppsIcon from '@mui/icons-material/Apps';
import ShowPhotoModal from '../../components/Show/ShowPhotoModal';
import RoomInfoHead from './RoomInfoHead';
import RoomInfo from './RoomInfo';
import RoomPhotos from './RoomPhotos';
import { getRoomInfo, getRoomsByIdAsync } from '../../redux/slices/roomSlice';
import {
  getAllRoomReviews,
  getAllRoomReviewsAsync,
} from '../../redux/slices/roomReviewSlice';
import ToggleLiked from '../../components/ToggleLiked';
import RoomTopSk from './Skeletons/RoomTopSk';
import ShowSmallModal from '../../components/Show/ShowSmallModal';

const Room = ({ setIsPageMain }) => {
  const [loading, setLoading] = useState(false);
  const [modalPhotoShown, togglePhotoModal] = useState(false);
  const [isPhotoFav, setIsPhotoFav] = useState(false);
  const [modalReviewShown, toggleReviewModal] = useState(false);
  const [isShowReviews, setIsShowReviews] = useState(false);

  const [modalShareShown, toggleShareModal] = useState(false);

  const [roomReviewAll, setRoomReviewAll] = useState([]);

  const { roomId } = useParams();
  const roomInfo = useSelector(getRoomInfo);
  const allRoomReviewInfo = useSelector(getAllRoomReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoomReviewsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(allRoomReviewInfo)) {
      setRoomReviewAll(
        allRoomReviewInfo.filter((review) => review.room.pk === roomInfo?.pk)
      );
    }
  }, [roomId, allRoomReviewInfo]);

  useEffect(() => {
    setIsPageMain(false);
    setLoading(true);
    dispatch(getRoomsByIdAsync({ roomId }))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, [dispatch, roomId]);

  const handlePhotoShowAll = () => {
    togglePhotoModal(!modalPhotoShown);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    if (modalPhotoShown === true) {
      setIsPhotoFav(true);
    } else {
      setIsPhotoFav(false);
    }
  }, [modalPhotoShown]);

  return (
    <>
      <RoomInfoHead roomInfo={roomInfo} roomReviewAll={roomReviewAll} />
      <MainSmallContainer>
        <MainWrap>
          <RoomTopWrap id='viewPhoto'>
            {loading ? (
              <RoomTopSk />
            ) : (
              <>
                <RoomTopHeader>{roomInfo?.name}</RoomTopHeader>
                <RoomTopText>
                  <RoomTopInfo>
                    <StarIcon sx={{ fontSize: '16px' }} />
                    <span className='strong'>
                      {roomInfo?.rating?.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                    <span className='coma'>·</span>
                    <span
                      onClick={() => {
                        toggleReviewModal(!modalReviewShown);
                        setIsShowReviews(!isShowReviews);
                      }}
                    >
                      {roomReviewAll?.length} Reviews
                    </span>
                    <span className='coma'>·</span>
                    <span
                      onClick={() =>
                        window.open(
                          `https://maps.google.com/maps/place/${roomInfo?.address}+${roomInfo?.city}`,
                          '_blank'
                        )
                      }
                      className='newTab'
                    >
                      {roomInfo?.address}, {roomInfo?.city}, {roomInfo?.country}
                    </span>
                  </RoomTopInfo>
                  <RoomTopInfo>
                    <button
                      className='share'
                      onClick={() => {
                        toggleShareModal(!modalShareShown);
                      }}
                    >
                      <ShareIcon sx={{ fontSize: '18px' }} />
                      <span>Share</span>
                    </button>
                    <button>
                      <ToggleLiked
                        roomInfo={roomInfo}
                        roomId={roomId}
                        isPhotoFav={isPhotoFav}
                      />
                    </button>
                  </RoomTopInfo>
                </RoomTopText>
                <ShowSmallModal
                  toggleShareModal={toggleShareModal}
                  modalShareShown={modalShareShown}
                  roomInfo={roomInfo}
                />
              </>
            )}
          </RoomTopWrap>

          {/* Room Photos */}
          <RoomMainWrap>
            <RoomMainPhotos>
              <RoomPhotos loading={loading} roomInfo={roomInfo} />
              <ShowPhotoBtn onClick={handlePhotoShowAll}>
                <AppsIcon />
                <span>Show all photos</span>
              </ShowPhotoBtn>
            </RoomMainPhotos>

            {/* Photo Modal Open */}
            <ShowPhotoModal
              togglePhotoModal={togglePhotoModal}
              modalPhotoShown={modalPhotoShown}
              roomInfo={roomInfo}
              roomId={roomId}
              isPhotoFav={isPhotoFav}
              loading={loading}
            />

            <RoomInfo
              loading={loading}
              roomInfo={roomInfo}
              roomId={roomId}
              roomReviewInfo={roomReviewAll}
              roomReviewAll={roomReviewAll}
              toggleReviewModal={toggleReviewModal}
              modalReviewShown={modalReviewShown}
              setIsShowReviews={setIsShowReviews}
              isShowReviews={isShowReviews}
            />
          </RoomMainWrap>
        </MainWrap>
      </MainSmallContainer>
    </>
  );
};

export default Room;
