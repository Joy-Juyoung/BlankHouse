import React from 'react';
import ModalLayout from '../Modals/ModalLayout';
import {
  ModalContainer,
  ModalMain,
  ModalMainSection,
  ModalTitle,
} from '../Modals/ModalStyle';
import { ModalShowMain, ShowWrap } from './ShowModalStyle';
// import ShowMoreModalLayout from '../Modals/ShowMoreModalLayout';

const ShowMoreModal = ({
  toggleAboutPlaceModal,
  modalAboutPlaceShown,
  roomInfo,
}) => {
  return (
    <ModalLayout
      shown={modalAboutPlaceShown}
      close={() => {
        toggleAboutPlaceModal(false);
      }}
      title='About this place'
    >
      <ModalContainer>
        <ModalShowMain>
          <ModalMainSection>
            {/* <ModalTitle>About this place</ModalTitle> */}
            <ShowWrap>{roomInfo?.description}</ShowWrap>
          </ModalMainSection>
        </ModalShowMain>
      </ModalContainer>
    </ModalLayout>
  );
};

export default ShowMoreModal;
