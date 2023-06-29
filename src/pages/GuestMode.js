import React from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainHome/MainPage';
import Experience from './Experiences/Experience';
import ExDetail from './Experiences/ExDetail';

const GuestMode = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} exact={true} />
      </Routes>
      <Routes>
        <Route path='/experiences' element={<Experience />} exact={true} />
      </Routes>
      <Routes>
        <Route path='/experiences/detail' element={<ExDetail />} exact={true} />
      </Routes>
    </>
  );
};

export default GuestMode;
