import React, { useCallback, useEffect, useRef, useState } from 'react';
import MainCategories from './MainCategories';
import MainListCard from './MainListCard';
import {
  FilterBtn,
  MainContainer,
  MainMid,
  MainMidWrap,
  MainTop,
  MainTopCategory,
  MainTopFilter,
  MainWrap,
} from './MainStyle';
import GuestFilterModal from '../../components/Modals/GuestFilterModal';
import { RoomData, CategoryData } from './SampleData';
import CategorySlider from './CategorySlider';
import { Link, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';
import TuneIcon from '@mui/icons-material/Tune';
import MainInfiniteScroll from './MainInfiniteScroll';

import { useDispatch, useSelector } from 'react-redux';
import { allRooms } from '../../redux/slices/rooms';

const MainPage = () => {
  // const location = useLocation();
  const [modalFilterShown, toggleFilterModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(null);

  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(allRooms());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  console.log('rooms', rooms);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <MainContainer>
      <MainWrap>
        <MainTop>
          <MainTopCategory>
            <CategorySlider
              loading={loading}
              CategoryData={CategoryData}
              visibleItems={15}
            />
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
            {/* Filter Modal Open */}
            <GuestFilterModal
              toggleFilterModal={toggleFilterModal}
              modalFilterShown={modalFilterShown}
            />
          </MainTopFilter>
        </MainTop>

        <MainMid>
          <MainMidWrap>
            {/* <MainInfiniteScroll RoomData={RoomData} /> */}
            {/* {RoomData.map((room, index) => { */}
            {rooms?.map((room, index) => {
              return (
                <Link key={index} to={`/room/${room?.pk}`}>
                  <MainListCard room={room} loading={loading} />
                </Link>
              );
            })}
          </MainMidWrap>
          <div ref={pageRef}>{isLoading && 'Loading...'}</div>
        </MainMid>
      </MainWrap>
    </MainContainer>
  );
};

export default MainPage;
