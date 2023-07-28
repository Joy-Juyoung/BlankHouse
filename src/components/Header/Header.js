import React from 'react';
import {
  HeaderContrainer,
  HeaderSmallContrainer,
  HeaderSmallWrap,
  HeaderWrap,
} from './HeaderStyle';
import HeaderContens from './HeaderContents';

const Header = ({ isPageMain }) => {
  return (
    <>
      {isPageMain ? (
        <HeaderContrainer>
          <HeaderWrap>
            <HeaderContens />
          </HeaderWrap>
        </HeaderContrainer>
      ) : (
        <HeaderSmallContrainer>
          <HeaderSmallWrap>
            <HeaderContens />
          </HeaderSmallWrap>
        </HeaderSmallContrainer>
      )}
    </>
  );
};

export default Header;
