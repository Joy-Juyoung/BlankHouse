import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ModalContainer,
  ModalMain,
  ModalMainSection,
  ModalMainTitle,
  ModalTitle,
} from '../Modals/ModalStyle';
import {
  DivideLine,
  EyeIcon,
  GotoSignup,
  LoginBtn,
  LoginBtnWrap,
  LoginInputWrap,
  LoginWithBtn,
  LoginWrap,
  ModalLoginMain,
  PassewordWrapper,
} from './LogInModalStyle';
import LogModal from '../Modals/ModalLayout';
import ColorButton from '../Buttons/ColorButton';
import facebookIcon from '../../assets/images/facebook.png';
import googleIcon from '../../assets/images/google.png';
import appleIcon from '../../assets/images/apple.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, userMe } from '../../redux/slices/users';
import { useDispatch, useSelector } from 'react-redux';
import SuccessAlert from '../Notifications/SuccessAlert';
// const anyOptionList = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+'];

const LogInModal = ({
  modalLogShown,
  toggleLogModal,
  modalSignupShown,
  toggleSignupModal,
  setIsUserDrop,
  isLoggedIn,
  setIsLoggedIn,
  users,
  // setIsLoginSuccess,
}) => {
  const [username, setUsernmae] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigate();

  // const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // const initFetch = useCallback(() => {
  //   dispatch(userMe());
  // }, [dispatch]);

  // useEffect(() => {
  //   initFetch();
  // }, [initFetch, isLoggedIn, username]);

  console.log('users', users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
    setIsLoggedIn(true);
    toggleLogModal(false);
    setIsUserDrop(false);
    // setIsLoginSuccess(true);
  };

  // useEffect(() => {
  //   if (users?.ok === 'Welcome!') {
  //     setIsLoginSuccess(true);
  //   }
  // }, []);

  return (
    <LogModal
      shown={modalLogShown}
      close={() => {
        toggleLogModal(false);
        setIsUserDrop(false);
      }}
      title='Log in'
    >
      {users?.ok === 'Welcome!' && <SuccessAlert />}
      <ModalContainer>
        <ModalLoginMain>
          <ModalMainSection>
            <ModalTitle>Welcome to Blankhouse</ModalTitle>
            {/* <form onSubmit={handleSubmit> */}
            <form onSubmit={handleSubmit}>
              <LoginWrap>
                <LoginInputWrap className='first'>
                  <p>Username</p>
                  <input
                    type='text'
                    placeholder='Enter username'
                    onChange={(e) => setUsernmae(e.target.value)}
                    value={username}
                    name='username'
                    required
                  />
                </LoginInputWrap>
                <LoginInputWrap className='last'>
                  <p>Password</p>
                  <PassewordWrapper>
                    <input
                      type='password'
                      placeholder='Enter password'
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      name='password'
                      required
                    />
                    <EyeIcon>
                      {/* {pwdType === 'password' ? (
                  <VisibilityOffIcon  onClick={togglePwd} fontSize='small' />
                ) : (
                  <VisibilityIcon  onClick={togglePwd} fontSize='small' />
                )} */}
                      <VisibilityOffIcon />
                    </EyeIcon>
                  </PassewordWrapper>
                </LoginInputWrap>
              </LoginWrap>
              <LoginBtn type='submit'>
                <ColorButton buttonLabel='Log in' on />
              </LoginBtn>
            </form>
            <DivideLine>or</DivideLine>
            <LoginWrap>
              <LoginWithBtn>
                <img src={facebookIcon} alt='' />
                <span>Continue with Facebook</span>
              </LoginWithBtn>
              <LoginWithBtn>
                <img src={googleIcon} alt='' />
                <span>Continue with Google</span>
              </LoginWithBtn>
              <LoginWithBtn>
                <img src={appleIcon} alt='' />
                <span>Continue with Apple</span>
              </LoginWithBtn>
            </LoginWrap>
            <LoginWrap>
              <GotoSignup>
                Don't have an account?
                <span
                  onClick={() => {
                    toggleLogModal(!modalLogShown);
                    toggleSignupModal(!modalSignupShown);
                  }}
                >
                  Go to Sign up
                </span>
              </GotoSignup>
            </LoginWrap>
            {/* </form> */}
          </ModalMainSection>
        </ModalLoginMain>
      </ModalContainer>
      {/* </form> */}
    </LogModal>
  );
};

export default LogInModal;
