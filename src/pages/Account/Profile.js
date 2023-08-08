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
        setEditEmail(true);
        break;
      case 'address':
        setEditEmail(true);
        break;
      case 'emergency_contact':
        setEditEmail(true);
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

  // useEffect(() => {
  //   dispatch(
  //     editUserAsync({
  //       saveUsername,
  //       saveEmail,
  //       savePhone,
  //       saveAddress,
  //       saveEmergency,
  //     })
  //   );
  // }, [saveUsername, saveEmail, savePhone, saveAddress, saveEmergency]);

  const handleCancelClick = (field) => {
    switch (field) {
      case 'username':
        setEditUsername(false);
        break;
      case 'email':
        setEditEmail(false);
        break;
      case 'phone_number':
        setEditEmail(false);
        break;
      case 'address':
        setEditEmail(false);
        break;
      case 'emergency_contact':
        setEditEmail(false);
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
                {!editUsername ? (
                  <InfoEdit>
                    <button onClick={() => handleEditClick('username')}>
                      Edit
                    </button>
                  </InfoEdit>
                ) : (
                  <InfoEdit>
                    <button onClick={() => handleCancelClick('username')}>
                      Cancel
                    </button>
                  </InfoEdit>
                )}
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
                        // value={userMe?.email}
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
                {!editEmail ? (
                  <InfoEdit>
                    <button onClick={() => handleEditClick('email')}>
                      Edit
                    </button>
                  </InfoEdit>
                ) : (
                  <InfoEdit>
                    <button onClick={() => handleCancelClick('email')}>
                      Cancel
                    </button>
                  </InfoEdit>
                )}
              </DisplayInfo>

              <DisplayInfo>
                <InfoText>
                  <InfoTitle>Phone number</InfoTitle>
                  <InfoInput>{userMe?.phone_number}</InfoInput>
                </InfoText>
                <InfoEdit>
                  <button>Edit</button>
                </InfoEdit>
              </DisplayInfo>
              <DisplayInfo>
                <InfoText>
                  <InfoTitle>Address</InfoTitle>
                  <InfoInput>{userMe?.address}</InfoInput>
                </InfoText>
                <InfoEdit>
                  <button>Edit</button>
                </InfoEdit>
              </DisplayInfo>
              <DisplayInfo>
                <InfoText>
                  <InfoTitle>Emergency contact</InfoTitle>
                  <InfoInput>{userMe?.emergency_contact}</InfoInput>
                </InfoText>
                <InfoEdit>
                  <button>Edit</button>
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
