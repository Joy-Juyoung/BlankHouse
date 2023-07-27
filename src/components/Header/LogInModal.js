import React, { useState } from 'react';
import {
  ModalContainer,
  ModalMain,
  ModalMainSection,
  ModalMainTitle,
  ModalTitle,
} from '../Modals/ModalStyle';
import {
  DivideLine,
  LoginBtnWrap,
  LoginInputWrap,
  LoginWithBtn,
  LoginWrap,
  ModalLoginMain,
} from './LogInModalStyle';
import LogModal from '../Modals/ModalLayout';
import ColorButton from '../Buttons/ColorButton';
import facebookIcon from '../../assets/images/facebook.png';
import googleIcon from '../../assets/images/google.png';
import appleIcon from '../../assets/images/apple.png';
// const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];

const LogInModal = ({ modalLogShown, toggleLogModal, setIsUserDrop }) => {
  return (
    <LogModal
      shown={modalLogShown}
      close={() => {
        toggleLogModal(false);
      }}
      title='Log in'
    >
      <ModalContainer>
        <ModalLoginMain>
          <ModalMainSection>
            <ModalTitle>Welcome to Blankhouse</ModalTitle>
            <LoginWrap>
              <LoginInputWrap className='first'>
                {/* <LoginInputText> */}
                <p>Username</p>
                <input type='text' placeholder='Enter username' />
                {/* </LoginInputText> */}
              </LoginInputWrap>
              <LoginInputWrap className='last'>
                {/* <LoginInputText> */}
                <p>Password</p>
                <input type='text' placeholder='Enter password' />
                {/* </LoginInputText> */}
              </LoginInputWrap>
            </LoginWrap>
            <LoginWrap>
              <ColorButton buttonLabel='Log in' />
            </LoginWrap>
            <DivideLine>or</DivideLine>
            <LoginWrap>
              <LoginWithBtn>
                <img src={facebookIcon} alt='' />
                <span>Continue with Facebook</span>
              </LoginWithBtn>
              <LoginWithBtn>
                <img src={googleIcon} alt='' />
                <span>Continue with Google</span>
              </LoginWithBtn>
              <LoginWithBtn>
                <img src={appleIcon} alt='' />
                <span>Continue with Apple</span>
              </LoginWithBtn>
              {/* <LoginWithBtn>
                <img src={facebookIcon} alt='' />
                <span>Continue with email</span>
              </LoginWithBtn> */}
            </LoginWrap>
          </ModalMainSection>
        </ModalLoginMain>
      </ModalContainer>
    </LogModal>
  );
};

export default LogInModal;
