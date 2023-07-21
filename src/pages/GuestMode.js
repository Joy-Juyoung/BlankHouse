import React, { useState, useEffect } from 'react';
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

const GuestMode = () => {
  const [isPageMain, setIsPageMain] = useState(false);

  console.log('isPageMain', isPageMain);

  return (
    <>
      {isPageMain ? <Header /> : <HeaderSmall />}
      <Routes>
        <Route
          path='/'
          element={<MainPage setIsPageMain={setIsPageMain} />}
          exact={true}
        />
      </Routes>
      <Routes>
        <Route path='/experiences' element={<Experience />} exact={true} />
      </Routes>
      <Routes>
        <Route path='/experiences/detail' element={<ExDetail />} exact={true} />
      </Routes>
      <Routes>
        <Route
          path='/room/:roomId'
          element={<Room setIsPageMain={setIsPageMain} />}
          exact={true}
        />
      </Routes>

      <Routes>
        <Route path='/test' element={<Test />} exact={true} />
      </Routes>
      {isPageMain ? <Footer /> : <FooterSmall />}
    </>
  );
};

export default GuestMode;
