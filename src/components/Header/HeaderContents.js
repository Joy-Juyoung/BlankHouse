import React, { useEffect, useRef, useState } from 'react';
import {
  CountrySetting,
  HeaderRightSection,
  HeaderSmallContrainer,
  HeaderSmallWrap,
  HeaderWrapper,
  LogBtn,
  ModeSetting,
  SearchBtn,
  SearchNavBtn,
  SearchNavSection,
  SearchNavWrap,
  SwitchBtn,
  UserSetting,
} from './HeaderStyle';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import SearchModal from './SearchModal';
import Logo from '../../assets/logo.png';
import LogInModal from './LogInModal';

import { Link, useNavigate } from 'react-router-dom';
import UserDropBox from '../Dropdown/UserDropBox';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMe,
  getUserInfoAsync,
  logoutAsync,
  logoutUser,
} from '../../redux/slices/userSlice';
import Avatar from '../Avatar/Avatar';

const HeaderContens = ({ userMe, isUserLogIn, setIsUserLogIn }) => {
  const navigation = useNavigate();
  const dropdownRef = useRef(null);
  const [modalSearchShown, toggleSearchModal] = useState(false);
  const [isUserDrop, setIsUserDrop] = useState(false);

  console.log('isUserLogIn', isUserLogIn);
  console.log('userMe', userMe);

  window.onbeforeunload = function () {
    localStorage.clear();
  };

  return (
    <>
      <HeaderWrapper>
        <img src={Logo} alt='' />
        {/* <Link to='/'> */}
        <h1 onClick={() => navigation('/')}>BlankHouse</h1>
        {/* </Link> */}
      </HeaderWrapper>
      <HeaderWrapper className='headerCenter'>
        {/* Search and Nav */}
        <SearchNavWrap
          onClick={() => {
            toggleSearchModal(!modalSearchShown);
            setIsUserDrop(false);
          }}
        >
          <SearchNavSection>
            <SearchNavBtn>
              <span>Anywhere</span>
            </SearchNavBtn>
            <SearchNavBtn className='center'>
              <span>Any week</span>
            </SearchNavBtn>
            <SearchNavBtn>
              <span>Add Guest</span>
            </SearchNavBtn>
          </SearchNavSection>
          <SearchModal
            toggleSearchModal={toggleSearchModal}
            modalSearchShown={modalSearchShown}
          />
          <SearchBtn>
            <SearchIcon fontSize='small' />
          </SearchBtn>
        </SearchNavWrap>
      </HeaderWrapper>

      <HeaderWrapper className='headerRight'>
        <HeaderRightSection>
          <Link to='/host/become'>
            <ModeSetting>
              <SwitchBtn>Airbnb your home</SwitchBtn>
            </ModeSetting>
          </Link>
        </HeaderRightSection>
        <HeaderRightSection>
          <CountrySetting>
            <LanguageIcon fontSize='medium' />
          </CountrySetting>
        </HeaderRightSection>
        <HeaderRightSection>
          {/* {(isUserLogIn || JSON.parse(localStorage.getItem('user'))) && ( */}
          {isUserLogIn || JSON.parse(localStorage.getItem('user')) ? (
            <UserSetting
              onClick={() => {
                setIsUserDrop(!isUserDrop);
                toggleSearchModal(false);
              }}
              ref={dropdownRef}
            >
              <MenuIcon fontSize='medium' />
              <LogBtn>
                {/* <img src={user?.user?.} alt='' /> */}
                <span>
                  <Avatar
                    initials={userMe?.username?.substring(0, 1).toUpperCase()}
                  />
                </span>
              </LogBtn>
            </UserSetting>
          ) : (
            // )}
            // {!isUserLogIn &&
            //   JSON.parse(localStorage.getItem('user')) === null && (
            <UserSetting
              onClick={() => {
                setIsUserDrop(!isUserDrop);
                toggleSearchModal(false);
              }}
              ref={dropdownRef}
            >
              <MenuIcon fontSize='medium' />
              <LogBtn>
                <AccountCircleIcon fontSize='medium' />
              </LogBtn>
            </UserSetting>
          )}
        </HeaderRightSection>
        {isUserDrop && (
          <>
            <UserDropBox
              setIsUserDrop={setIsUserDrop}
              isUserDrop={isUserDrop}
              dropdownRef={dropdownRef}
              userMe={userMe}
              isUserLogIn={isUserLogIn}
              setIsUserLogIn={setIsUserLogIn}
            />
          </>
        )}
      </HeaderWrapper>
    </>
  );
};

export default HeaderContens;
