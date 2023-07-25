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
} from './RoomStyle';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RoomSide from './RoomSide';
import BedIcon from '@mui/icons-material/Bed';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PetsIcon from '@mui/icons-material/Pets';
import TodayIcon from '@mui/icons-material/Today';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import ShowMoreModal from '../../components/Modals/ShowMoreModal';
// import SearchDateBox from '../../components/Dropdown/SearchDateBox';
import DateRange from '../../components/DateRange';
import RoomReviews from './RoomReviews';

const RoomInfo = ({ reviews, roomData, rooms, roomId }) => {
  const [loading, setLoading] = useState(false);
  const [modalAboutPlaceShown, toggleAboutPlaceModal] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  // const [houseTyp, setHouseTyp] = useState('Entire');
  // const [roomInfo, setRoomInfo] = useState( rooms?.filter((room) => room.pk === roomData?.pk));
  const roomInfo = rooms?.filter((room) => room?.pk === roomId);

  // console.log('rooms', rooms);
  // console.log('roomData', roomData);

  return (
    <RoomDetailSection>
      <RoomMainDetails>
        <RoomMainDetailsWrap>
          <RoomDetailsTop>
            <div>
              <h2>
                {roomInfo?.[0]?.house_type === 'entire_place' && 'Entire '}
                {roomInfo?.[0]?.house_type === 'private_room' &&
                  'Private room '}
                {roomInfo?.[0]?.house_type === 'shared_room' && 'Shared room '}
                {roomInfo?.[0]?.category?.name?.toLowerCase()} hosted by{' '}
                {roomInfo?.[0]?.owner?.username}
              </h2>
              <span>{roomInfo?.[0]?.maximum_guests} guests</span>
              <span className='coma'>·</span>
              <span>{roomInfo?.[0]?.number_of_room} bedroom </span>
              <span className='coma'>·</span>
              <span>{roomInfo?.[0]?.number_of_toilet} bath</span>
              <span className='coma'>·</span>
              <span>{roomInfo?.[0]?.number_of_bed} bath</span>
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
            <BasicIntro>{roomData?.description}</BasicIntro>
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
            roomData={roomData}
          />

          <RoomDetailsSections>
            <h2>Where you'll sleep</h2>
            <SleepWrap>
              <BedIcon />
              <p>Bedroom</p>
              <span>{roomInfo?.[0]?.number_of_bed} bed</span>
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
            <DateRange
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              setCheckInDate={setCheckInDate}
              setCheckOutDate={setCheckOutDate}
            />
          </RoomDetailsSections>
        </RoomMainDetailsWrap>
        <RoomSide
          loading={loading}
          roomData={roomData}
          rooms={rooms}
          reviews={reviews}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
        />
      </RoomMainDetails>
      <RoomDetailsSections id='viewReviews'>
        <h2 className='rating'>
          <StarIcon sx={{ fontSize: '24px', marginRight: '5px' }} />
          <span>
            {roomData?.rating?.toFixed(2)} / {reviews?.length} reviews
          </span>
        </h2>
        <RoomReviews roomData={roomData} reviews={reviews} />
        <ShowAllBtn>Show all 00 Reviews</ShowAllBtn>
      </RoomDetailsSections>
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
      {/* </RoomMainDetailsWrap>
                <RoomSide loading={loading} RoomData={RoomData} /> */}
      {/* </RoomMainDetails> */}
    </RoomDetailSection>
  );
};

export default RoomInfo;
