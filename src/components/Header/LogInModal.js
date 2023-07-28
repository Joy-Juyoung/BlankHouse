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
  EyeIcon,
  GotoSignup,
  LoginBtnWrap,
  LoginInputWrap,
  LoginWithBtn,
  LoginWrap,
  ModalLoginMain,
  PassewordWrapper,
} from './LogInModalStyle';
import LogModal from '../Modals/ModalLayout';
import ColorButton from '../Buttons/ColorButton';
import facebookIcon from '../../assets/images/facebook.png';
import googleIcon from '../../assets/images/google.png';
import appleIcon from '../../assets/images/apple.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
// const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];

const LogInModal = ({
  modalLogShown,
  toggleLogModal,
  modalSignupShown,
  toggleSignupModal,
  setIsUserDrop,
}) => {
  return (
    <LogModal
      shown={modalLogShown}
      close={() => {
        toggleLogModal(false);
        setIsUserDrop(false);
      }}
      title='Log in'
    >
      <ModalContainer>
        <ModalLoginMain>
          <ModalMainSection>
            <ModalTitle>Welcome to Blankhouse</ModalTitle>
            <LoginWrap>
              <LoginInputWrap className='first'>
                <p>Username</p>
                <input type='text' placeholder='Enter username' />
              </LoginInputWrap>
              <LoginInputWrap className='last'>
                <p>Password</p>
                <PassewordWrapper>
                  <input type='password' placeholder='Enter password' />
                  <EyeIcon>
                    {/* {pwdType === 'password' ? (
                  <VisibilityOffIcon  onClick={togglePwd} fontSize='small' />
                ) : (
                  <VisibilityIcon  onClick={togglePwd} fontSize='small' />
                )} */}
                    <VisibilityOffIcon />
                  </EyeIcon>
                </PassewordWrapper>
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
            </LoginWrap>
            <LoginWrap>
              <GotoSignup>
                Don't have an account?
                <span
                  onClick={() => {
                    toggleLogModal(!modalLogShown);
                    toggleSignupModal(!modalSignupShown);
                  }}
                >
                  Go to Sign up
                </span>
              </GotoSignup>
            </LoginWrap>
          </ModalMainSection>
        </ModalLoginMain>
      </ModalContainer>
    </LogModal>
  );
};

export default LogInModal;
