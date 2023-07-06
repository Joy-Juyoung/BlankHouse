import React, { useState } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import DomainIcon from '@mui/icons-material/Domain';
import GiteIcon from '@mui/icons-material/Gite';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LogModal from '../Modals/LogModal';
import { ContinueBtn, ContinueBtnWrap, CountrySelect, CountryTitle, CountryWrap, InputListsWrap, InputWrapper, ListsWrapper, LoginInfosWrap,MainFormWrap, MainHeaderWrap, ModalContainer, ModalMain, ModalMainSection, ModalMainTitle, ModalMainWrapper, PhoneNumTitle, PhoneNumWrap, PlaceDivider, PlaceInput, PlaceInputText, PlaceTypeWrap, PlaceTypeWrapper, PolicyLink } from './LogInModalStyle';


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
        <ModalMain>
            <ModalMainTitle>
              <h3>Welcome to Airbnb</h3>
            </ModalMainTitle>
            <PlaceTypeWrap>
              <PlaceTypeWrapper>
                <InputListsWrap>
                  <ListsWrapper>
                    <CountryWrap>
                      <CountryTitle>
                        <span>Country/Region</span>
                      </CountryTitle>
                      <CountrySelect>
                        <option>Canada (+1)</option>
                        <option>Korea (+82)</option>
                        <option>China (+86)</option>
                        <option>Japan (+81)</option>
                      </CountrySelect>
                    </CountryWrap>
                  </ListsWrapper>
    
                  <ListsWrapper>
                    <PhoneNumWrap>
                        {/* <PhoneNumTitle>
                          <span>Phone number</span>
                        </PhoneNumTitle> */}
                        <InputWrapper>
                          {/* <input placeholder='+1 (XXX)-XXX-XXXX'/> */}
                        </InputWrapper>
                    </PhoneNumWrap>
                  </ListsWrapper>
                </InputListsWrap>
                <LoginInfosWrap>
                  <span>We'll call or text you to confirm your number. Standard message and data rates apply.
                    <PolicyLink>Privacy Policy.</PolicyLink>
                  </span>
                </LoginInfosWrap>
                <ContinueBtnWrap>
                  <ContinueBtn>
                      <span>Continue</span>
                  </ContinueBtn>
                </ContinueBtnWrap>
              </PlaceTypeWrapper>
            </PlaceTypeWrap>
            <PlaceDivider>
              <span>---------- or ----------</span>
            </PlaceDivider>
        </ModalMain>
      </ModalContainer>

    </LogModal>
  );
};

export default LogInModal;
