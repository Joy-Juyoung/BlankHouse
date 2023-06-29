import React from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainHome/MainPage';
import Experience from './Experiences/Experience';
import ExperienceDetail from './Experiences/ExperienceDetail';
import Room from './Room/Room';
import Footer from '../components/Footer/Footer';

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
        <Route
          path='/experiences/detail'
          element={<ExperienceDetail />}
          exact={true}
        />
      </Routes>
      <Routes>
        <Route path='/room' element={<Room />} exact={true} />
      </Routes>
      <Footer />
    </>
  );
};

export default GuestMode;
