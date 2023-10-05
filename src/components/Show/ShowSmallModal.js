import React, { useEffect } from 'react';
import RoomAmenity from '../../pages/Room/RoomAmenity';
import ModalLayout from '../Modals/ModalLayout';
import {
  ModalContainer,
  ModalMain,
  ModalMainSection,
  ModalTitle,
} from '../Modals/ModalStyle';
import {
  ModalShowMain,
  Sharebox,
  ShareTool,
  ShareWrapper,
  ShowShare,
  ShowShareWrap,
  ShowWrap,
} from './ShowModalStyle';
import ShowMoreReview from './ShowMoreReview';
import StarIcon from '@mui/icons-material/Star';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ShowMoreModalLayout from '../Modals/ShowMoreModalLayout';

const ShowSamllModal = ({
  roomInfo,

  toggleShareModal,
  modalShareShown,
}) => {
  const onToggleClose = () => {
    if (modalShareShown) {
      toggleShareModal(false);
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
      shown={modalShareShown}
      close={onToggleClose}
      title={modalShareShown && 'Share'}
    >
      <ModalContainer className='small'>
        <ModalShowMain className='small'>
          <ModalMainSection>
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
          </ModalMainSection>
        </ModalShowMain>
      </ModalContainer>
    </ModalLayout>
  );
};

export default ShowSamllModal;
