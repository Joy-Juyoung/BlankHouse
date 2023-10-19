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
  RoomDetailsTopText,
  GoToMap,
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
import { Skeleton } from '@mui/material';
import RoomBed from './RoomBed';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Link } from 'react-router-dom';

const RoomInfo = ({
  roomInfo,
  roomId,
  roomReviewInfo,
  setPer_page,
  per_page,
  setPage,
  page,
  modalReviewShown,
  toggleReviewModal,
  isShowReviews,
  setIsShowReviews,
  loading,
}) => {
  const [modalAboutPlaceShown, toggleAboutPlaceModal] = useState(false);
  const [modalAmenityShown, toggleAmenityModal] = useState(false);

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const roomAmenity = useSelector(getAllAmenity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAmenityAsync());
  }, [dispatch]);

  return (
    <RoomDetailSection>
      {/* Before Reviews */}
      <RoomMainDetails>
        <RoomMainDetailsWrap>
          <RoomDetailsTop>
            <RoomDetailsTopText>
              {loading ? (
                <>
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    sx={{
                      width: '450px',
                      height: '30px',
                      borderRadius: '10px',
                    }}
                  />
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    sx={{
                      width: '300px',
                      height: '20px',
                      borderRadius: '10px',
                      marginTop: '5px',
                    }}
                  />
                </>
              ) : (
                <>
                  <h2>
                    {roomInfo?.house_type === 'entire_place' && 'Entire place '}
                    {roomInfo?.house_type === 'private_room' && 'Private room '}
                    {roomInfo?.house_type === 'shared_room' && 'Shared room '}
                    hosted by {roomInfo?.owner?.username}
                  </h2>
                  <span>{roomInfo?.maximum_guests} guests</span>
                  <span className='coma'>·</span>
                  <span>{roomInfo?.number_of_room} bedroom </span>
                  <span className='coma'>·</span>
                  <span>{roomInfo?.number_of_toilet} bath</span>
                  <span className='coma'>·</span>
                  <span>{roomInfo?.number_of_bed} bed</span>
                </>
              )}
            </RoomDetailsTopText>
            <AvatarHost>
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
                  <p>Free cancellation available 7 days before check-in.</p>
                  <span></span>
                </BasicInfo>
              </li>
            </ul>
          </RoomDetailsSections>

          {/* About plce Modal Open */}
          <RoomDetailsSections>
            <h2>About this place</h2>
            {loading ? (
              <BasicIntro>
                <Skeleton
                  variant='rect'
                  animation='wave'
                  sx={{ width: '100%', height: '85px', borderRadius: '10px' }}
                />
              </BasicIntro>
            ) : (
              <BasicIntro>{roomInfo?.description}</BasicIntro>
            )}
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
          <RoomBed roomInfo={roomInfo} loading={loading} />

          {/* Amenities */}
          <RoomDetailsSections id='viewAmenities'>
            <h2>What this place offers</h2>
            <PlaceOffers>
              <RoomAmenity roomInfo={roomInfo} loading={loading} />
            </PlaceOffers>
            <ShowAllBtn
              onClick={() => {
                toggleAmenityModal(!modalAmenityShown);
              }}
            >
              Show all {roomAmenity?.length || '00'} Amenities
            </ShowAllBtn>
          </RoomDetailsSections>
          <ShowMoreModal
            toggleAmenityModal={toggleAmenityModal}
            modalAmenityShown={modalAmenityShown}
            roomInfo={roomInfo}
          />

          {/* Date */}
          <RoomDetailsSections>
            {loading ? (
              <>
                <h2>
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    sx={{
                      width: '250px',
                      height: '28px',
                      borderRadius: '10px',
                    }}
                  />
                </h2>
                <p>
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    sx={{
                      width: '200px',
                      height: '19px',
                      borderRadius: '10px',
                    }}
                  />
                </p>
              </>
            ) : (
              <>
                <h2>
                  {new Date(checkOutDate).getDate() -
                    new Date(checkInDate).getDate()}{' '}
                  nights in {roomInfo?.city}
                </h2>
                <p>
                  {checkInDate} ~ {checkOutDate}
                </p>
              </>
            )}
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
            {roomInfo?.rating?.toFixed(2) || '00'} /{' '}
            {roomReviewInfo?.total_objects || '00'} reviews
          </span>
        </h2>
        <RoomReviews
          roomInfo={roomInfo}
          roomReviewInfo={roomReviewInfo}
          toggleReviewModal={toggleReviewModal}
          modalReviewShown={modalReviewShown}
          setIsShowReviews={setIsShowReviews}
          // per_page={per_page}
          loading={loading}
        />
        <ShowAllBtn
          onClick={() => {
            toggleReviewModal(!modalReviewShown);
            setIsShowReviews(true);
            // setPer_page('14');
            // setPer_page(roomReviewInfo?.total_objects.toString());
          }}
        >
          Show all {roomReviewInfo?.total_objects || '00'} Reviews
        </ShowAllBtn>
      </RoomDetailsSections>

      <ShowMoreModal
        toggleReviewModal={toggleReviewModal}
        modalReviewShown={modalReviewShown}
        roomInfo={roomInfo}
        roomReviewInfo={roomReviewInfo}
        setPer_page={setPer_page}
        per_page={per_page}
        setPage={setPage}
        page={page}
        setIsShowReviews={setIsShowReviews}
        isShowReviews={isShowReviews}
      />

      {/* Location */}
      <RoomDetailsSections id='viewLocation'>
        <h2>Where you’ll be</h2>
        <GoToMap>
          <FmdGoodIcon sx={{ fontSize: 100 }} />
          <Link
            to={`https://maps.google.com/maps/place/${roomInfo?.address}+${roomInfo?.city}`}
            target='_blank'
          >
            <p>
              {roomInfo?.address}, {roomInfo?.city}, {roomInfo?.country}
            </p>
          </Link>
        </GoToMap>
        {/* <span>
          The historic town of Cochrane is 5min to the East of us and the
          historic Wine Glass Ranch, established in 1885, are our direct
          neighbours to the West.
        </span> */}
        {/* <ShowMoreBtn>
          <span>Show more</span>
          <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
        </ShowMoreBtn> */}
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
