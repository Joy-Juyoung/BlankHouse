import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import MainPage from './MainHome/MainPage';
import Experience from './Experiences/Experience';
import ExDetail from './Experiences/ExDetail';
import Room from './Room/Room';
import Footer from '../components/Footer/Footer';
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
import Payment from './Payment/Payment';
import Trips from './Trips/Trips';
// import BecomeHost from './Host/BecomeHost.js/BecomeHost';
import TripsDetails from './Trips/TripsDetails';
import HostMode from './HostMode';
import HelpMode from './HelpMode';
import Balances from './Account/Balances';

const GuestMode = () => {
  const [isPageMain, setIsPageMain] = useState(false);
  const [isUserLogIn, setIsUserLogIn] = useState(false);

  // const [searchedValue, setSearchedValue] = useState('');

  const userMe = useSelector(getMeUser);
  const dispatch = useDispatch();
  const [isHost, setIsHost] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the pathname starts with '/host/'
    setIsHost(location.pathname.startsWith('/host'));
    setIsHelp(location.pathname.startsWith('/help'));
  }, [location.pathname]);

  useEffect(() => {
    dispatch(getUserInfoAsync());
    // dispatch(getAllRoomsAsync());
  }, [dispatch, isUserLogIn]);

  // console.log('user', user);

  return (
    <>
      {isHost ? (
        <HostMode
          setIsHost={setIsHost}
          userMe={userMe}
          isUserLogIn={isUserLogIn}
          setIsUserLogIn={setIsUserLogIn}
        />
      ) : (
        <>
          {isHelp ? (
            <>
              <HelpMode
                setIsHelp={setIsHelp}
                userMe={userMe}
                isUserLogIn={isUserLogIn}
                setIsUserLogIn={setIsUserLogIn}
                setIsPageMain={setIsPageMain}
              />
              <GotoTopButton />
              <Footer isPageMain={isPageMain} />
            </>
          ) : (
            <>
              <Header
                isPageMain={isPageMain}
                userMe={userMe}
                isUserLogIn={isUserLogIn}
                setIsUserLogIn={setIsUserLogIn}
                // searchedValue={searchedValue}
              />
              <Routes>
                <Route
                  path='/'
                  element={
                    <MainPage
                      setIsPageMain={setIsPageMain}
                      userMe={userMe}
                      // searchedValue={searchedValue}
                    />
                  }
                  exact={true}
                />
                <Route
                  path='/room/:roomId'
                  element={<Room setIsPageMain={setIsPageMain} />}
                  exact={true}
                />

                <Route
                  // path='/room/:roomId/payment?reviews=:reviews&checkin=:checkinDate&checkout=:checkoutDate&guest=:guestNum&night=:perNight&totalPerNigh=:totalPerNight&tax=:taxPerNight&finalTotal=:fianlTotalPrice'
                  path='/room/:roomId/payment'
                  element={
                    <Payment
                      setIsPageMain={setIsPageMain}
                      location={location}
                      userMe={userMe}
                    />
                  }
                  exact={true}
                />

                <Route
                  path='/wishlist'
                  element={
                    <Wishlist setIsPageMain={setIsPageMain} userMe={userMe} />
                  }
                  exact={true}
                />

                <Route
                  path='/trips'
                  element={<Trips setIsPageMain={setIsPageMain} />}
                  exact={true}
                />

                <Route
                  path='/trips/:bookId'
                  element={<TripsDetails setIsPageMain={setIsPageMain} />}
                  exact={true}
                />

                <Route
                  path='/account'
                  element={
                    <Account setIsPageMain={setIsPageMain} userMe={userMe} />
                  }
                  exact={true}
                />

                <Route
                  path='/account/profile'
                  element={
                    <Profile setIsPageMain={setIsPageMain} userMe={userMe} />
                  }
                  exact={true}
                />

                <Route
                  path='/account/balances'
                  element={
                    <Balances setIsPageMain={setIsPageMain} userMe={userMe} />
                  }
                  exact={true}
                />

                {/* <Route
                  path='/experiences'
                  element={<Experience />}
                  exact={true}
                />
                <Route
                  path='/experiences/:experiencesId'
                  element={<ExDetail />}
                  exact={true}
                />
                <Route
                  path='/onlineExperiences'
                  element={<OnlineExp />}
                  exact={true}
                /> */}
              </Routes>

              {/* <Routes>
    <Route path='/test' element={<Test meData={meData} />} exact={true} />
  </Routes> */}
              <GotoTopButton />
              <Footer isPageMain={isPageMain} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default GuestMode;
