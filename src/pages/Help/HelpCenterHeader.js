import React, { useEffect, useRef, useState } from 'react';
import { ButtonsWrapper } from '../Host/BecomeHost/StepStyle';
import {
  HelpContainer,
  HelpFooter,
  HelpFooterWrap,
  HelpHeader,
  HelpLogoWrapper,
} from './HelpStyle';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../../assets/logo-bl.png';
import {
  HeaderRightSection,
  LogBtn,
  UserSetting,
} from '../../components/Header/HeaderStyle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '../../components/Avatar/Avatar';
import UserDropBox from '../../components/Dropdown/UserDropBox';

const HelpCenterHeader = ({ userMe, isUserLogIn, setIsUserLogIn }) => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [modalSearchShown, toggleSearchModal] = useState(false);
  const [isUserDrop, setIsUserDrop] = useState(false);

  return (
    <>
      <HelpLogoWrapper onClick={() => navigate('/')}>
        <img src={Logo} alt='' />
        <span>Help Centre</span>
      </HelpLogoWrapper>
      <HeaderRightSection>
        {/* {(isUserLogIn || JSON.parse(localStorage.getItem('user'))) && ( */}
        {isUserLogIn || JSON.parse(localStorage.getItem('user')) ? (
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
        ) : (
          <UserSetting
            onClick={() => {
              setIsUserDrop(!isUserDrop);
              toggleSearchModal(false);
            }}
            ref={dropdownRef}
          >
            <MenuIcon fontSize='medium' />
            <LogBtn>
              <AccountCircleIcon fontSize='medium' />
            </LogBtn>
          </UserSetting>
        )}
      </HeaderRightSection>
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
    </>
  );
};

export default HelpCenterHeader;
