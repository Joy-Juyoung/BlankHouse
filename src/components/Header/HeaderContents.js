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

import Avatar from '../Avatar/Avatar';
import ShowSmallModal from '../Show/ShowSmallModal';

const HeaderContens = ({ userMe, isUserLogIn, setIsUserLogIn }) => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [modalSearchShown, toggleSearchModal] = useState(false);
  const [isUserDrop, setIsUserDrop] = useState(false);

  const [modalNoUser, toggleNoUser] = useState(false);
  const [modalLogShown, toggleLogModal] = useState(false);

  console.log('isUserLogIn', isUserLogIn);
  console.log('userMe', userMe);

  window.onbeforeunload = function () {
    localStorage.clear();
  };

  const handleNoUser = () => {
    if (isUserLogIn || JSON.parse(localStorage.getItem('user'))) {
      toggleNoUser(false);
      navigate('/host/become?step1');
    } else {
      toggleNoUser(true);
    }
  };

  return (
    <>
      <HeaderWrapper>
        <img src={Logo} alt='' />
        {/* <Link to='/'> */}
        <h1
          onClick={() => {
            window.location.reload();
            window.location.href = '/';
          }}
        >
          BlankHouse
        </h1>
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
        {/* <HeaderRightSection>
          <ModeSetting onClick={handleNoUser}>
            <SwitchBtn>Airbnb your home</SwitchBtn>
          </ModeSetting> */}

        {/* <ShowSmallModal
            toggleNoUser={toggleNoUser}
            modalNoUser={modalNoUser}
            userMe={userMe}
            modalLogShown={modalLogShown}
            toggleLogModal={toggleLogModal}
          /> */}
        {/* </HeaderRightSection>
        <HeaderRightSection> */}
        {/* {(isUserLogIn || JSON.parse(localStorage.getItem('user'))) && ( */}
        {isUserLogIn || JSON.parse(localStorage.getItem('user')) ? (
          <>
            <HeaderRightSection>
              <ModeSetting onClick={handleNoUser}>
                <SwitchBtn>Airbnb your home</SwitchBtn>
              </ModeSetting>
            </HeaderRightSection>
            <HeaderRightSection>
              <UserSetting
                onClick={() => {
                  setIsUserDrop(!isUserDrop);
                  toggleSearchModal(false);
                }}
                ref={dropdownRef}
              >
                <MenuIcon fontSize='medium' />
                <LogBtn>
                  <span>
                    <Avatar
                      initials={userMe?.username?.substring(0, 1).toUpperCase()}
                    />
                  </span>
                </LogBtn>
              </UserSetting>
            </HeaderRightSection>
          </>
        ) : (
          <HeaderRightSection>
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
            </UserSetting>{' '}
          </HeaderRightSection>
        )}

        {/* </HeaderRightSection> */}
        {isUserDrop && (
          <>
            <UserDropBox
              setIsUserDrop={setIsUserDrop}
              isUserDrop={isUserDrop}
              dropdownRef={dropdownRef}
              userMe={userMe}
              isUserLogIn={isUserLogIn}
              setIsUserLogIn={setIsUserLogIn}
              modalLogShown={modalLogShown}
              toggleLogModal={toggleLogModal}
            />
          </>
        )}
      </HeaderWrapper>
    </>
  );
};

export default HeaderContens;
