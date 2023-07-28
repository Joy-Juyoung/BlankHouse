import React, { useState } from 'react';
import {
  HeaderContrainer,
  HeaderSmallContrainer,
  HeaderSmallWrap,
  HeaderWrap,
} from './HeaderStyle';
import HeaderContens from './HeaderContents';
import SuccessAlert from '../Notifications/SuccessAlert';

const Header = ({ isPageMain, isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      {isPageMain ? (
        <HeaderContrainer>
          <HeaderWrap>
            <HeaderContens
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </HeaderWrap>
        </HeaderContrainer>
      ) : (
        <HeaderSmallContrainer>
          <HeaderSmallWrap>
            <HeaderContens
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </HeaderSmallWrap>
        </HeaderSmallContrainer>
      )}
    </>
  );
};

export default Header;
