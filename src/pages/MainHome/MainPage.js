import React, { useEffect, useState } from 'react';
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
import { RoomData } from './SampleData';
import CategorySlider from './CategorySlider';
import { Link, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';
import TuneIcon from '@mui/icons-material/Tune';

const MainPage = () => {
  // const location = useLocation();
  const [modalFilterShown, toggleFilterModal] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <MainContainer>
      <MainWrap>
        <MainTop>
          <MainTopCategory>
            <CategorySlider loading={loading} />
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
            {/* Data Map and display Main List Cart */}
            {RoomData.map((room, index) => {
              return (
                <Link to='/room'>
                  <MainListCard key={index} room={room} loading={loading} />
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
