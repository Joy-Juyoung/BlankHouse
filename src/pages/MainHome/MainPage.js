import React, { useEffect, useState } from 'react';
// import MainRoomCard from './MainRoomCard';
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
import { getAllRoomInfo, getAllRoomsAsync } from '../../redux/slices/roomSlice';
import RoomCard from '../../components/RoomCard';

const MainPage = ({ setIsPageMain }) => {
  const [modalFilterShown, toggleFilterModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fav, setFav] = useState(false);

  const allRoomInfo = useSelector(getAllRoomInfo);
  const dispatch = useDispatch();

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

  // console.log('All Rooms', allRoomInfo);

  // if (loading)
  //   return (
  //     <div>
  //       <PageLoading />
  //     </div>
  //   );
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
            />
          </MainTopFilter>
        </MainTop>

        <MainMid>
          <MainMidWrap>
            {/* ?.filter((rf) => rf?.photos?.length >= 5) */}
            {allRoomInfo
              ?.filter((rf) => rf?.photos?.length > 0)
              ?.map((room, index) => {
                return (
                  <Link key={index} to={`/room/${room?.pk}`}>
                    <RoomCard
                      room={room}
                      loading={loading}
                      fav={fav}
                      setFav={setFav}
                    />
                  </Link>
                );
              })}
          </MainMidWrap>
        </MainMid>
      </MainWrap>
    </MainContainer>
  );
};

export default MainPage;
