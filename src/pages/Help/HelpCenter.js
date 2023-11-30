import React, { useEffect } from 'react';
import { HelpContainer, HelpHeader } from './HelpStyle';
import HelpCenterHeader from './HelpCenterHeader';

import HelpMain from './HelpMain';

const HelpCenter = ({
  userMe,
  isUserLogIn,
  setIsUserLogIn,
  setIsPageMain,
  modalLogShown,
  toggleLogModal,
}) => {
  useEffect(() => {
    setIsPageMain(false);
  }, []);

  return (
    <HelpContainer>
      <HelpHeader>
        <HelpCenterHeader
          userMe={userMe}
          isUserLogIn={isUserLogIn}
          setIsUserLogIn={setIsUserLogIn}
          modalLogShown={modalLogShown}
          toggleLogModal={toggleLogModal}
        />
      </HelpHeader>

      {/* main */}
      <HelpMain userMe={userMe} />
    </HelpContainer>
  );
};

export default HelpCenter;
