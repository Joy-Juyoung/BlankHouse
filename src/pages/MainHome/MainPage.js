import React, { useEffect, useState } from 'react';
// import MainRoomCard from './MainRoomCard';
import {
  EmptyMainRoom,
  FilterBtn,
  MainContainer,
  MainMid,
  MainMidWrap,
  MainTop,
  MainTopCategory,
  MainTopFilter,
  MainWrap,
} from './MainStyle';
import GuestFilterModal from '../../components/Filter/GuestFilterModal';
import { Link, useParams } from 'react-router-dom';
import TuneIcon from '@mui/icons-material/Tune';
import { useDispatch, useSelector } from 'react-redux';
import PageLoading from '../../components/Loading/PageLoading';
import MainCategorySlider from './MainCategorySlider';
import {
  getAllRoomInfo,
  getAllRoomsAsync,
  getFilterRoomInfo,
  getFilterRoomsAsync,
} from '../../redux/slices/roomSlice';
import RoomCard from '../../components/RoomCard';
import { EmptyReview } from '../Room/RoomReviewsStyle';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const MainPage = ({ setIsPageMain, userMe }) => {
  // const {
  //   house_type,
  //   number_of_beds,
  //   number_of_bedrooms,
  //   number_of_toilets,
  //   mininum_price,
  //   maximum_price,
  // } = useParams();

  const [modalFilterShown, toggleFilterModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fav, setFav] = useState(false);

  // const [owner_name, setOwner_name] = useState('');
  // const [country, setCountry] = useState('');
  // const [city, setCity] = useState('');
  // const [category, setCategory] = useState('');
  // const [house_type, setHouse_type] = useState('');
  // const [mininum_price, setMininum_price] = useState('');
  // const [maximum_price, setMaximum_price] = useState('');
  // const [maximum_guests, setMaximum_guests] = useState('');
  // const [check_in, setCheck_in] = useState('');
  // const [check_out, setCheck_out] = useState('');

  const allRoomInfo = useSelector(getAllRoomInfo);
  const filterRoomInfo = useSelector(getFilterRoomInfo);
  const dispatch = useDispatch();

  const allPrices = allRoomInfo?.map((roomData) => roomData.price);
  const total = allPrices?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const averagePrice = total / allPrices?.length;

  // console.log(
  //   house_type,
  //   number_of_beds,
  //   number_of_bedrooms,
  //   number_of_toilets,
  //   mininum_price,
  //   maximum_price
  // );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setLoading(true);
    dispatch(getAllRoomsAsync())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
    setIsPageMain(true);
  }, [dispatch, fav]);

  return (
    <MainContainer>
      <MainWrap>
        <MainTop>
          <MainTopCategory>
            <MainCategorySlider loading={loading} visibleItems={10} />
          </MainTopCategory>
          <MainTopFilter>
            <FilterBtn
              onClick={() => {
                toggleFilterModal(!modalFilterShown);
              }}
            >
              <TuneIcon sx={{ fontSize: '18px' }} />
              Filters
            </FilterBtn>

            <GuestFilterModal
              toggleFilterModal={toggleFilterModal}
              modalFilterShown={modalFilterShown}
              filterRoomInfo={filterRoomInfo}
              averagePrice={averagePrice}
            />
          </MainTopFilter>
        </MainTop>

        <MainMid>
          {filterRoomInfo && <h2>About {filterRoomInfo?.length} results...</h2>}
          <MainMidWrap className={filterRoomInfo?.length === 0 ? 'empty' : ''}>
            {!filterRoomInfo
              ? allRoomInfo
                  ?.filter((rf) => rf?.photos?.length > 0)
                  ?.map((room, index) => {
                    return (
                      <Link key={index} to={`/room/${room?.pk}`}>
                        <RoomCard
                          room={room}
                          loading={loading}
                          fav={fav}
                          setFav={setFav}
                          userMe={userMe}
                        />
                      </Link>
                    );
                  })
              : filterRoomInfo
                  ?.filter((rf) => rf?.photos?.length > 0)
                  ?.map((room, index) => {
                    return (
                      <Link key={index} to={`/room/${room?.pk}`}>
                        <RoomCard
                          room={room}
                          loading={loading}
                          fav={fav}
                          setFav={setFav}
                          userMe={userMe}
                        />
                      </Link>
                    );
                  })}

            {filterRoomInfo?.length === 0 && (
              <EmptyMainRoom>
                <SentimentVeryDissatisfiedIcon
                  sx={{ fontSize: 70 }}
                  color='disabled'
                />
                <p>No rooms match your search...</p>
              </EmptyMainRoom>
            )}
          </MainMidWrap>
        </MainMid>
      </MainWrap>
    </MainContainer>
  );
};

export default MainPage;
