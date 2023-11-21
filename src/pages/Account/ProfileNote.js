import React from 'react';
import {
  DisplaySideWrapper,
  SideIcon,
  SideInfo,
  SideTitle,
  SideWrap,
} from './AccountStyle';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const ProfileNote = () => {
  return (
    <DisplaySideWrapper>
      <SideWrap className='firstSide'>
        <SideIcon>
          <PrivacyTipIcon sx={{ fontSize: 30 }} />
        </SideIcon>
        <SideTitle>Why isn’t my info shown here?</SideTitle>
        <SideInfo>
          We’re hiding some account details to protect your identity.
        </SideInfo>
      </SideWrap>
      <SideWrap>
        <SideIcon>
          <LockIcon sx={{ fontSize: 30 }} />
        </SideIcon>
        <SideTitle>Which details can be edited?</SideTitle>
        <SideInfo>
          Contact info and personal details can be edited. If this info was used
          to verify your identity, you’ll need to get verified again the next
          time you book—or to continue hosting.
        </SideInfo>
      </SideWrap>
      <SideWrap>
        <SideIcon>
          <RemoveRedEyeIcon sx={{ fontSize: 30 }} />
        </SideIcon>
        <SideTitle>What info is shared with others?</SideTitle>
        <SideInfo>
          Airbnb only releases contact information for Hosts and guests after a
          reservation is confirmed.
        </SideInfo>
      </SideWrap>
    </DisplaySideWrapper>
  );
};

export default ProfileNote;
