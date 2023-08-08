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

const Header = ({ isPageMain, userMe, isUserLogIn, setIsUserLogIn }) => {
  return (
    // <>
    //   {isPageMain ? (
        <HeaderContrainer>
          <HeaderWrap>
            <HeaderContens
              userMe={userMe}
              isUserLogIn={isUserLogIn}
              setIsUserLogIn={setIsUserLogIn}
            />
          </HeaderWrap>
        </HeaderContrainer>
      ) : (
        <HeaderSmallContrainer>
          <HeaderSmallWrap>
            <HeaderContens
              userMe={userMe}
              isUserLogIn={isUserLogIn}
              setIsUserLogIn={setIsUserLogIn}
            />
          </HeaderSmallWrap>
        </HeaderSmallContrainer>
      )}
    </>
  );
};

export default Header;
