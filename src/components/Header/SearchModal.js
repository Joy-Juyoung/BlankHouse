import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import HeaderModal from './HeaderModal';
import {
  SearchFiled,
  SearchModalContainer,
  SearchModalNav,
  SearchModalNavWrap,
  SearchNavbar,
  SearchedBtn,
  SearchTextSection,
  SearchSection,
  SearchWrap,
  SearchField,
  SearchTextBack,
} from './SearchModalStyle';

const SearchModal = ({ modalShown, toggleModal }) => {
  const location = useLocation();
  // console.log('location', location);

  return (
    <HeaderModal
      shown={modalShown}
      close={() => {
        toggleModal(false);
      }}
    >
      <SearchModalContainer>
        <SearchModalNav>
          <SearchModalNavWrap>
            <SearchNavbar guestmode={location.pathname === '/' ? true : false}>
              Stays
            </SearchNavbar>

            <SearchNavbar 
              guestmode={location.pathname === '/experiences' ? true : false}
            >
              <Link to='/experiences'>
               Experiences
              </Link>
            </SearchNavbar>
          </SearchModalNavWrap>
        </SearchModalNav>
        <SearchField>
          <SearchWrap>
            <SearchSection>
              <SearchTextBack>
                <SearchTextSection className='firstField'>
                  <p>Where</p>
                  <input type='text' placeholder='Search destinations' />
                </SearchTextSection>
              </SearchTextBack>
              <SearchTextBack>
                <SearchTextSection>
                  <p>Check in</p>
                  <span>Add dates</span>
                </SearchTextSection>
              </SearchTextBack>
              <SearchTextBack>
                <SearchTextSection>
                  <p>Check out</p>
                  <span>Add dates</span>
                </SearchTextSection>
              </SearchTextBack>
              <SearchTextBack>
                <SearchTextSection>
                  <p>Who</p>
                  <span>Add guests</span>
                </SearchTextSection>
              </SearchTextBack>
            </SearchSection>
            <SearchedBtn>
              <SearchIcon fontSize='small' />
              <span>Search</span>
            </SearchedBtn>
          </SearchWrap>
        </SearchField>
      </SearchModalContainer>
    </HeaderModal>
  );
};

export default SearchModal;
