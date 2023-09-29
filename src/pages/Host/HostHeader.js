import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  HeaderRightSection,
  HeaderWrapper,
  LogBtn,
  UserSetting,
} from '../../components/Header/HeaderStyle';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import UserDropBox from '../../components/Dropdown/UserDropBox';
import Avatar from '../../components/Avatar/Avatar';

export const HostHeaderContainer = styled.div`
  height: 80px;
  border-bottom: 1px solid lightgray;
  padding: 0 40px;

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const HostHeaderWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  max-width: 1700px;
`;

const HostHeader = ({ userMe, isUserLogIn, setIsUserLogIn }) => {
  const dropdownRef = useRef(null);
  const [modalSearchShown, toggleSearchModal] = useState(false);
  const [isUserDrop, setIsUserDrop] = useState(false);

  return (
    <HostHeaderContainer>
      <HostHeaderWrap>
        <HeaderWrapper>
          <img src={Logo} alt='' />
          <Link to='/'>
            <h1>BlankHouse</h1>
          </Link>
        </HeaderWrapper>

        <HeaderWrapper className='headerRight'>
          {/* <HeaderRightSection>
            <Link to='/host/become'>
              <div>
                <button>Manage Listing</button>
              </div>
            </Link>
          </HeaderRightSection>
          <HeaderRightSection>
            <Link to='/host/become'>
              <div>
                <button>Airbnb your home</button>
              </div>
            </Link>
          </HeaderRightSection>
          <HeaderRightSection>
            <Link to='/host/become'>
              <div>
                <button>Airbnb your home</button>
              </div>
            </Link>
          </HeaderRightSection> */}
          {isUserLogIn && (
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
                  {/* <img src={user?.user?.} alt='' /> */}
                  <span>
                    <Avatar
                      initials={userMe?.username?.substring(0, 1).toUpperCase()}
                    />
                  </span>
                </LogBtn>
              </UserSetting>
            </HeaderRightSection>
          )}
          {isUserDrop && (
            <>
              <UserDropBox
                setIsUserDrop={setIsUserDrop}
                isUserDrop={isUserDrop}
                dropdownRef={dropdownRef}
                userMe={userMe}
                isUserLogIn={isUserLogIn}
                setIsUserLogIn={setIsUserLogIn}
              />
            </>
          )}
        </HeaderWrapper>
      </HostHeaderWrap>
    </HostHeaderContainer>
  );
};

export default HostHeader;
