import React, { useState } from 'react';

import LogModal from '../Modals/ModalLayout';
import {
  MainFormWrap,
  MainHeaderWrap,
  ModalContainer,
  ModalMainWrapper,
} from './LogInModalStyle';

const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];

const SignupModal = ({ modalSignupShown, toggleSignupModal }) => {
  return (
    <LogModal
      shown={modalSignupShown}
      close={() => {
        toggleSignupModal(false);
      }}
      title='sign up'
    >
      <ModalContainer>
        <ModalMainWrapper>
          <MainHeaderWrap>
            <h3>Welcome to Airbnb</h3>
          </MainHeaderWrap>
          <MainFormWrap></MainFormWrap>
        </ModalMainWrapper>
      </ModalContainer>
    </LogModal>
  );
};
export default SignupModal;
