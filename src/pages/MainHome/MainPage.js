import React, { useCallback, useEffect, useRef, useState } from 'react';
import MainRoomCard from './MainRoomCard';
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
import { Link } from 'react-router-dom';
// import Loading from '../../components/Loading';
import TuneIcon from '@mui/icons-material/Tune';
import { useDispatch, useSelector } from 'react-redux';
import { allRooms } from '../../redux/slices/rooms';
import PageLoading from '../../components/Loading/PageLoading';
import MainCategorySlider from './MainCategorySlider';
// import MainInfiniteScroll from './MainInfiniteScroll';

const MainPage = ({ setIsPageMain }) => {
  const [modalFilterShown, toggleFilterModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const pageRef = useRef(null);

  const rooms = useSelector((state) => state.rooms[0]);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(allRooms());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(true);
    initFetch();
  }, [initFetch]);

  console.log('rooms', rooms);

  if (loading)
    return (
      <div>
        <PageLoading />
      </div>
    );
  return (
    <MainContainer>
      <MainWrap>
        <MainTop>
          <MainTopCategory>
            <MainCategorySlider loading={loading} visibleItems={15} />
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
            />
          </MainTopFilter>
        </MainTop>

        <MainMid>
          <MainMidWrap>
            {rooms?.map((room, index) => {
              return (
                <Link key={index} to={`/room/${room?.pk}`}>
                  <MainRoomCard room={room} loading={loading} />
                </Link>
              );
            })}
          </MainMidWrap>
          {/* <div ref={pageRef}>{isLoading && 'Loading...'}</div> */}
        </MainMid>
      </MainWrap>
    </MainContainer>
  );
};

export default MainPage;
