import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DateRange from '../DateRange';
import LogInModal from '../Header/LogInModal';
import SignupModal from '../Header/SignupModal';

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

const UserDropBox = ({ dropdownRef, setIsUserDrop, isUserDrop }) => {
  const [modalLogShown, toggleLogModal] = useState(false);
  const [modalSignupShown, toggleSignupModal] = useState(false);

  useEffect(() => {
    // if (modalLogShown) {
    //   setIsUserDrop(false);
    // }
    // Attach event listener when the component mounts
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      // Click occurred outside of the dropdown, so close it
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
          <ul>
            <li
              className='login'
              onClick={() => {
                toggleLogModal(!modalLogShown);
                toggleSignupModal(false);
                // setIsUserDrop(false);
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

          <SignupModal
            toggleSignupModal={toggleSignupModal}
            modalSignupShown={modalSignupShown}
          />

          <hr />
          <ul>
            <li>
              <span>Hosting</span>
            </li>
            <li>
              <span>Help</span>
            </li>
          </ul>
        </UserDropdownWrap>

        <LogInModal
          toggleLogModal={toggleLogModal}
          modalLogShown={modalLogShown}
          setIsUserDrop={setIsUserDrop}
        />

        {/* <SignupModal
          toggleSignupModal={toggleSignupModal}
          modalSignupShown={modalSignupShown}
        /> */}
      </UserDropdown>
    </>
  );
};

export default UserDropBox;
