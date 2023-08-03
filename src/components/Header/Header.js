import React, { useState } from 'react';
import {
  HeaderContrainer,
  HeaderSmallContrainer,
  HeaderSmallWrap,
  HeaderWrap,
} from './HeaderStyle';
import HeaderContens from './HeaderContents';
import SuccessAlert from '../Notifications/SuccessAlert';

const Header = ({ isPageMain, user, isUserLogIn, setIsUserLogIn }) => {
  return (
    <>
      {isPageMain ? (
        <HeaderContrainer>
          <HeaderWrap>
            <HeaderContens
              user={user}
              isUserLogIn={isUserLogIn}
              setIsUserLogIn={setIsUserLogIn}
            />
          </HeaderWrap>
        </HeaderContrainer>
      ) : (
        <HeaderSmallContrainer>
          <HeaderSmallWrap>
            <HeaderContens
              user={user}
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
