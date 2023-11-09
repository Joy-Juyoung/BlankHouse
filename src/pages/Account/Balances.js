import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainMid, MainSmallContainer, MainWrap } from '../MainHome/MainStyle';
import {
  RoomTopHeader,
  RoomTopInfo,
  RoomTopText,
  RoomTopWrap,
} from '../Room/RoomStyle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProfileNote from './ProfileNote';
import { DisplayWrapper, MainDisplayWrap } from './AccountStyle';
import PaymentBalance from '../Payment/PaymentBalance';
import {
  BalanceBtn,
  PaymentBalanceBtn,
  PaymentBalanceMsg,
  PaymentInfoDetail,
  PaymentInfoTitle,
  PaymentInfoWrapper,
  PaymentOptions,
} from '../Payment/PaymentStyle';
import AddIcon from '@mui/icons-material/Add';
import ShowMoreModal from '../../components/Show/ShowMoreModal';

const Balances = ({ setIsPageMain, userMe }) => {
  const [modalBalanceShown, toggleBalanceModal] = useState(false);

  return (
    <MainSmallContainer className='account'>
      <MainWrap className='account'>
        <RoomTopWrap>
          <RoomTopText className='accountPath'>
            <RoomTopInfo>
              <span>
                <Link to='/account' className='accountPath'>
                  Account
                </Link>
              </span>
              <span className='accountPath'>
                <ArrowForwardIosIcon sx={{ fontSize: 11 }} />
              </span>
              <span>Payments & Balances</span>
            </RoomTopInfo>
          </RoomTopText>
          <RoomTopHeader>Payments & Balances</RoomTopHeader>
        </RoomTopWrap>
        <MainMid>
          <MainDisplayWrap>
            <DisplayWrapper>
              <PaymentInfoWrapper>
                <PaymentInfoTitle>Your Balance</PaymentInfoTitle>
                <PaymentInfoDetail>
                  <PaymentOptions>
                    <span>Your Current Balances:</span>
                    <span>
                      $
                      {userMe?.balance?.toLocaleString('en-US', {
                        style: 'decimal',
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </PaymentOptions>
                  <PaymentBalanceMsg>
                    <PaymentBalanceBtn>
                      <BalanceBtn
                        onClick={() => toggleBalanceModal(!modalBalanceShown)}
                      >
                        <AddIcon sx={{ fontSize: 18 }} />
                        <span>Add Balance</span>
                      </BalanceBtn>
                    </PaymentBalanceBtn>
                  </PaymentBalanceMsg>
                </PaymentInfoDetail>

                <ShowMoreModal
                  toggleBalanceModal={toggleBalanceModal}
                  modalBalanceShown={modalBalanceShown}
                  userMe={userMe}
                />
              </PaymentInfoWrapper>
            </DisplayWrapper>
            <ProfileNote />
          </MainDisplayWrap>
        </MainMid>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Balances;
