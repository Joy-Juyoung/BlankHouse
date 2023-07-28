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
  LoginInputWrap,
  LoginWithBtn,
  LoginWrap,
  ModalLoginMain,
} from './LogInModalStyle';
import ColorButton from '../Buttons/ColorButton';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/slices/users';

const SignupModal = ({
  modalSignupShown,
  toggleSignupModal,
  modalLogShown,
  toggleLogModal,
  setIsUserDrop,
}) => {
  const [username, setUsernmae] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [comfirmPassword, setComfirmPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
    toggleSignupModal(false);
    toggleLogModal(true);
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
      <form onSubmit={handleSignupSubmit}>
        <ModalContainer>
          <ModalLoginMain>
            <ModalMainSection>
              <ModalTitle>Create account</ModalTitle>
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
                <LoginInputWrap>
                  <p>Email</p>
                  <input
                    type='email'
                    placeholder='Enter username'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name='email'
                    required
                  />
                </LoginInputWrap>
                <LoginInputWrap className='last'>
                  <p>Password</p>
                  <input
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password'
                    required
                  />
                </LoginInputWrap>
              </LoginWrap>
              <LoginWrap type='submit'>
                <ColorButton buttonLabel='Sign up' />
              </LoginWrap>
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
      </form>
    </LogModal>
  );
};
export default SignupModal;
