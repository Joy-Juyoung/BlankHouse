import React from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainHome/MainPage';
import Experience from './Experiences/Experience';
<<<<<<< HEAD
import ExDetail from './Experiences/ExDetail';
=======
import ExperienceDetail from './Experiences/ExperienceDetail';
import Room from './Room/Room';
import Footer from '../components/Footer/Footer';
>>>>>>> e00b28d17bf3458245bf1d793e07d2522709fa06

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
<<<<<<< HEAD
        <Route path='/experiences/detail' element={<ExDetail />} exact={true} />
      </Routes>
=======
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
>>>>>>> e00b28d17bf3458245bf1d793e07d2522709fa06
    </>
  );
};

export default GuestMode;
