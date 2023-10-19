import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ModalContainer,
  ModalMainSection,
  ModalTitle,
} from '../Modals/ModalStyle';
import {
  DivideLine,
  ErrorMsg,
  EyeIcon,
  GotoSignup,
  LoginBtn,
  LoginInputWrap,
  LoginTitle,
  LoginWithBtn,
  LoginWrap,
  ModalLoginMain,
  PassewordWrapper,
  VerificationMsg,
} from './LogInModalStyle';
import LogModal from '../Modals/ModalLayout';
import ColorButton from '../Buttons/ColorButton';
import facebookIcon from '../../assets/images/facebook.png';
import googleIcon from '../../assets/images/google.png';
import appleIcon from '../../assets/images/apple.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, loginUser } from '../../redux/slices/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const LogInModal = ({
  modalLogShown,
  toggleLogModal,
  modalSignupShown,
  toggleSignupModal,
  setIsUserDrop,
  // isUserDrop,
  userMe,
  // setUserMe,
  isUserLogIn,
  setIsUserLogIn,
}) => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  // const [userInfo, setUserIngo] = useState('');
  // let userInfo = JSON.parse(localStorage.getItem('user'));

  const userLogin = useSelector(loginUser);
  const dispatch = useDispatch();

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  useEffect(() => {
    userRef.current?.focus();
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setValidUsername(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const v1 = USERNAME_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }

    dispatch(loginAsync({ username, password }));
    toggleLogModal(false);
  };

  return (
    <LogModal
      shown={modalLogShown}
      close={() => {
        toggleLogModal(false);
        setIsUserDrop(false);
      }}
      title='Log in'
    >
      <ModalContainer>
        <ModalLoginMain>
          <ModalMainSection>
            <LoginTitle>Welcome to Blankhouse</LoginTitle>
            <ErrorMsg
              ref={errRef}
              style={{ display: errMsg ? 'block' : 'none' }}
              aria-live='assertive'
            >
              <div>{errMsg}</div>
            </ErrorMsg>
            <form onSubmit={handleSubmit}>
              <LoginWrap>
                <LoginInputWrap className='first'>
                  <p>Username</p>
                  <input
                    ref={userRef}
                    type='text'
                    id='username'
                    autoComplete='off'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                    aria-invalid={validUsername ? 'false' : 'true'}
                    aria-describedby='uidnote'
                    onFocus={() => setUsernameFocus(true)}
                    onBlur={() => setUsernameFocus(false)}
                    placeholder='Enter your username'
                  />
                </LoginInputWrap>
                <VerificationMsg
                  id='uidnote'
                  style={{
                    display: validUsername || !username ? 'none' : 'flex',
                    marginBottom: '20px',
                  }}
                >
                  <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
                  <span>
                    4 to 24 characters.Must begin with a letter. Letters,
                    numbers, underscores, hyphens allowed.
                  </span>
                </VerificationMsg>
                <LoginInputWrap className='last'>
                  <p>Password</p>
                  <PassewordWrapper>
                    <input
                      placeholder='Enter password.'
                      type={passwordType}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      name='password'
                      required
                      aria-invalid={validPassword ? 'false' : 'flex'}
                      aria-describedby='pwdnote'
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                    />
                    <EyeIcon>
                      {passwordType === 'password' ? (
                        <VisibilityOffIcon
                          onClick={togglePassword}
                          fontSize='small'
                        />
                      ) : (
                        <VisibilityIcon
                          onClick={togglePassword}
                          fontSize='small'
                        />
                      )}
                    </EyeIcon>
                  </PassewordWrapper>
                </LoginInputWrap>
                <VerificationMsg
                  id='pwdnote'
                  style={{
                    display: validPassword || !password ? 'none' : 'flex',
                    marginBottom: '20px',
                  }}
                >
                  <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
                  <span>
                    8 to 24 characters. Must include uppercase and lowercase
                    letters, a number and a special character. Allowed special
                    characters: ! @ # $ %
                  </span>
                </VerificationMsg>
              </LoginWrap>
              <LoginBtn type='submit'>
                <ColorButton buttonLabel='Log in' />
              </LoginBtn>
            </form>

            <LoginWrap>
              <GotoSignup>
                Don't have an account?
                <span
                  onClick={() => {
                    toggleLogModal(!modalLogShown);
                    toggleSignupModal(!modalSignupShown);
                    setUsername('');
                    setPassword('');
                  }}
                >
                  Go to Sign up
                </span>
              </GotoSignup>
            </LoginWrap>
          </ModalMainSection>
        </ModalLoginMain>
      </ModalContainer>
    </LogModal>
  );
};

export default LogInModal;
