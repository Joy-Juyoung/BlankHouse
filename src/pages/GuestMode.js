import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainHome/MainPage';
import Experience from './Experiences/Experience';
import ExDetail from './Experiences/ExDetail';
// import ExperienceDetail from './Experiences/ExperienceDetail';
import Room from './Room/Room';
import Footer from '../components/Footer/Footer';
import HeaderSmall from '../components/Header/HeaderSmall';
import FooterSmall from '../components/Footer/FooterSmall';
import Test from './Test';
import GuestLayout from './GuestLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  allUsers,
  userMe,
  loginUser,
  logoutUser,
  register,
} from '../redux/slices/users';
import meDataService from '../redux/services/UsersService';

const GuestMode = () => {
  const [isPageMain, setIsPageMain] = useState(false);
  const [meData, setMeData] = useState('');

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
      {isPageMain ? <Header /> : <HeaderSmall />}
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
        <Route path='/experiences/detail' element={<ExDetail />} exact={true} />
      </Routes>

      <Routes>
        <Route path='/test' element={<Test meData={meData} />} exact={true} />
      </Routes>
      {isPageMain ? <Footer /> : <FooterSmall />}
    </>
  );
};

export default GuestMode;
