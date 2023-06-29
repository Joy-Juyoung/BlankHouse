import React, { useState } from 'react';
import {
  CountrySetting,
  HeaderContrainer,
  HeaderRight,
  HeaderRightSection,
  HeaderWrap,
  HeaderWrapper,
  LogBtn,
  ModeSetting,
  SearchBtn,
  SearchNavBtn,
  SearchNavBtnCenter,
  SearchNavInput,
  SearchNavSection,
  SearchNavWrap,
  SwitchBtn,
  UserIconSection,
  UserSetting,
} from './HeaderStyle';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import SearchModal from './SearchModal';
import Logo from '../../assets/images/logo.png';
import LogInModal from './LogInModal';

const Header = () => {
  const [modalShown, toggleModal] = useState(false);
  const [modalLogShown, toggleLogModal] = useState(false);

  return (
    <HeaderContrainer>
      <HeaderWrap>
        <HeaderWrapper style={{ zIndex: '4' }}>
          <img src={Logo} alt='' />
          <h1>BlankHouse</h1>
        </HeaderWrapper>
        <HeaderWrapper className='headerCenter'>
          {/* Search and Nav */}
          <SearchNavWrap
            onClick={() => {
              toggleModal(!modalShown);
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
            <SearchModal toggleModal={toggleModal} modalShown={modalShown} />

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
              <LogBtn onClick={() => {
                                toggleLogModal(!modalLogShown);
                            }}>
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
  );
};

export default Header;
