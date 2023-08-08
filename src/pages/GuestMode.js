import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainHome/MainPage';
import Experience from './Experiences/Experience';
import ExDetail from './Experiences/ExDetail';
import Room from './Room/Room';
import Footer from '../components/Footer/Footer';
import Test from './Test';
import GotoTopButton from '../components/Buttons/GotoTopButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMeUser,
  getUserInfoAsync,
  selectUser,
} from '../redux/slices/userSlice';
import { getAllRoomsAsync } from '../redux/slices/roomSlice';
import Wishlist from './Wishlist/Wishlist';
import Account from './Account/Account';
import Profile from './Account/Profile';
import OnlineExp from './OnlineExperiences/OnlineExp';

const GuestMode = () => {
  const [isPageMain, setIsPageMain] = useState(false);
  const [isUserLogIn, setIsUserLogIn] = useState(false);

  const userMe = useSelector(getMeUser);
  // const rooms = useSelector(selectRoom);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoAsync());
    // dispatch(getAllRoomsAsync());
  }, [dispatch, isUserLogIn]);

  // console.log('user', user);

  return (
    <>
      <Header
        isPageMain={isPageMain}
        userMe={userMe}
        isUserLogIn={isUserLogIn}
        setIsUserLogIn={setIsUserLogIn}
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
        <Route
          path='/wishlist'
          element={<Wishlist setIsPageMain={setIsPageMain} />}
          exact={true}
        />
        <Route
          path='/account'
          element={<Account setIsPageMain={setIsPageMain} userMe={userMe} />}
          exact={true}
        />
        <Route
          path='/account/profile'
          element={<Profile setIsPageMain={setIsPageMain} userMe={userMe} />}
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
