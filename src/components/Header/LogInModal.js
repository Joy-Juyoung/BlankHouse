import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ModalContainer,
  ModalMainSection,
  ModalTitle,
} from '../Modals/ModalStyle';
import {
  DivideLine,
  EyeIcon,
  GotoSignup,
  LoginBtn,
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
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../redux/slices/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogInModal = ({
  modalLogShown,
  toggleLogModal,
  modalSignupShown,
  toggleSignupModal,
  setIsUserDrop,
  user,
  isUserLogIn,
  setIsUserLogIn,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // console.log('username', username);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAsync({ username, password }))
      .then(() => {
        // toast.success('Logged in successfully!');
        toggleLogModal(false);
        setIsUserDrop(false);
        setIsUserLogIn(true);
      })
      .catch((error) => {
        console.error(error);
        toast.error('Login failed. Please try again.');
      });
  };

  // useEffect(()=> {
  //   toast.success('Logged in successfully!');
  // },[])

  return (
    <LogModal
      shown={modalLogShown}
      close={() => {
        toggleLogModal(false);
        setIsUserDrop(false);
      }}
      title='Log in'
    >
      {/* {authIsLoggIn === true && <SuccessAlert />} */}
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter your username'
                    required
                  />
                </LoginInputWrap>
                <LoginInputWrap className='last'>
                  <p>Password</p>
                  <PassewordWrapper>
                    <input
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Enter your password'
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
      {/* <ToastContainer /> */}
    </LogModal>
  );
};

export default LogInModal;
