import React, { useEffect, useState } from 'react';
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
import GuestFilterModal from '../../components/Filter/GuestFilterModal';
import { Link } from 'react-router-dom';
import TuneIcon from '@mui/icons-material/Tune';
import { useDispatch, useSelector } from 'react-redux';
import PageLoading from '../../components/Loading/PageLoading';
import MainCategorySlider from './MainCategorySlider';
import { getAllRoomsAsync, selectRoom } from '../../redux/slices/roomSlice';

const MainPage = ({ setIsPageMain }) => {
  const [modalFilterShown, toggleFilterModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const rooms = useSelector(selectRoom);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(getAllRoomsAsync());
    setIsPageMain(true);
  }, [dispatch]);

  console.log('All Rooms', rooms);

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
