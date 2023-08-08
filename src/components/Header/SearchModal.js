import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import HeaderModal from '../Modals/HeaderModalLayout';

import {
  SearchModalContainer,
  SearchModalNav,
  SearchModalNavWrap,
  SearchNavbar,
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
  const [isGuests, setIsGuests] = useState(false);
  const [guestsNum, setGuestsNum] = useState(1);

  const [isCheckInDate, setIsCheckInDate] = useState(false);
  const [isCheckOutDate, setIsCheckOutDate] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const [isRoom, setIsRoom] = useState(false);
  const [isExp, setIsExp] = useState(false);
  const { roomId } = useParams();

  useEffect(() => {
    if (location.pathname === '/' || !roomId) {
      setIsRoom(true);
      setIsExp(false);
    }
    if (
      location.pathname === '/experiences' ||
      location.pathname === '/experiences/detail'
    ) {
      setIsRoom(false);
      setIsExp(true);
    }
  }, [location]);

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
              className={isRoom ? 'active' : 'deactive'}
              onClick={() => toggleSearchModal(false)}
            >
              <Link to='/'>Stays</Link>
            </SearchNavbar>

            <SearchNavbar
              className={isExp ? 'active' : 'deactive'}
              onClick={() => toggleSearchModal(false)}
            >
              <Link to='/experiences'>Experiences</Link>
            </SearchNavbar>
            <SearchNavbar
              guestmode={location.pathname === '/onlinexperiences' ? true : false}
              onClick={() => toggleSearchModal(false)}
            >
              <Link to='/onlinexperiences'>Online Experiences</Link>
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
                  <span>{checkInDate || 'Add dates'}</span>
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
                  <span>{checkOutDate || 'Add dates'}</span>
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
                  toggleSearchModal={toggleSearchModal}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  setCheckInDate={setCheckInDate}
                  setCheckOutDate={setCheckOutDate}
                />
              )}
            </SearchSection>

            <SearchButton />
          </SearchWrap>
        </SearchField>
      </SearchModalContainer>
    </HeaderModal>
  );
};

export default SearchModal;
