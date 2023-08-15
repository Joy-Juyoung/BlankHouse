import React, { useEffect, useState } from 'react';
import {
  RoomDetailsSections,
  RoomDetailsTop,
  RoomMainDetails,
  RoomMainDetailsWrap,
  RoomDetailSection,
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
  AvatarHost,
} from './RoomStyle';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RoomSide from './RoomSide';
import BedIcon from '@mui/icons-material/Bed';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PetsIcon from '@mui/icons-material/Pets';
import TodayIcon from '@mui/icons-material/Today';

// import ShowMoreModal from '../../components/Modals/ShowMoreModalLayout';
// import SearchDateBox from '../../components/Dropdown/SearchDateBox';
import DateRange from '../../components/DateRange';
import RoomReviews from './RoomReviews';
import Avatar from '../../components/Avatar/Avatar';
import ShowMoreModal from '../../components/Show/ShowMoreModal';
import RoomAmenity from './RoomAmenity';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllAmenity,
  getAllAmenityAsync,
} from '../../redux/slices/roomSlice';

const RoomInfo = ({
  roomInfo,
  roomId,
  roomReviewInfo,
  setPer_page,
  per_page,
  setpage,
  modalReviewShown,
  toggleReviewModal,
  isShowReviews,
  setIsShowReviews,
}) => {
  const [loading, setLoading] = useState(false);
  const [modalAboutPlaceShown, toggleAboutPlaceModal] = useState(false);
  const [modalAmenityShown, toggleAmenityModal] = useState(false);
  // const [modalReviewShown, toggleReviewModal] = useState(false);
  const [modalLocationShown, toggleLocationModal] = useState(false);
  const [modalThingsShown, toggleThingsModal] = useState(false);

  // const [isShowReviews, setIsShowReviews] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const roomAmenity = useSelector(getAllAmenity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAmenityAsync());
  }, [dispatch]);

  // console.log('roomAmenity', roomAmenity);
  // useEffect(() => {
  //   setPer_page('12');
  // }, []);

  return (
    <RoomDetailSection>
      {/* Before Reviews */}
      <RoomMainDetails>
        <RoomMainDetailsWrap>
          <RoomDetailsTop>
            <div>
              <h2>
                {roomInfo?.house_type === 'entire_place' && 'Entire '}
                {roomInfo?.house_type === 'private_room' && 'Private room '}
                {roomInfo?.house_type === 'shared_room' && 'Shared room '}
                {roomInfo?.category?.name?.toLowerCase()} hosted by{' '}
                {roomInfo?.owner?.username}
              </h2>
              <span>{roomInfo?.maximum_guests} guests</span>
              <span className='coma'>·</span>
              <span>{roomInfo?.number_of_room} bedroom </span>
              <span className='coma'>·</span>
              <span>{roomInfo?.number_of_toilet} bath</span>
              <span className='coma'>·</span>
              <span>{roomInfo?.number_of_bed} bath</span>
            </div>
            <AvatarHost>
              {/* <img src='' alt='' /> */}
              <Avatar
                initials={roomInfo?.owner?.username
                  ?.substring(0, 1)
                  .toUpperCase()}
              />
            </AvatarHost>
          </RoomDetailsTop>

          {/* 3 Services */}
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

          {/* About plce Modal Open */}
          <RoomDetailsSections>
            <h2>About this place</h2>
            <BasicIntro>{roomInfo?.description}</BasicIntro>
            <ShowMoreBtn
              onClick={() => {
                toggleAboutPlaceModal(!modalAboutPlaceShown);
              }}
            >
              <span>Show more</span>
              <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
            </ShowMoreBtn>
          </RoomDetailsSections>
          <ShowMoreModal
            toggleAboutPlaceModal={toggleAboutPlaceModal}
            modalAboutPlaceShown={modalAboutPlaceShown}
            roomInfo={roomInfo}
          />

          {/* Num of bed */}
          <RoomDetailsSections>
            <h2>Where you'll sleep</h2>
            <SleepWrap>
              <BedIcon />
              <p>Bedroom</p>
              <span>{roomInfo?.number_of_bed} bed</span>
            </SleepWrap>
          </RoomDetailsSections>

          {/* Amenities */}
          <RoomDetailsSections id='viewAmenities'>
            <h2>What this place offers</h2>
            <RoomAmenity roomInfo={roomInfo} roomAmenity={roomAmenity} />
            <ShowAllBtn
              onClick={() => {
                toggleAmenityModal(!modalAmenityShown);
              }}
            >
              Show all {roomAmenity?.length} Amenities
              {/* Show all {roomInfo?.amenities?.length} Amenities */}
            </ShowAllBtn>
          </RoomDetailsSections>
          <ShowMoreModal
            toggleAmenityModal={toggleAmenityModal}
            modalAmenityShown={modalAmenityShown}
            roomInfo={roomInfo}
          />

          {/* Date */}
          <RoomDetailsSections>
            <h2>
              {new Date(checkOutDate).getDate() -
                new Date(checkInDate).getDate()}{' '}
              nights in {roomInfo?.city}
            </h2>
            <p>
              {checkInDate} ~ {checkOutDate}
            </p>
            <DateRange
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              setCheckInDate={setCheckInDate}
              setCheckOutDate={setCheckOutDate}
            />
          </RoomDetailsSections>
        </RoomMainDetailsWrap>

        {/* Room Side */}
        <RoomSide
          loading={loading}
          roomId={roomId}
          roomInfo={roomInfo}
          roomReviewInfo={roomReviewInfo}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          setCheckInDate={setCheckInDate}
          setCheckOutDate={setCheckOutDate}
        />
      </RoomMainDetails>

      {/* Reviews */}
      <RoomDetailsSections id='viewReviews'>
        <h2 className='rating'>
          <StarIcon sx={{ fontSize: '24px', marginRight: '5px' }} />
          <span>
            {roomInfo?.rating?.toFixed(2)} / {roomReviewInfo?.total_objects}{' '}
            reviews
          </span>
        </h2>
        <RoomReviews
          roomInfo={roomInfo}
          roomReviewInfo={roomReviewInfo}
          toggleReviewModal={toggleReviewModal}
          modalReviewShown={modalReviewShown}
          setIsShowReviews={setIsShowReviews}
          // per_page={per_page}
        />
        <ShowAllBtn
          onClick={() => {
            toggleReviewModal(!modalReviewShown);
            setIsShowReviews(true);
            // setPer_page('14');
            // setPer_page(roomReviewInfo?.total_objects.toString());
          }}
        >
          Show all {roomReviewInfo?.total_objects} Reviews
        </ShowAllBtn>
      </RoomDetailsSections>

      <ShowMoreModal
        toggleReviewModal={toggleReviewModal}
        modalReviewShown={modalReviewShown}
        roomInfo={roomInfo}
        roomReviewInfo={roomReviewInfo}
        setPer_page={setPer_page}
        per_page={per_page}
        setpage={setpage}
        setIsShowReviews={setIsShowReviews}
        isShowReviews={isShowReviews}
      />

      {/* Location */}
      <RoomDetailsSections id='viewLocation'>
        <h2>Where you’ll be</h2>
        <div>Map</div>
        <p>Cochrane, Alberta, Canada</p>
        <span>
          The historic town of Cochrane is 5min to the East of us and the
          historic Wine Glass Ranch, established in 1885, are our direct
          neighbours to the West.
        </span>
        <ShowMoreBtn>
          <span>Show more</span>
          <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
        </ShowMoreBtn>
      </RoomDetailsSections>

      {/* Host Info */}
      <RoomDetailsSections>
        <h2>Hosted by Grant</h2>
        <div>Host Info</div>
      </RoomDetailsSections>

      {/* Thins to know */}
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
              Review the Host’s full cancellation policy, which applies even if
              you cancel for illness or disruptions caused by COVID-19.
            </ThingsList>
            <ShowMoreBtn>
              <span>Show more</span>
              <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
            </ShowMoreBtn>
          </ThingsWrap>
        </ThingsToKnow>
      </RoomDetailsSections>
    </RoomDetailSection>
  );
};

export default RoomInfo;
