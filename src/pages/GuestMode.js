import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainHome/MainPage';
import Experience from './Experiences/Experience';
import ExDetail from './Experiences/ExDetail';
import Room from './Room/Room';
import Footer from '../components/Footer/Footer';
import Test from './Test';
import meDataService from '../redux/services/UsersService';
import GotoTopButton from '../components/Buttons/GotoTopButton';
import OnlineExp from './OnlineExperiences/OnlineExp';

const GuestMode = () => {
  const [isPageMain, setIsPageMain] = useState(false);
  const [meData, setMeData] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getMe = () => {
    meDataService
      .getUser()
      .then((response) => {
        setMeData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getMe();
  }, []);

  // console.log('meData', meData);

  return (
    <>
      <Header
        isPageMain={isPageMain}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route
          path='/'
          element={<MainPage setIsPageMain={setIsPageMain} />}
          exact={true}
        />
        <Route
          path='/room/:roomId'
          element={<Room setIsPageMain={setIsPageMain} />}
          exact={true}
        />
        <Route path='/experiences' element={<Experience />} exact={true} />
        <Route path='/experiences/:experiencesId' element={<ExDetail />} exact={true} />
        <Route path='/onlineExperiences' element={<OnlineExp />} exact={true} />
      </Routes>

      {/* <Routes>
        <Route path='/test' element={<Test meData={meData} />} exact={true} />
      </Routes> */}
      <GotoTopButton />
      {/* <Footer isPageMain={isPageMain} /> */}
    </>
  );
};

export default GuestMode;
