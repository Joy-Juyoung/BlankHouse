import React, { useState } from 'react';
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

const MainPage = () => {
  // const location = useLocation();
  const [modalShown, toggleModal] = useState(false);

  return (
    <MainContainer>
      <MainWrap>
        <MainTop>
          <MainTopCategory>
            {/* Categories map */}
            <CategorySlider />
            {/* {CategoryData.map((category, index) => {
              return <MainCategories key={index} category={category} />;
            })} */}
          </MainTopCategory>
          <MainTopFilter>
            <FilterBtn
              onClick={() => {
                toggleModal(!modalShown);
              }}
            >
              Filters
            </FilterBtn>
            {/* Filter Modal Open */}
            <GuestFilterModal
              toggleModal={toggleModal}
              modalShown={modalShown}
            />
          </MainTopFilter>
        </MainTop>
        <MainMid>
          <MainMidWrap>
            {/* Data Map and display Main List Cart */}
            {RoomData.map((room, index) => {
              return (
                <Link to='/room'>
                  <MainListCard key={index} room={room} />
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
