import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  allUsers,
  userMe,
  loginUser,
  logoutUser,
  register,
  updateUserInfo,
} from '../redux/slices/users';

const Test = ({ meData }) => {
  const [loginUsername, setLoginUsernmae] = useState('');
  const [email, setEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const [username, setUsernmae] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  // const [me, setMe] = useState();

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(userMe());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
    setIsUpdated(false);
  }, [initFetch, isLoggedIn, username]);

  console.log('users', users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
    setIsLoggedIn(true);
  };

  const handleLogout = (e) => {
    // e.preventDefault();
    dispatch(logoutUser({ username }));
    setIsLoggedIn(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ username, password }));
    // setIsUpdated(true)
  };

  const handleUpdate = (e) => {
    // e.preventDefault();
    dispatch(updateUserInfo({ email }));
    setIsUpdated(true);
  };

  console.log('meData', meData);

  return (
    <div>
      {(users?.ok === 'Welcome!' || meData) && users?.ok !== 'bye!' && (
        <>
          <div>
            Login Success! Current User = {meData?.username} / {meData?.email}
          </div>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
      {(users?.ok === 'bye!' || !meData || !users) && <div>No User.</div>}

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter username'
          onChange={(e) => setUsernmae(e.target.value)}
          value={username}
          name='username'
          required
        />
        <input
          type='password'
          placeholder='Enter password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name='password'
          required
        />
        <button>Login</button>
      </form>

      {/* <form onSubmit={handleSignupSubmit}>
        <input
          type='text'
          placeholder='Enter username'
          onChange={(e) => setUsernmae(e.target.value)}
          value={username}
          name='username'
          required
        />
        <input
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          required
        />
        <button>Signup</button>
      </form> */}

      <form onSubmit={handleUpdate}>
        <input
          type='text'
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name='email'
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default Test;
