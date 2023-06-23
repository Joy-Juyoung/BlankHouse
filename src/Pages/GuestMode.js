import React from 'react';
import MainPage from './Main/MainPage';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const UserMode = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} exact={true} />
      </Routes>
      {/* <Routes>
        <Route path='/experiences' element={<MainPage />} exact={true} />
      </Routes> */}
    </>
  );
};

export default UserMode;
