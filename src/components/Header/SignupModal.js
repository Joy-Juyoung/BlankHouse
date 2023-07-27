import React, { useState } from 'react';

import LogModal from '../Modals/ModalLayout';
import {
  ModalContainer,
  ModalMain,
  ModalMainSection,
  ModalMainTitle,
  ModalTitle,
} from '../Modals/ModalStyle';
import { LoginWrap } from './LogInModalStyle';

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
        <ModalMain>
          <ModalMainSection>
            <ModalTitle>Welcome to Airbnb</ModalTitle>
            <LoginWrap></LoginWrap>
          </ModalMainSection>
        </ModalMain>
      </ModalContainer>
    </LogModal>
  );
};
export default SignupModal;
