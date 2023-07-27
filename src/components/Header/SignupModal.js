import React, { useState } from 'react';

import LogModal from '../Modals/ModalLayout';
import {
  ModalContainer,
  ModalMain,
  ModalMainSection,
  ModalMainTitle,
  ModalTitle,
} from '../Modals/ModalStyle';
import {
  DivideLine,
  GotoSignup,
  LoginInputWrap,
  LoginWithBtn,
  LoginWrap,
  ModalLoginMain,
} from './LogInModalStyle';

const SignupModal = ({
  modalSignupShown,
  toggleSignupModal,
  modalLogShown,
  toggleLogModal,
}) => {
  return (
    <LogModal
      shown={modalSignupShown}
      close={() => {
        toggleSignupModal(false);
      }}
      title='sign up'
    >
      <ModalContainer>
        <ModalLoginMain>
          <ModalMainSection>
            <ModalTitle>Create account</ModalTitle>
            <LoginWrap>
              <LoginInputWrap className='first'>
                <p>Username</p>
                <input type='text' placeholder='Enter username' />
              </LoginInputWrap>
              <LoginInputWrap className='last'>
                <p>Password</p>
                <input type='password' placeholder='Enter password' />
              </LoginInputWrap>
            </LoginWrap>
            <LoginWrap>
              <GotoSignup>
                Already have an account?
                <span
                  onClick={() => {
                    toggleLogModal(!modalLogShown);
                    toggleSignupModal(!modalSignupShown);
                  }}
                >
                  Go to Log in
                </span>
              </GotoSignup>
            </LoginWrap>
          </ModalMainSection>
        </ModalLoginMain>
      </ModalContainer>
    </LogModal>
  );
};
export default SignupModal;
