import React, { useState } from 'react';
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
  NumberOfGuests,
} from './SearchModalStyle';
// import GuestDropdown from '../Dropdown/SearchGuestsBox';
import SearchButton from '../Buttons/SearchButton';
import SearchGuestsBox from '../Dropdown/SearchGuestsBox';
import SearchDateBox from '../Dropdown/SearchDateBox';

const SearchModal = ({ modalSearchShown, toggleSearchModal }) => {
  const location = useLocation();
  // console.log('location', location);
  const [isGuests, setIsGuests] = useState(false);
  const [guestsNum, setGuestsNum] = useState(1);

  const [isCheckInDate, setIsCheckInDate] = useState(false);
  const [isCheckOutDate, setIsCheckOutDate] = useState(false);

  return (
    <HeaderModal
      headershown={modalSearchShown}
      headerclose={() => {
        toggleSearchModal(false);
      }}
    >
      <SearchModalContainer>
        <SearchModalNav>
          <SearchModalNavWrap>
            <SearchNavbar
              guestmode={location.pathname === '/' ? true : false}
              onClick={() => toggleSearchModal(false)}
            >
              <Link to='/'>Stays</Link>
            </SearchNavbar>

            <SearchNavbar
              guestmode={location.pathname === '/experiences' ? true : false}
              onClick={() => toggleSearchModal(false)}
            >
              <Link to='/experiences'>Experiences</Link>
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
              <SearchTextBack
                className={isCheckInDate && 'avtive'}
                onClick={() => {
                  setIsCheckInDate(!isCheckInDate);
                  setIsCheckOutDate(false);
                  setIsGuests(false);
                }}
              >
                <SearchTextSection>
                  <p>Check in</p>
                  <span>Add dates</span>
                </SearchTextSection>
              </SearchTextBack>
              <SearchTextBack
                className={isCheckOutDate && 'avtive'}
                onClick={() => {
                  setIsCheckOutDate(!isCheckOutDate);
                  setIsCheckInDate(false);
                  setIsGuests(false);
                }}
              >
                <SearchTextSection>
                  <p>Check out</p>
                  <span>Add dates</span>
                </SearchTextSection>
              </SearchTextBack>
              <SearchTextBack
                className={isGuests && 'avtive'}
                onClick={() => {
                  setIsCheckInDate(false);
                  setIsCheckOutDate(false);
                  setIsGuests(!isGuests);
                }}
              >
                <SearchTextSection>
                  <p>Who</p>
                  {guestsNum ? (
                    <NumberOfGuests>
                      <div>
                        <span>{guestsNum}</span>
                        <span>{guestsNum === 1 ? 'guest' : 'guests'}</span>
                      </div>
                    </NumberOfGuests>
                  ) : (
                    <span>Add guests</span>
                  )}
                </SearchTextSection>
                {isGuests && (
                  <SearchGuestsBox
                    setIsGuests={setIsGuests}
                    guestsNum={guestsNum}
                    setGuestsNum={setGuestsNum}
                    toggleSearchModal={toggleSearchModal}
                  />
                )}
              </SearchTextBack>
              {(isCheckInDate || isCheckOutDate) && (
                <SearchDateBox
                  isCheckInDate={isCheckInDate}
                  isCheckOutDate={isCheckOutDate}
                  setIsCheckInDate={setIsCheckInDate}
                  setIsCheckOutDate={setIsCheckOutDate}
                  toggleSearchModal={toggleSearchModal}
                />
              )}
            </SearchSection>
            {/* <SearchedBtn>
              <SearchIcon fontSize='small' />
              <span>Search</span>
            </SearchedBtn> */}
            <SearchButton />
          </SearchWrap>
        </SearchField>
      </SearchModalContainer>
    </HeaderModal>
  );
};

export default SearchModal;
