import React, { useState } from 'react';

import LogModal from '../Modals/ModalLayout';
import {
  ModalContainer,
  ModalMain,
  ModalMainSection,
  ModalMainTitle,
  ModalTitle,
} from '../Modals/ModalStyle';
import {
  DivideLine,
  GotoSignup,
  LoginBtn,
  LoginInputWrap,
  LoginWithBtn,
  LoginWrap,
  ModalLoginMain,
} from './LogInModalStyle';
import ColorButton from '../Buttons/ColorButton';
import { useDispatch } from 'react-redux';
// import { register } from '../../redux/slices/users';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signupAsync } from '../../redux/slices/userSlice';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signupAsync({ username, password }))
      .then(() => {
        // toast.success('Signup in successfully!');
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
      title='sign up'
    >
      <ModalContainer>
        <ModalLoginMain>
          <ModalMainSection>
            <ModalTitle>Create account</ModalTitle>
            <form onSubmit={handleSubmit}>
              <LoginWrap>
                <LoginInputWrap className='first'>
                  <p>Username</p>
                  <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter username'
                    required
                  />
                </LoginInputWrap>
                {/* <LoginInputWrap>
                  <p>Email</p>
                  <input
                    type='email'
                    placeholder='Enter username'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name='email'
                    required
                  />
                </LoginInputWrap> */}
                <LoginInputWrap className='last'>
                  <p>Password</p>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter password'
                    required
                  />
                </LoginInputWrap>
              </LoginWrap>
              <LoginBtn type='submit'>
                <ColorButton buttonLabel='Sign up' />
              </LoginBtn>
            </form>
            <LoginWrap>
              <GotoSignup>
                Already have an account?
                <span
                  onClick={() => {
                    toggleLogModal(!modalLogShown);
                    toggleSignupModal(!modalSignupShown);
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
