import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MainContainer, MainTop, MainWrap } from '../MainHome/MainStyle';
import {
  RoomDetailsSections,
  RoomDetailsTop,
  RoomMainDetails,
  RoomMainPhotos,
  RoomMainSide,
  RoomMainSideWrap,
  RoomMainWrap,
  RoomMainDetailsWrap,
  RoomPhotoMain,
  RoomPhotoSub,
  RoomTopHeader,
  RoomTopInfo,
  RoomTopText,
  RoomTopWrap,
  RoomDetailSide,
  RoomDetailSideWrap,
  RoomSideReserve,
  RoomSideReport,
  RoomDetailHeader,
  RoomDetailSection,
  DetailHeader,
  DetailHeaderReserve,
  HeaderReserveWrap,
  ReservePrice,
  ReserveReview,
  ReserveBtn,
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
import { RoomData } from '../MainHome/SampleData';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Loading from '../../components/Loading';
import { Skeleton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FlagIcon from '@mui/icons-material/Flag';
import RoomSide from './RoomSide';
import BedIcon from '@mui/icons-material/Bed';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PetsIcon from '@mui/icons-material/Pets';
import TodayIcon from '@mui/icons-material/Today';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import AppsIcon from '@mui/icons-material/Apps';
import ShowMoreModal from '../../components/Modals/ShowMoreModal';
import ShowPhotoModal from '../../components/Modals/ShowPhotoModal';
import SmallReserveButton from '../../components/Buttons/SmallReserveButton';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomById } from '../../redux/slices/rooms';
import roomsDataService from '../../redux/services/RoomsService';

const Room = () => {
  const location = useLocation();
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [modalPhotoShown, togglePhotoModal] = useState(false);
  const [modalAboutPlaceShown, toggleAboutPlaceModal] = useState(false);

  const [roomData, setRoomData] = useState('');
  const { roomId } = useParams();

  const getRoom = (id) => {
    roomsDataService
      .getById(id)
      .then((response) => {
        setRoomData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (roomId) getRoom(roomId);
  }, [roomId]);

  console.log('roomData', roomData);

  const handleClickScroll = (e) => {
    const goPhoto = document.getElementById('viewPhoto');
    const goAmenities = document.getElementById('viewAmenities');
    const goReviews = document.getElementById('viewReviews');
    const goLocation = document.getElementById('viewLocation');

    if (e.target.id === 'vPhoto' && goPhoto) {
      goPhoto.scrollIntoView({ top: 0, behavior: 'smooth' });
    } else if (e.target.id === 'vAmenities' && goAmenities) {
      goAmenities.scrollIntoView({ top: 80, behavior: 'smooth' });
    } else if (e.target.id === 'vReviews' && goReviews) {
      goReviews.scrollIntoView({ behavior: 'smooth' });
    } else if (e.target.id === 'vLocation' && goLocation) {
      goLocation.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 680);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <>
      {scrollPosition >= 800 && (
        <RoomDetailHeader>
          <DetailHeader
            style={{
              display: scrollPosition >= 2033 && 'flex',
            }}
          >
            <DetailHeaderWrap>
              <span id='vPhoto' onClick={handleClickScroll}>
                Photos
              </span>
              <span id='vAmenities' onClick={handleClickScroll}>
                Amenities
              </span>
              <span id='vReviews' onClick={handleClickScroll}>
                Reviews
              </span>
              <span id='vLocation' onClick={handleClickScroll}>
                Location
              </span>
            </DetailHeaderWrap>
            {scrollPosition >= 2033 && (
              <DetailHeaderReserve>
                <HeaderReserveWrap>
                  <ReservePrice>
                    <span>$560.00</span>
                    <span>night</span>
                  </ReservePrice>
                  <ReserveReview>
                    <StarIcon sx={{ fontSize: '16px' }} />
                    <span>{roomData?.rating}</span>
                    <span className='space'>•</span>
                    <span>
                      <Link href=''>000 Reviews</Link>
                    </span>
                  </ReserveReview>
                </HeaderReserveWrap>

                <SmallReserveButton />
              </DetailHeaderReserve>
            )}
          </DetailHeader>
        </RoomDetailHeader>
      )}
      <MainContainer pagesmall={true}>
        <MainWrap>
          <RoomTopWrap id='viewPhoto'>
            <RoomTopHeader>{roomData?.name}</RoomTopHeader>
            <RoomTopText>
              <RoomTopInfo>
                <StarIcon sx={{ fontSize: '16px' }} />
                <span>{roomData?.rating}</span>
                <span className='coma'>·</span>
                <span>
                  <Link href=''>000 Reviews</Link>
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
              <RoomPhotoMain>
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '536px', borderRadius: '10px' }}
                />
              </RoomPhotoMain>
              <RoomPhotoSub>
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
                />
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
                />
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
                />
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '263px', borderRadius: '10px' }}
                />
              </RoomPhotoSub>
              <ShowPhotoBtn
                onClick={() => {
                  togglePhotoModal(!modalPhotoShown);
                }}
              >
                <AppsIcon />
                <span>Show all photos</span>
              </ShowPhotoBtn>
            </RoomMainPhotos>
            {/* About plce Modal Open */}
            <ShowPhotoModal
              togglePhotoModal={togglePhotoModal}
              modalPhotoShown={modalPhotoShown}
            />

            <RoomDetailSection>
              <RoomMainDetails>
                <RoomMainDetailsWrap>
                  <RoomDetailsTop>
                    <div>
                      <h2>Farm stay hosted by Grant</h2>
                      <span>2 guests</span>
                      <span className='coma'>·</span>
                      <span>1 bedroom </span>
                      <span className='coma'>·</span>
                      <span>1 bath</span>
                      <span className='coma'>·</span>
                      <span>1 bath</span>
                    </div>
                    <div>
                      <img src='' alt='' />
                    </div>
                  </RoomDetailsTop>
                  <RoomDetailsSections>
                    <ul>
                      <li>
                        <div>
                          <MeetingRoomIcon />
                        </div>
                        <BasicInfo>
                          <p>Self check-in</p>
                          <span>Check yourself in with the lockbox.</span>
                        </BasicInfo>
                      </li>
                      <li>
                        <div>
                          <PetsIcon />
                        </div>
                        <BasicInfo>
                          <p>Furry friends welcome</p>
                          <span>Bring your pets along for the stay.</span>
                        </BasicInfo>
                      </li>
                      <li>
                        <div>
                          <TodayIcon />
                        </div>
                        <BasicInfo>
                          <p>Free cancellation before Oct. 6.</p>
                          <span></span>
                        </BasicInfo>
                      </li>
                    </ul>
                  </RoomDetailsSections>
                  <RoomDetailsSections>
                    <h2>About this place</h2>
                    <BasicIntro>
                      This private, rustic cottage, nestled on a ridge
                      overlooking the Jumping Pound Creek is your perfect
                      retreat getaway. With 300sq ft of interior living and
                      250sq ft of exterior living you can watch the river valley
                      below from the comfort of your bed or while cuddled up on
                      the porch swing, around the fire. This cottage is fully
                      furnished and has been intentionally designed for a couple
                      who is looking to reconnect with one another and explore
                      the land around. Breakfast fixings are included.
                    </BasicIntro>
                    <ShowMoreBtn
                      onClick={() => {
                        toggleAboutPlaceModal(!modalAboutPlaceShown);
                      }}
                    >
                      <span>Show more</span>
                      <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                    </ShowMoreBtn>
                  </RoomDetailsSections>
                  {/* About plce Modal Open */}
                  <ShowMoreModal
                    toggleAboutPlaceModal={toggleAboutPlaceModal}
                    modalAboutPlaceShown={modalAboutPlaceShown}
                  />

                  <RoomDetailsSections>
                    <h2>Where you'll sleep</h2>
                    <SleepWrap>
                      <BedIcon />
                      <p>Bedroom</p>
                      <span>1 king bed</span>
                    </SleepWrap>
                  </RoomDetailsSections>
                  <RoomDetailsSections id='viewAmenities'>
                    <h2>What this place offers</h2>
                    <PlaceOffers>
                      <PlaceOffersList>
                        <KitchenIcon />
                        <span>Kitchen</span>
                      </PlaceOffersList>
                      <PlaceOffersList>
                        <WifiIcon />
                        <span>Wifi</span>
                      </PlaceOffersList>
                      <PlaceOffersList>
                        <LocalLaundryServiceIcon />
                        <span>Washer</span>
                      </PlaceOffersList>
                      <PlaceOffersList>
                        <TvIcon />
                        <span>Tv</span>
                      </PlaceOffersList>
                      <PlaceOffersList>
                        <MicrowaveIcon />
                        <span>Microwave</span>
                      </PlaceOffersList>
                      <PlaceOffersList>
                        <TvIcon />
                        <span>Tv</span>
                      </PlaceOffersList>
                      <PlaceOffersList>
                        <MicrowaveIcon />
                        <span>Microwave</span>
                      </PlaceOffersList>
                    </PlaceOffers>
                    <ShowAllBtn>Show all 00 Amenities</ShowAllBtn>
                  </RoomDetailsSections>
                  <RoomDetailsSections>
                    <h2>0 nights in Cochrane</h2>
                    <p>Oct. 7, 2023 - Oct. 12, 2023</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateRangeCalendar']}>
                        <DateRangeCalendar />
                      </DemoContainer>
                    </LocalizationProvider>
                  </RoomDetailsSections>
                </RoomMainDetailsWrap>
                <RoomSide loading={loading} RoomData={RoomData} />
              </RoomMainDetails>
              <RoomDetailsSections id='viewReviews'>
                <h2 className='rating'>
                  <StarIcon sx={{ fontSize: '24px', marginRight: '5px' }} />
                  <span>4.99 / 000 reviews</span>
                </h2>
                <div>Average graph</div>
                <div>Reviews</div>
                <ShowAllBtn>Show all 00 Reviews</ShowAllBtn>
              </RoomDetailsSections>
              <RoomDetailsSections id='viewLocation'>
                <h2>Where you’ll be</h2>
                <div>Map</div>
                <p>Cochrane, Alberta, Canada</p>
                <span>
                  The historic town of Cochrane is 5min to the East of us and
                  the historic Wine Glass Ranch, established in 1885, are our
                  direct neighbours to the West.
                </span>
                <ShowMoreBtn>
                  <span>Show more</span>
                  <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                </ShowMoreBtn>
              </RoomDetailsSections>
              <RoomDetailsSections>
                <h2>Hosted by Grant</h2>
                <div>Host Info</div>
              </RoomDetailsSections>
              <RoomDetailsSections>
                <h2>Things to know</h2>
                <ThingsToKnow>
                  <ThingsWrap>
                    <ThingsTitle>House rules</ThingsTitle>
                    <ThingsList>Check-in: 3:00 p.m.–8:00 p.m.</ThingsList>
                    <ThingsList>Checkout before 11:00 a.m.</ThingsList>
                    <ThingsList>2 guests maximum</ThingsList>
                    <ShowMoreBtn>
                      <span>Show more</span>
                      <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                    </ShowMoreBtn>
                  </ThingsWrap>
                  <ThingsWrap>
                    <ThingsTitle>Safety & property</ThingsTitle>
                    <ThingsList>Carbon monoxide alarm</ThingsList>
                    <ThingsList>Smoke alarm</ThingsList>
                    <ThingsList>Must climb stairs</ThingsList>
                    <ShowMoreBtn>
                      <span>Show more</span>
                      <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                    </ShowMoreBtn>
                  </ThingsWrap>
                  <ThingsWrap>
                    <ThingsTitle>Cancellation policy</ThingsTitle>
                    <ThingsList>Free cancellation before Oct. 6.</ThingsList>
                    <ThingsList>
                      Review the Host’s full cancellation policy, which applies
                      even if you cancel for illness or disruptions caused by
                      COVID-19.
                    </ThingsList>
                    <ShowMoreBtn>
                      <span>Show more</span>
                      <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                    </ShowMoreBtn>
                  </ThingsWrap>
                </ThingsToKnow>
              </RoomDetailsSections>
              {/* </RoomMainDetailsWrap>
                <RoomSide loading={loading} RoomData={RoomData} /> */}
              {/* </RoomMainDetails> */}
            </RoomDetailSection>
          </RoomMainWrap>
        </MainWrap>
      </MainContainer>
    </>
  );
};

export default Room;
