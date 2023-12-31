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
import { Link } from 'react-router-dom';
import TuneIcon from '@mui/icons-material/Tune';
import { useDispatch, useSelector } from 'react-redux';
import MainCategorySlider from './MainCategorySlider';
import {
  getAllRoomInfo,
  getAllRoomsAsync,
  getFilterRoomInfo,
} from '../../redux/slices/roomSlice';
import RoomCard from '../../components/RoomCard';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const MainPage = ({ setIsPageMain, userMe }) => {
  const [modalFilterShown, toggleFilterModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fav, setFav] = useState(false);

  const allRoomInfo = useSelector(getAllRoomInfo);
  const filterRoomInfo = useSelector(getFilterRoomInfo);
  const dispatch = useDispatch();

  const allPrices = allRoomInfo?.map((roomData) => roomData.price);
  const total = allPrices?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const averagePrice = total / allPrices?.length;
  const maxPrice = Math.max({ ...allPrices });

  // console.log('allPrices', allPrices);
  // console.log('maxPrice', maxPrice);

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
              maxPrice={maxPrice}
            />
          </MainTopFilter>
        </MainTop>

        <MainMid>
          {filterRoomInfo && (
            <h2>
              About{' '}
              {filterRoomInfo?.filter((rf) => rf?.photos?.length > 0).length}{' '}
              results...
            </h2>
          )}
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

            {filterRoomInfo?.filter((rf) => rf?.photos?.length > 0).length ===
              0 && (
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
