import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  MainMid,
  MainMidWrap,
  MainSmallContainer,
  MainWrap,
} from '../MainHome/MainStyle';
import {
  RoomTopHeader,
  RoomTopInfo,
  RoomTopText,
  RoomTopWrap,
} from '../Room/RoomStyle';
import { AccountBox, BoxIcon, BoxInfo, BoxTitle } from './AccountStyle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShieldIcon from '@mui/icons-material/Shield';
import PaymentsIcon from '@mui/icons-material/Payments';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CampaignIcon from '@mui/icons-material/Campaign';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BarChartIcon from '@mui/icons-material/BarChart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LanguageIcon from '@mui/icons-material/Language';

const Account = ({ setIsPageMain, userMe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(false);
  }, [dispatch]);

  return (
    <MainSmallContainer className='account'>
      <MainWrap className='account'>
        <RoomTopWrap>
          <RoomTopHeader>Account</RoomTopHeader>
          <RoomTopText className='account'>
            <RoomTopInfo>
              <span style={{ fontWeight: '600' }}>{userMe?.username}</span>
              {/* <span className='coma'>·</span>
              <span>{userMe?.email}</span> */}
              <span className='coma'>·</span>
              <span>
                <Link to='/account/profile'>Go to profile</Link>
              </span>
            </RoomTopInfo>
          </RoomTopText>
        </RoomTopWrap>
        <MainMid>
          <MainMidWrap className='account'>
            <AccountBox onClick={() => navigate('/account/profile')}>
              <BoxIcon>
                <AccountBoxIcon sx={{ fontSize: 35 }} />
              </BoxIcon>
              <BoxTitle>Personal info</BoxTitle>
              <BoxInfo>
                Provide personal details and how we can reach you
              </BoxInfo>
            </AccountBox>
            <AccountBox>
              <BoxIcon>
                <ShieldIcon sx={{ fontSize: 35 }} />
              </BoxIcon>
              <BoxTitle>Login & security</BoxTitle>
              <BoxInfo>Update your password</BoxInfo>
            </AccountBox>
            <AccountBox onClick={() => navigate('/account/balances')}>
              <BoxIcon>
                <PaymentsIcon sx={{ fontSize: 35 }} />
              </BoxIcon>
              <BoxTitle>Payments & Balances</BoxTitle>
              <BoxInfo>
                {/* Review payments, payouts, coupons, and gift cards */}
                Review payments and add your balances
              </BoxInfo>
            </AccountBox>
            {/* </Link> */}
            <AccountBox>
              <BoxIcon>
                <LanguageIcon sx={{ fontSize: 35 }} />
              </BoxIcon>
              <BoxTitle>Global preferences</BoxTitle>
              <BoxInfo>Default language, currency, and time zone</BoxInfo>
            </AccountBox>
            <AccountBox>
              <BoxIcon>
                <CampaignIcon sx={{ fontSize: 35 }} />
              </BoxIcon>
              <BoxTitle>Notifications</BoxTitle>
              <BoxInfo>
                Choose notification preferences and how you want to be contacted
              </BoxInfo>
            </AccountBox>
            <AccountBox>
              <BoxIcon>
                <RemoveRedEyeIcon sx={{ fontSize: 35 }} />
              </BoxIcon>
              <BoxTitle>Privacy</BoxTitle>
              <BoxInfo>Manage your personal data</BoxInfo>
            </AccountBox>
            <AccountBox>
              <BoxIcon>
                <BarChartIcon sx={{ fontSize: 35 }} />
              </BoxIcon>
              <BoxTitle>Professional hosting tools</BoxTitle>
              <BoxInfo>
                Get professional tools if you manage several properties on
                BlankHouse
              </BoxInfo>
            </AccountBox>
            <AccountBox>
              <BoxIcon>
                <CardGiftcardIcon sx={{ fontSize: 35 }} />
              </BoxIcon>
              <BoxTitle>Referral credit & coupon</BoxTitle>
              <BoxInfo>
                Review your coupons and gift cards
                {/* You have $0 CAD referral credits and coupon. Learn more. */}
              </BoxInfo>
            </AccountBox>
          </MainMidWrap>
        </MainMid>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Account;
