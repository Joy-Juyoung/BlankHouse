import React, { useCallback, useEffect, useRef, useState } from 'react';

import LogModal from '../Modals/ModalLayout';
import {
  ModalContainer,
  ModalMainSection,
  ModalTitle,
} from '../Modals/ModalStyle';
import {
  ErrorMsg,
  EyeIcon,
  GotoSignup,
  LoginBtn,
  LoginInputWrap,
  LoginTitle,
  LoginWrap,
  ModalLoginMain,
  PassewordWrapper,
  VerificationMsg,
} from './LogInModalStyle';
import ColorButton from '../Buttons/ColorButton';
import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../../redux/slices/users';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signupAsync, signupUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignupModal = ({
  modalSignupShown,
  toggleSignupModal,
  modalLogShown,
  toggleLogModal,
  setIsUserDrop,
  user,
  isUserLogIn,
  setIsUserLogIn,
}) => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [matchPwdType, setMatchPwdType] = useState('password');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  const userSignup = useSelector(signupUser);
  const dispatch = useDispatch();

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const toggleMatchPwd = () => {
    if (matchPwdType === 'password') {
      setMatchPwdType('text');
      return;
    }
    setMatchPwdType('password');
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
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [username, password, matchPwd]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const v1 = USERNAME_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }

    dispatch(signupAsync({ username, password }))
      .then(() => {
        toast.success('Signup in successfully!');
        toggleSignupModal(false);
        toggleLogModal(true);
      })
      .catch((error) => {
        console.error(error);
        toast.error('Signup failed. Please try again.');
      });
  };

  return (
    <LogModal
      shown={modalSignupShown}
      close={() => {
        toggleSignupModal(false);
        setIsUserDrop(false);
      }}
      title='Sign up'
    >
      <ModalContainer>
        <ModalLoginMain>
          <ModalMainSection>
            <LoginTitle>Create account</LoginTitle>
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
                    placeholder='Enter username'
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
                <LoginInputWrap>
                  <p>Confirm Password</p>
                  <PassewordWrapper>
                    <input
                      placeholder='Re-enter password'
                      type={matchPwdType}
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      name='matchPassword'
                      required
                      aria-invalid={validPassword ? 'false' : 'flex'}
                      aria-describedby='pwdnote'
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                    />
                    <EyeIcon>
                      {matchPwdType === 'password' ? (
                        <VisibilityOffIcon
                          onClick={toggleMatchPwd}
                          fontSize='small'
                        />
                      ) : (
                        <VisibilityIcon
                          onClick={toggleMatchPwd}
                          fontSize='small'
                        />
                      )}
                    </EyeIcon>
                  </PassewordWrapper>
                </LoginInputWrap>
                <VerificationMsg
                  id='confirmnote'
                  style={{
                    display: validMatch || !matchPwd ? 'none' : 'flex',
                    marginBottom: '20px',
                  }}
                >
                  <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
                  <span>Must match the first password input field.</span>
                </VerificationMsg>
              </LoginWrap>
              <LoginBtn type='submit'>
                <ColorButton
                  buttonLabel='Sign up'
                  disabled={
                    !validUsername || !validPassword || !validMatch
                      ? true
                      : false
                  }
                />
              </LoginBtn>
            </form>
            <LoginWrap>
              <GotoSignup>
                Already have an account?
                <span
                  onClick={() => {
                    toggleLogModal(!modalLogShown);
                    toggleSignupModal(!modalSignupShown);
                    setUsername('');
                    setPassword('');
                    setMatchPwd('');
                  }}
                >
                  Go to Log in
                </span>
              </GotoSignup>
            </LoginWrap>
          </ModalMainSection>
        </ModalLoginMain>
      </ModalContainer>
      {/* <ToastContainer /> */}
    </LogModal>
  );
};

export default SignupModal;
