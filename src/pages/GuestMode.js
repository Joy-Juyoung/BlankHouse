import React from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainHome/MainPage';
import Room from './Room/Room';

const GuestMode = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} exact={true} />
      </Routes>
      <Routes>
        <Route path='/room' element={<Room />} exact={true} />
      </Routes>
      {/* <Routes>
        <Route path='/experiences' element={<MainPage />} exact={true} />
      </Routes> */}
    </>
  );
};

export default GuestMode;
