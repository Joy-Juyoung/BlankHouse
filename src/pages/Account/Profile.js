import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MainMid,
  MainMidWrap,
  MainSmallContainer,
  MainWrap,
} from '../MainHome/MainStyle';
import {
  RoomTopHeader,
  RoomTopInfo,
  RoomTopText,
  RoomTopWrap,
} from '../Room/RoomStyle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  DisplayInfo,
  DisplaySideWrapper,
  DisplayWrapper,
  InfoEdit,
  InfoInput,
  InfoSave,
  InfoText,
  InfoTitle,
  MainDisplayWrap,
  SideIcon,
  SideInfo,
  SideTitle,
  SideWrap,
} from './AccountStyle';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { editMeUser, editUserAsync } from '../../redux/slices/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = ({ setIsPageMain, userMe }) => {
  const [editUsername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [editEmergency, setEditEmergency] = useState(false);

  const [saveUsername, setSaveUsername] = useState('');
  const [saveEmail, setSaveEmail] = useState('');
  const [savePhone, setSavePhone] = useState('');
  const [saveAddress, setSaveAddress] = useState('');
  const [saveEmergency, setSaveEmergency] = useState('');

  const userEdit = useSelector(editMeUser);
  const dispatch = useDispatch();
  // const successToast = toast.success('Edit profile successfully!', {
  //   position: toast.POSITION.TOP_CENTER,
  //   closeButton: true,
  //   autoClose: 1000,
  //   progressBar: true,
  //   allowHtml: true,
  // });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(false);
  }, [dispatch]);

  const handleEditClick = (field) => {
    switch (field) {
      case 'username':
        setEditUsername(true);
        break;
      case 'email':
        setEditEmail(true);
        break;
      case 'phone_number':
        setEditPhone(true);
        break;
      case 'address':
        setEditAddress(true);
        break;
      case 'emergency_contact':
        setEditEmergency(true);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (event, field) => {
    switch (field) {
      case 'username':
        setSaveUsername(event.target.value);
        break;
      case 'email':
        setSaveEmail(event.target.value);
        break;
      case 'phone_number':
        setSavePhone(event.target.value);
        break;
      case 'address':
        setSaveAddress(event.target.value);
        break;
      case 'emergency_contact':
        setSaveEmergency(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSaveClick = (field) => {
    // event.preventDefault();
    switch (field) {
      case 'username':
        dispatch(editUserAsync({ saveUsername }));
        setEditUsername(false);
        break;
      case 'email':
        dispatch(editUserAsync({ saveEmail }));
        setEditEmail(false);
        break;
      case 'phone_number':
        dispatch(editUserAsync({ savePhone }));
        setEditPhone(false);
        break;
      case 'address':
        dispatch(editUserAsync({ saveAddress }));
        setEditAddress(false);
        break;
      case 'emergency_contact':
        dispatch(editUserAsync({ saveEmergency }));
        setEditEmergency(false);
        break;
      default:
        break;
    }
  };

  const handleCancelClick = (field) => {
    switch (field) {
      case 'username':
        setEditUsername(false);
        break;
      case 'email':
        setEditEmail(false);
        break;
      case 'phone_number':
        setEditPhone(false);
        break;
      case 'address':
        setEditAddress(false);
        break;
      case 'emergency_contact':
        setEditEmergency(false);
        break;
      default:
        break;
    }
  };

  return (
    <MainSmallContainer className='account'>
      <MainWrap className='account'>
        <RoomTopWrap>
          <RoomTopText className='accountPath'>
            <RoomTopInfo>
              <span>
                <Link to='/account' className='accountPath'>
                  Account
                </Link>
              </span>
              <span className='accountPath'>
                <ArrowForwardIosIcon sx={{ fontSize: 11 }} />
              </span>
              <span>Personal info</span>
            </RoomTopInfo>
          </RoomTopText>
          <RoomTopHeader>Personal info</RoomTopHeader>
        </RoomTopWrap>
        <MainMid>
          <MainDisplayWrap>
            <DisplayWrapper>
              <DisplayInfo>
                <InfoText>
                  <InfoTitle>Username</InfoTitle>
                  {!editUsername ? (
                    <>
                      <InfoInput>{userMe?.username}</InfoInput>
                    </>
                  ) : (
                    <>
                      <InfoInput>
                        This is the name on your travel document, which could be
                        a licence or a passport.
                      </InfoInput>
                      <input
                        type='text'
                        value={saveUsername || userMe?.username}
                        onChange={(event) => {
                          handleInputChange(event, 'username');
                        }}
                        id='username'
                      />
                      <InfoSave>
                        <button onClick={() => handleSaveClick('username')}>
                          Save
                        </button>
                      </InfoSave>
                    </>
                  )}
                </InfoText>
                <InfoEdit>
                  <button
                    onClick={() =>
                      editUsername
                        ? handleCancelClick('username')
                        : handleEditClick('username')
                    }
                  >
                    {editUsername ? 'Cancel' : 'Edit'}
                  </button>
                </InfoEdit>
              </DisplayInfo>
              <DisplayInfo>
                <InfoText>
                  <InfoTitle>Email address</InfoTitle>
                  {!editEmail ? (
                    <>
                      <InfoInput>{userMe?.email}</InfoInput>
                    </>
                  ) : (
                    <>
                      <InfoInput>
                        This is the name on your travel document, which could be
                        a licence or a passport.
                      </InfoInput>
                      <input
                        type='email'
                        value={saveEmail || userMe?.email}
                        onChange={(event) => handleInputChange(event, 'email')}
                        id='email'
                      />
                      <InfoSave>
                        <button onClick={() => handleSaveClick('email')}>
                          Save
                        </button>
                      </InfoSave>
                    </>
                  )}
                </InfoText>
                <InfoEdit>
                  <button
                    onClick={() =>
                      editEmail
                        ? handleCancelClick('email')
                        : handleEditClick('email')
                    }
                  >
                    {editEmail ? 'Cancel' : 'Edit'}
                  </button>
                </InfoEdit>
              </DisplayInfo>

              <DisplayInfo>
                <InfoText>
                  <InfoTitle>Phone number</InfoTitle>
                  {!editPhone ? (
                    <>
                      <InfoInput>
                        {userMe?.phone_number || 'Not provided'}
                      </InfoInput>
                    </>
                  ) : (
                    <>
                      <InfoInput>
                        Your contact number is shared with confirmed guests and
                        Blankhouse. You can add other numbers and choose how
                        they’re used.
                      </InfoInput>
                      <input
                        type='text'
                        value={savePhone || userMe?.phone_number || ''}
                        onChange={(event) =>
                          handleInputChange(event, 'phone_number')
                        }
                        id='phone_number'
                      />
                      <InfoSave>
                        <button onClick={() => handleSaveClick('phone_number')}>
                          Save
                        </button>
                      </InfoSave>
                    </>
                  )}
                </InfoText>
                <InfoEdit>
                  <button
                    onClick={() =>
                      editPhone
                        ? handleCancelClick('phone_number')
                        : handleEditClick('phone_number')
                    }
                  >
                    {editPhone ? 'Cancel' : 'Edit'}
                  </button>
                </InfoEdit>
              </DisplayInfo>

              <DisplayInfo>
                <InfoText>
                  <InfoTitle>Address</InfoTitle>
                  {!editAddress ? (
                    <>
                      <InfoInput>{userMe?.address || 'Not provided'}</InfoInput>
                    </>
                  ) : (
                    <>
                      <InfoInput>
                        Your contact number is shared with confirmed guests and
                        Blankhouse. You can add other numbers and choose how
                        they’re used.
                      </InfoInput>
                      <input
                        type='text'
                        value={saveAddress || userMe?.address || ''}
                        onChange={(event) =>
                          handleInputChange(event, 'address')
                        }
                        id='address'
                      />
                      <InfoSave>
                        <button onClick={() => handleSaveClick('address')}>
                          Save
                        </button>
                      </InfoSave>
                    </>
                  )}
                </InfoText>
                <InfoEdit>
                  <button
                    onClick={() =>
                      editAddress
                        ? handleCancelClick('address')
                        : handleEditClick('address')
                    }
                  >
                    {editAddress ? 'Cancel' : 'Edit'}
                  </button>
                </InfoEdit>
              </DisplayInfo>
              <DisplayInfo>
                <InfoText>
                  <InfoTitle>Emergency contact</InfoTitle>
                  {!editEmergency ? (
                    <>
                      <InfoInput>
                        {userMe?.emergency_contact || 'Not provided'}
                      </InfoInput>
                    </>
                  ) : (
                    <>
                      <InfoInput>
                        Your contact number is shared with confirmed guests and
                        Blankhouse. You can add other numbers and choose how
                        they’re used.
                      </InfoInput>
                      <input
                        type='text'
                        value={saveEmergency || userMe?.emergency_contact || ''}
                        onChange={(event) =>
                          handleInputChange(event, 'emergency_contact')
                        }
                        id='emergency_contact'
                      />
                      <InfoSave>
                        <button
                          onClick={() => handleSaveClick('emergency_contact')}
                        >
                          Save
                        </button>
                      </InfoSave>
                    </>
                  )}
                </InfoText>
                <InfoEdit>
                  <button
                    onClick={() =>
                      editEmergency
                        ? handleCancelClick('emergency_contact')
                        : handleEditClick('emergency_contact')
                    }
                  >
                    {editEmergency ? 'Cancel' : 'Edit'}
                  </button>
                </InfoEdit>
              </DisplayInfo>
            </DisplayWrapper>
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
                  Contact info and personal details can be edited. If this info
                  was used to verify your identity, you’ll need to get verified
                  again the next time you book—or to continue hosting.
                </SideInfo>
              </SideWrap>
              <SideWrap>
                <SideIcon>
                  <RemoveRedEyeIcon sx={{ fontSize: 30 }} />
                </SideIcon>
                <SideTitle>What info is shared with others?</SideTitle>
                <SideInfo>
                  Airbnb only releases contact information for Hosts and guests
                  after a reservation is confirmed.
                </SideInfo>
              </SideWrap>
            </DisplaySideWrapper>
          </MainDisplayWrap>
        </MainMid>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Profile;
