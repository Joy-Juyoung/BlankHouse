import React, { useState } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import DomainIcon from '@mui/icons-material/Domain';
import GiteIcon from '@mui/icons-material/Gite';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LogModal from '../Modals/Modal';
import {
  MainFormWrap,
  MainHeaderWrap,
  ModalContainer,
  ModalMainWrapper,
} from './LogInModalStyle';

const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];

const LogInModal = ({ modalLogShown, toggleLogModal }) => {
  return (
    <LogModal
      shown={modalLogShown}
      close={() => {
        toggleLogModal(false);
      }}
      title='Log in or sign up'
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

export default LogInModal;
