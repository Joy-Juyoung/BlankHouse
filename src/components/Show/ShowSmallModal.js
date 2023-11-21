import React, { useEffect } from 'react';
import ModalLayout from '../Modals/ModalLayout';
import { ModalContainer, ModalMainSection } from '../Modals/ModalStyle';
import {
  ModalShowMain,
  Sharebox,
  ShareTool,
  ShareWrapper,
  ShowShare,
  ShowShareWrap,
  ShowWrap,
} from './ShowModalStyle';
import StarIcon from '@mui/icons-material/Star';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoService from '../NoService';
import NoUser from '../NoUser';
// import ShowMoreModalLayout from '../Modals/ShowMoreModalLayout';

const ShowSamllModal = ({
  roomInfo,
  toggleShareModal,
  modalShareShown,
  toggleNoServiceModal,
  modalNoServiceShown,
  toggleNoUser,
  modalNoUser,
}) => {
  useEffect(() => {
    if (modalShareShown || modalNoServiceShown) {
      document.body.style.overflow = 'hidden';
    }
  }, [modalShareShown, modalNoServiceShown, modalNoUser]);

  const onToggleClose = () => {
    if (modalShareShown) {
      toggleShareModal(false);
      document.body.style.overflow = 'unset';
    }
    if (modalNoServiceShown) {
      toggleNoServiceModal(false);
    }
    if (modalNoUser) {
      toggleNoUser(false);
    }
  };

  const handleCopyClick = () => {
    const currentLink = window.location.href;

    // Create a temporary input element to copy the URL to the clipboard
    const tempInput = document.createElement('input');
    tempInput.value = currentLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    toast.success('Link copied.', {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
    });
    // alert('Link copied to clipboard: ' + currentLink);
  };

  return (
    <ModalLayout
      shown={modalShareShown || modalNoServiceShown || modalNoUser}
      // shown={onToggleOpen}
      close={onToggleClose}
      title={modalShareShown && 'Share'}
      modalNoServiceShown={modalNoServiceShown}
    >
      <ModalContainer className='small'>
        <ModalShowMain className='small'>
          <ModalMainSection className={modalNoUser && 's'}>
            {modalNoUser && (
              <NoUser toggleNoUser={toggleNoUser} modalNoUser={modalNoUser} />
            )}
            {modalShareShown && (
              <>
                <ShowShareWrap>
                  <img src={roomInfo?.photos[0]?.picture} alt='' />
                  <ShowShare>
                    <ShareWrapper>
                      <p>{roomInfo?.name}</p>
                      <span className='coma'>·</span>
                      <StarIcon sx={{ fontSize: '14px' }} />
                      <span className='strong'>{roomInfo?.rating}</span>
                      {/* <span className='coma'>·</span> */}
                    </ShareWrapper>
                    <ShareWrapper>
                      <span>
                        {roomInfo?.house_type === 'entire_place' &&
                          'Entire place '}
                        {roomInfo?.house_type === 'private_room' &&
                          'Private room '}
                        {roomInfo?.house_type === 'shared_room' &&
                          'Shared room '}
                      </span>
                      <span className='coma'>·</span>
                      <span>{roomInfo?.number_of_bed} bed </span>
                      <span className='coma'>·</span>
                      <span>{roomInfo?.number_of_toilet} bath</span>
                    </ShareWrapper>
                  </ShowShare>
                </ShowShareWrap>
                <Sharebox>
                  <ShareTool onClick={handleCopyClick}>
                    <ContentCopyIcon />
                    <p>Copy Link</p>
                  </ShareTool>
                  <ShareTool
                    onClick={() =>
                      (window.location = 'mailto:yourmail@domain.com')
                    }
                  >
                    <EmailIcon />
                    <p>Email</p>
                  </ShareTool>
                </Sharebox>
              </>
            )}
            {modalNoServiceShown && <NoService />}
          </ModalMainSection>
        </ModalShowMain>
      </ModalContainer>
    </ModalLayout>
  );
};

export default ShowSamllModal;
