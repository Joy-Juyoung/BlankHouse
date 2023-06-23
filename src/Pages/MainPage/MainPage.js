import React, { useState } from 'react';
import Modal from '../../components/Modals/Modal';
import MainCategories from './MainCategories';
import MainListCard from './MainListCard';
import {
  FilterBtn,
  FilterModalBtn,
  FilterModalContainer,
  FilterModalHidden,
  FilterModalMain,
  FilterModalTitle,
  FilterModalTop,
  MainContainer,
  MainMid,
  MainTop,
  MainTopCategory,
  MainTopFilter,
  MainWrap,
  ModalCloseBtn,
  ModalHidden,
  ModalTitle,
  ModalTop,
} from './MainStyle';
// import CloseIcon from '@mui/icons-material/Close';
import GuestFilterModal from '../../components/Modals/GuestFilterModal';

const MainPage = () => {
  const [modalShown, toggleModal] = useState(false);

  return (
    <MainContainer>
      <MainWrap>
        <MainTop>
          <MainTopCategory>
            {/* Categories map */}
            <MainCategories />
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
          {/* Data Map and display Main List Cart */}
          <MainListCard />
        </MainMid>
      </MainWrap>
    </MainContainer>
  );
};

export default MainPage;
