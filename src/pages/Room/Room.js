import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { MainSmallContainer, MainWrap } from '../MainHome/MainStyle';
import {
  RoomDetailsSections,
  RoomDetailsTop,
  RoomMainDetails,
  RoomMainPhotos,
  RoomMainWrap,
  RoomMainDetailsWrap,
  RoomPhotoMain,
  RoomPhotoSub,
  RoomTopHeader,
  RoomTopInfo,
  RoomTopText,
  RoomTopWrap,
  RoomDetailHeader,
  RoomDetailSection,
  DetailHeader,
  DetailHeaderReserve,
  HeaderReserveWrap,
  ReservePrice,
  ReserveReview,
  DetailHeaderWrap,
  ShowMoreBtn,
  ShowAllBtn,
  ThingsToKnow,
  ThingsWrap,
  ThingsTitle,
  ThingsList,
  SleepWrap,
  BasicInfo,
  BasicIntro,
  PlaceOffers,
  PlaceOffersList,
  ShowPhotoBtn,
} from './RoomStyle';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Loading from '../../components/Loading';
import AppsIcon from '@mui/icons-material/Apps';
import ShowPhotoModal from '../../components/Modals/ShowPhotoModal';

import roomsDataService from '../../redux/services/RoomsService';
import { allReviews } from '../../redux/slices/reviews';
import RoomDetailHead from './RoomDetailHead';
import PhotoMainSk from './Skeletons/PhotoMainSk';
import PhotoSubSk from './Skeletons/PhotoSubSk';
import RoomDetails from './RoomDetails';
import { allRooms } from '../../redux/slices/rooms';

const Room = ({ setIsPageMain }) => {
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [modalPhotoShown, togglePhotoModal] = useState(false);
  // const [reviewData, setReviewData] = useState('');
  const [roomData, setRoomData] = useState('');
  const { roomId } = useParams();
  const [roomInfo, setRoomInfo] = useState('');

  const reviews = useSelector((state) => state.reviews);
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(allReviews());
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

  // const getReviews = (id) => {
  //   reviewsDataService
  //     .getReviewById(id)
  //     .then((response) => {
  //       setReviewData(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  useEffect(() => {
    setIsPageMain(false);
    getRoom(roomId);
    initFetch();
    // getReviews(roomId);
  }, [initFetch]);

  useEffect(() => {
    dispatch(allRooms());
  }, [roomId]);

  // console.log('roomData', roomData);
  // console.log('reviews', reviews);
  // console.log('rooms', rooms);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 680);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY); // => scroll position
  };
  // console.log(scrollPosition);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePhotoShowAll = () => {
    togglePhotoModal(!modalPhotoShown);
    document.body.style.overflow = 'hidden';
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <>
      {scrollPosition >= 800 && (
        <RoomDetailHead roomData={roomData} rooms={rooms} reviews={reviews} />
      )}
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
                  <Link href=''>{reviews?.length} Reviews</Link>
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
              <PhotoMainSk roomData={roomData} />
              <PhotoSubSk roomData={roomData} />
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

            <RoomDetails
              roomData={roomData}
              reviews={reviews}
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
