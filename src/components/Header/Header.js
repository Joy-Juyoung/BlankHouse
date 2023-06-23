import React, { useState } from 'react';
import {
  CountrySetting,
  HeaderContrainer,
  HeaderWrap,
  HeaderWrapper,
  ModeSetting,
  SearchBtn,
  SearchNavBtn,
  SearchNavBtnCenter,
  SearchNavInput,
  SearchNavSection,
  SearchNavWrap,
  SwitchBtn,
  UserSetting,
} from './HeaderStyle';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import SearchModal from './SearchModal';

const Header = () => {
  const [modalShown, toggleModal] = useState(false);

  return (
    <HeaderContrainer>
      <HeaderWrap>
        <HeaderWrapper style={{ zIndex: '4' }}>
          <h1>Blank House</h1>
        </HeaderWrapper>
        <HeaderWrapper className='headerCenter'>
          {/* Search and Nav */}
          <SearchNavWrap
            onClick={() => {
              toggleModal(!modalShown);
            }}
          >
            <SearchNavSection>
              <SearchNavBtn>Anywhere</SearchNavBtn>
              <SearchNavBtn className='center'>Any week</SearchNavBtn>
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
          <ModeSetting>
            <SwitchBtn>Airbnb your home</SwitchBtn>
          </ModeSetting>
          <CountrySetting>
            <LanguageIcon />
          </CountrySetting>
          <UserSetting>
            <AccountCircleIcon />
          </UserSetting>
        </HeaderWrapper>
      </HeaderWrap>
    </HeaderContrainer>
  );
};

export default Header;
