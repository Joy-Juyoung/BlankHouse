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
    <div>
      <div>
        <div>
          {/* Categories map */}
          <MainCategories />
        </div>
        <div>
          <FilterBtn
            onClick={() => {
              toggleModal(!modalShown);
            }}
          >
            Filters
          </FilterBtn>
          {/* Filter Modal Open */}
          <GuestFilterModal toggleModal={toggleModal} modalShown={modalShown} />
        </div>
      </div>
      <div>
        {/* Data Map and display Main List Cart */}
        <MainListCard />
      </div>
    </div>
  );
};

export default MainPage;
