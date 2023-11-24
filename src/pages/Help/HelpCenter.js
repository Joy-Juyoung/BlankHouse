import React, { useEffect } from 'react';
import { HelpContainer, HelpHeader } from './HelpStyle';
import HelpCenterHeader from './HelpCenterHeader';

import HelpMain from './HelpMain';

const HelpCenter = ({ userMe, isUserLogIn, setIsUserLogIn, setIsPageMain }) => {
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
        />
      </HelpHeader>

      {/* main */}
      <HelpMain userMe={userMe} />
    </HelpContainer>
  );
};

export default HelpCenter;
