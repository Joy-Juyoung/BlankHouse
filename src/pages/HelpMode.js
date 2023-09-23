import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HelpCenter from './Help/HelpCenter';

const HelpMode = ({ userMe, isUserLogIn, setIsUserLogIn, setIsPageMain }) => {
  return (
    <>
      <Routes>
        <Route
          path='/help'
          element={
            <HelpCenter
              userMe={userMe}
              isUserLogIn={isUserLogIn}
              setIsUserLogIn={setIsUserLogIn}
              setIsPageMain={setIsPageMain}
            />
          }
          exact={true}
        />
      </Routes>
    </>
  );
};

export default HelpMode;
