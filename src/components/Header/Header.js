import React, { useState } from 'react';
import {
  HeaderContrainer,
  HeaderSmallContrainer,
  HeaderSmallWrap,
  HeaderWrap,
} from './HeaderStyle';
import HeaderContens from './HeaderContents';
import SuccessAlert from '../Notifications/SuccessAlert';

const Header = ({ isPageMain, userMe, isUserLogIn, setIsUserLogIn }) => {
  return (
    <>
      {isPageMain ? (
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
