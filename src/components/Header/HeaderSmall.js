import React, { useEffect, useState } from 'react';
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
import Logo from '../../assets/images/logo.png';
import LogInModal from './LogInModal';

import { Link } from 'react-router-dom';
const HeaderSmall = () => {
  const [modalSearchShown, toggleSearchModal] = useState(false);
  const [modalLogShown, toggleLogModal] = useState(false);

  return (
    <HeaderSmallContrainer>
      <HeaderSmallWrap>
        <HeaderWrapper style={{ zIndex: '5' }}>
          <img src={Logo} alt='' />
          <Link to='/'>
            <h1>BlankHouse</h1>
          </Link>
        </HeaderWrapper>
        <HeaderWrapper className='headerCenter'>
          {/* Search and Nav */}
          <SearchNavWrap
            onClick={() => {
              toggleSearchModal(!modalSearchShown);
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

              {/* <SearchNavInput type='text' /> */}
            </SearchNavSection>
            {/* Search Modal */}
            <SearchModal
              toggleSearchModal={toggleSearchModal}
              modalSearchShown={modalSearchShown}
            />

            <SearchBtn>
              <SearchIcon fontSize='small' />
            </SearchBtn>
          </SearchNavWrap>
        </HeaderWrapper>

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
      </HeaderSmallWrap>
    </HeaderSmallContrainer>
  );
};

export default HeaderSmall;
