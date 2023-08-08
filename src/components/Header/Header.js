import React, { useState } from 'react';
import {
  CountrySetting,
  HeaderContrainer,
  HeaderRightSection,
  HeaderSmallContrainer,
  HeaderSmallWrap,
  HeaderWrap,
  HeaderWrapper,
  LogBtn,
  ModeSetting,
  SearchBtn,
  SwitchBtn,
  UserSetting,
} from './HeaderStyle';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import SearchModal from './SearchModal';
import Logo from '../../assets/images/logo.png';
import LogInModal from './LogInModal';

import { Link, useLocation, useParams } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  // const { room } = useParams();
  const [modalSearchShown, toggleSearchModal] = useState(false);

  const [modalLogShown, toggleLogModal] = useState(false);

  // console.log('location.pathname', location.pathname);

  return (
    // <>
    //   {isPageMain ? (
        <HeaderContrainer>
          <HeaderWrap>
            {/* <HeaderContens
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            /> */}

            <SearchBtn>
              <SearchIcon fontSize='small' />
            </SearchBtn>
          {/* </SearchNavWrap> */}
        {/* </HeaderWrapper> */}

        <HeaderWrapper className='headerRight' style={{ zIndex: '4' }}>
          <HeaderRightSection>
            <ModeSetting>
              <SwitchBtn>Airbnb your home</SwitchBtn>
            </ModeSetting>
          </HeaderRightSection>
          <HeaderRightSection>
            <CountrySetting>
              <LanguageIcon fontSize='medium' />
            </CountrySetting>
          </HeaderRightSection>
          <HeaderRightSection>
            <UserSetting>
              <MenuIcon fontSize='medium' />
              <LogBtn
                onClick={() => {
                  toggleLogModal(!modalLogShown);
                }}
              >
                <AccountCircleIcon fontSize='medium' />
              </LogBtn>
              <LogInModal
                toggleLogModal={toggleLogModal}
                modalLogShown={modalLogShown}
              />
            </UserSetting>
          </HeaderRightSection>
        </HeaderWrapper>
      </HeaderWrap>
    </HeaderContrainer>
  )
};

export default Header;
