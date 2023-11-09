import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MainMid, MainSmallContainer, MainWrap } from '../MainHome/MainStyle';
import {
  RoomTopHeader,
  RoomTopInfo,
  RoomTopText,
  RoomTopWrap,
} from '../Room/RoomStyle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  DisplayInfo,
  DisplayWrapper,
  InfoEdit,
  InfoInput,
  InfoSave,
  InfoText,
  InfoTitle,
  MainDisplayWrap,
} from './AccountStyle';
import { editMeUser, editUserAsync } from '../../redux/slices/userSlice';
// import 'react-toastify/dist/ReactToastify.css';
import ProfileNote from './ProfileNote';

const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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

  const [validPhone, setValidPhone] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const userEdit = useSelector(editMeUser);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(false);
  }, [dispatch]);

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(savePhone));
  }, [savePhone]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(saveEmail));
  }, [saveEmail]);

  // console.log('savePhone', savePhone);

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
    switch (field) {
      case 'username':
        dispatch(editUserAsync({ saveUsername }));
        setEditUsername(false);
        break;
      case 'email':
        if (validEmail) {
          dispatch(editUserAsync({ saveEmail }));
          setEditEmail(false);
        }
        if (!saveEmail) {
          dispatch(editUserAsync({ saveEmail: '' }));
          setEditEmail(false);
        }
        break;
      case 'phone_number':
        if (validPhone) {
          dispatch(editUserAsync({ savePhone }));
          setEditPhone(false);
        }
        if (!savePhone) {
          dispatch(editUserAsync({ savePhone: '' }));
          setEditPhone(false);
        }
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
        setSaveEmail(userMe?.email);
        break;
      case 'phone_number':
        setEditPhone(false);
        setSavePhone(userMe?.phone_number);
        break;
      case 'address':
        setEditAddress(false);
        setSavePhone(userMe?.address);
        break;
      case 'emergency_contact':
        setEditEmergency(false);
        setSavePhone(userMe?.emergency_contact);
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
                  <InfoInput>{userMe?.username}</InfoInput>
                </InfoText>
              </DisplayInfo>
              <DisplayInfo>
                <InfoText>
                  <InfoTitle>Email address</InfoTitle>
                  {!editEmail ? (
                    <>
                      <InfoInput>{userMe?.email || 'Not provided'}</InfoInput>
                    </>
                  ) : (
                    <>
                      <InfoInput>
                        This is the name on your travel document, which could be
                        a licence or a passport.
                      </InfoInput>
                      <input
                        type='email'
                        value={
                          saveEmail?.length < 1
                            ? ''
                            : saveEmail || userMe?.email
                        }
                        onChange={(event) => handleInputChange(event, 'email')}
                        id='email'
                      />
                      {saveEmail && !validEmail && (
                        <span
                          style={{
                            color: 'red',
                            marginLeft: '10px',
                            fontSize: '12px',
                          }}
                        >
                          *Please enter a valid email.
                        </span>
                      )}
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
                        value={
                          savePhone?.length < 1
                            ? ''
                            : savePhone || userMe?.phone_number
                        }
                        onChange={(event) =>
                          handleInputChange(event, 'phone_number')
                        }
                        id='phone_number'
                        maxLength={15}
                        // placeholder={userMe?.phone_number}
                      />
                      {savePhone && !validPhone && (
                        <span
                          style={{
                            color: 'red',
                            marginLeft: '10px',
                            fontSize: '12px',
                          }}
                        >
                          *Please enter a valid phone number.
                        </span>
                      )}
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
                        value={
                          saveEmergency?.length < 1
                            ? ''
                            : saveEmergency || userMe?.emergency_contact
                        }
                        onChange={(event) =>
                          handleInputChange(event, 'emergency_contact')
                        }
                        id='emergency_contact'
                        maxLength={15}
                        // placeholder={userMe?.emergency_contact}
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
            <ProfileNote />
          </MainDisplayWrap>
        </MainMid>
      </MainWrap>
    </MainSmallContainer>
  );
};

export default Profile;
