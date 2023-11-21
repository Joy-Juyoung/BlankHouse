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
import { useDispatch } from 'react-redux';
import { getFilterRoomsAsync } from '../../redux/slices/roomSlice';
import ShowSamllModal from '../Show/ShowSmallModal';

const SearchModal = ({ modalSearchShown, toggleSearchModal }) => {
  const location = useLocation();
  const [modalNoServiceShown, toggleNoServiceModal] = useState(false);

  const [isGuests, setIsGuests] = useState(false);
  const [guestsNum, setGuestsNum] = useState(1);
  const [infantsNum, setInfantsNum] = useState(0);

  const [isCheckInDate, setIsCheckInDate] = useState(false);
  const [isCheckOutDate, setIsCheckOutDate] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const [isRoom, setIsRoom] = useState(false);
  const [isExp, setIsExp] = useState(false);
  const { roomId } = useParams();

  // const [keyword, setKeyword] = useState('');
  // const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  // const [category, setCategory] = useState('');

  const [searchedWhere, setSearchedWhere] = useState('');
  // const [searchedWho, setSearchedWho] = useState(guestsNum.toString());
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  const handleSearchWhere = (e) => {
    setSearchedWhere(e.target.value);
  };

  // const handleSearchWho = (e) => {
  //   setSearchedWho(e.target.value);
  // };
  // console.log('searchedWhere', searchedWhere);

  const handleClickFilter = (e) => {
    setSearchResults([]);
    localStorage.removeItem('getSearched');
    toggleSearchModal(false);
    dispatch(
      getFilterRoomsAsync({
        city:
          // searchedWhere ||
          searchedWhere.charAt(0).toUpperCase() + searchedWhere.slice(1) || '',
        maximum_guests: guestsNum.toString() || '',

        category:
          JSON.parse(localStorage.getItem('getCategory')) !== null
            ? JSON.parse(localStorage.getItem('getCategory'))
            : '',
        house_type: '',
        number_of_beds: '',
        number_of_bedrooms: '',
        number_of_toilets: '',

        check_in: checkInDate || '',
        check_out: checkOutDate || '',
      })
    );
  };

  useEffect(() => {
    if (searchedWhere !== '' && guestsNum >= 1) {
      searchResults.push({ where: searchedWhere, who: guestsNum.toString() });
      localStorage.setItem('getSearched', JSON.stringify(searchResults));
    } else if (searchedWhere === '' && guestsNum >= 1) {
      searchResults.push({ where: '', who: guestsNum.toString() });
      localStorage.setItem('getSearched', JSON.stringify(searchResults));
    } else if (searchedWhere !== '' && guestsNum === 0) {
      searchResults.push({ where: searchedWhere, who: '' });
      localStorage.setItem('getSearched', JSON.stringify(searchResults));
    } else {
      setSearchResults([]);
      localStorage.removeItem('getSearched');
    }
  }, [searchResults]);

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
            <Link to='/' className={isRoom ? 'active' : 'deactive'}>
              <SearchNavbar
                className={isRoom ? 'active' : 'deactive'}
                onClick={() => toggleSearchModal(false)}
              >
                Stays
              </SearchNavbar>
            </Link>
            <SearchNavbar
              className={isExp ? 'active' : 'deactive'}
              onClick={() => toggleNoServiceModal(!modalNoServiceShown)}
            >
              Experiences
            </SearchNavbar>
          </SearchModalNavWrap>
        </SearchModalNav>

        {/*  */}
        <ShowSamllModal
          toggleNoServiceModal={toggleNoServiceModal}
          modalNoServiceShown={modalNoServiceShown}
        />

        <SearchField>
          <SearchWrap>
            <SearchSection>
              <SearchTextBack className='firstField'>
                <SearchTextSection className='first'>
                  <p>Where</p>
                  <input
                    type='text'
                    placeholder='Search name of city'
                    onChange={handleSearchWhere}
                  />
                </SearchTextSection>
              </SearchTextBack>
              <SearchTextBack
                className={(isCheckInDate && 'avtive') || 'dateField'}
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
                className={(isCheckOutDate && 'avtive') || 'dateField'}
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
                className={(isGuests && 'avtive') || 'lastField'}
                onClick={() => {
                  setIsCheckInDate(false);
                  setIsCheckOutDate(false);
                  setIsGuests(!isGuests);
                }}
              >
                <SearchTextSection className='who'>
                  <p>Who</p>
                  {guestsNum ? (
                    <NumberOfGuests>
                      <div>
                        <span>{guestsNum}</span>
                        <span>{guestsNum === 1 ? 'guest' : 'guests'}</span>
                        {infantsNum !== 0 && (
                          <span>, {infantsNum} infants</span>
                        )}
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
                    infantsNum={infantsNum}
                    setInfantsNum={setInfantsNum}
                    // roomInfo={roomInfo}
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

            <div onClick={handleClickFilter}>
              <SearchButton />
            </div>
          </SearchWrap>
        </SearchField>
      </SearchModalContainer>
    </HeaderModal>
  );
};

export default SearchModal;
