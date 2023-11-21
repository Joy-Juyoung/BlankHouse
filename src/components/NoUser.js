import React from 'react';
import styled from 'styled-components';

const NoUserContainer = styled.div`
  margin: 0 auto;
  /* padding: 10px 20px; */
`;

const NoUserContents = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const NoUserTitle = styled.h2`
  /* margin: 20px 0; */
  /* text-align: center; */
`;

const NoUserText = styled.p`
  /* margin: 5px 0; */
  font-size: 14px;
  line-height: 24px;
`;

const NoUserBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  button {
    cursor: pointer;
    width: 100px;
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 10px;
  }
`;

const NoUser = ({
  toggleNoUser,
  modalNoUser,
  modalLogShown,
  toggleLogModal,
}) => {
  return (
    <NoUserContainer>
      <NoUserContents>
        <NoUserTitle>Login Required</NoUserTitle>
        <NoUserText>
          {/* save favorite item */}
          In order to {modalNoUser && 'post your home'}, you need to login.
          <br />
          Whould you like to login now or later?
        </NoUserText>
      </NoUserContents>
      <NoUserBtn>
        <button
          style={{ background: '#ddd' }}
          onClick={() => {
            toggleNoUser(false);
          }}
        >
          Later
        </button>
        {/* <Link to='/login' style={{ textDecoration: 'none' }}> */}
        <button
          style={{ background: '#000', color: '#fff' }}
          onClick={() => {
            toggleNoUser(false);
            // toggleLogModal(true);
          }}
        >
          LOGIN NOW
        </button>
        {/* </Link> */}
      </NoUserBtn>
    </NoUserContainer>
  );
};

export default NoUser;
