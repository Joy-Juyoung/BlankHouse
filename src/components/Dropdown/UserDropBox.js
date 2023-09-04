import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// import { logoutUser, userMe } from '../../redux/slices/users';
import DateRange from '../DateRange';
import LogInModal from '../Header/LogInModal';
import SignupModal from '../Header/SignupModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout, logoutAsync, logoutUser } from '../../redux/slices/userSlice';
import { Link, useLocation } from 'react-router-dom';

const UserDropdown = styled.div`
  background: #fff;
  padding: 10px 0;
  width: 250px;
  position: absolute;
  top: 70px;
  /* left: 50px; */
  /* right: 45px; */
  z-index: 5;
  cursor: auto;

  border-radius: 10px;
  border: 1px solid #dddd;
  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.2);
`;

const UserDropdownWrap = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  font-size: 14px;

  hr {
    border: 1px solid #dddddd;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    width: 100%;
    padding: 10px 0;

    cursor: pointer;

    &.login {
      font-weight: 600;
    }

    span {
      padding: 0 20px;
      margin: 5px 0;
    }

    &:hover {
      background: #f5f5f5;
    }
  }
`;

const UserDropBox = ({
  dropdownRef,
  setIsUserDrop,
  isUserDrop,
  userMe,
  isUserLogIn,
  setIsUserLogIn,
}) => {
  const location = useLocation();
  let currentPath = location.pathname;
  const [modalLogShown, toggleLogModal] = useState(false);
  const [modalSignupShown, toggleSignupModal] = useState(false);

  const userLogout = useSelector(logoutUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAsync(userMe?.username))
      .then(() => {
        // toast.success('Logged out successfully!');
        toggleLogModal(false);
        setIsUserDrop(false);
        setIsUserLogIn(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error('Logout failed. Please try again.');
      });
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // useEffect(() => {
  //   setIsUserDrop(!isUserDrop);
  // }, [location]);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsUserDrop(!isUserDrop);
    }
  };

  return (
    <>
      <UserDropdown
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <UserDropdownWrap>
          {/* {(isUserLogIn || JSON.parse(localStorage.getItem('user'))) && ( */}
          {isUserLogIn || JSON.parse(localStorage.getItem('user')) ? (
            <>
              <ul>
                <li className='login'>
                  <span>Messages</span>
                </li>
                <Link to='/trips' onClick={() => setIsUserDrop(false)}>
                  <li className='login'>
                    <span>Trips</span>
                  </li>{' '}
                </Link>
                <Link to='/wishlist' onClick={() => setIsUserDrop(false)}>
                  <li className='login'>
                    <span>Wishlists</span>
                  </li>
                </Link>
              </ul>
              <hr />
              <ul>
                <li>
                  <span>Manage listings</span>
                </li>
                <Link to='/account' onClick={() => setIsUserDrop(false)}>
                  <li>
                    <span>Account</span>{' '}
                  </li>
                </Link>
              </ul>
              <hr />
              <ul>
                <li>
                  <span>Help</span>
                </li>
                <li onClick={handleLogout}>
                  <span>Log out</span>
                </li>
              </ul>
            </>
          ) : (
            // )}
            // {!isUserLogIn &&
            //   JSON.parse(localStorage.getItem('user')) === null && (
            <>
              <ul>
                <li
                  className='login'
                  onClick={() => {
                    toggleLogModal(!modalLogShown);
                    toggleSignupModal(false);
                  }}
                >
                  <span>Log in</span>
                </li>
                <li
                  onClick={() => {
                    toggleSignupModal(!modalSignupShown);
                    toggleLogModal(false);
                  }}
                >
                  <span>Sign up</span>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <span>Hosting</span>
                </li>
                <li>
                  <span>Help</span>
                </li>
              </ul>
            </>
          )}
        </UserDropdownWrap>

        <LogInModal
          toggleLogModal={toggleLogModal}
          modalLogShown={modalLogShown}
          toggleSignupModal={toggleSignupModal}
          modalSignupShown={modalSignupShown}
          setIsUserDrop={setIsUserDrop}
          userMe={userMe}
          isUserLogIn={isUserLogIn}
          setIsUserLogIn={setIsUserLogIn}
        />

        <SignupModal
          toggleSignupModal={toggleSignupModal}
          modalSignupShown={modalSignupShown}
          toggleLogModal={toggleLogModal}
          modalLogShown={modalLogShown}
          setIsUserDrop={setIsUserDrop}
          userMe={userMe}
          isUserLogIn={isUserLogIn}
          setIsUserLogIn={setIsUserLogIn}
        />
      </UserDropdown>
    </>
  );
};

export default UserDropBox;
