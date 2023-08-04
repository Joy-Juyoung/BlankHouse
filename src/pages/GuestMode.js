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
import { getUserInfoAsync, selectUser } from '../redux/slices/userSlice';
import { selectRoom } from '../redux/slices/roomSlice';

const GuestMode = () => {
  const [isPageMain, setIsPageMain] = useState(false);
  const [isUserLogIn, setIsUserLogIn] = useState(false);

  const user = useSelector(selectUser);
  const rooms = useSelector(selectRoom);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoAsync());
  }, [dispatch, isUserLogIn]);

  // console.log('user', user);

  return (
    <>
      <Header
        isPageMain={isPageMain}
        user={user}
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
          element={<Room setIsPageMain={setIsPageMain} rooms={rooms} />}
          exact={true}
        />
        <Route path='/experiences' element={<Experience />} exact={true} />
        <Route path='/experiences/detail' element={<ExDetail />} exact={true} />
      </Routes>

      {/* <Routes>
        <Route path='/test' element={<Test meData={meData} />} exact={true} />
      </Routes> */}
      <GotoTopButton />
      <Footer isPageMain={isPageMain} />
    </>
  );
};

export default GuestMode;
