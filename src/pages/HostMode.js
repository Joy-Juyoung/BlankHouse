import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BecomeHost from './Host/BecomeHost.js/BecomeHost';

const HostMode = () => {
  // const [isPageMain, setIsPageMain] = useState(false);
  // const [isUserLogIn, setIsUserLogIn] = useState(false);
  // const location = useLocation();
  // const userMe = useSelector(getMeUser);
  // // const rooms = useSelector(selectRoom);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserInfoAsync());
  //   // dispatch(getAllRoomsAsync());
  // }, [dispatch, isUserLogIn]);

  // // console.log('user', user);

  return (
    <>
      <Routes>
        {/* Need Header Change */}
        <Route path='/host/become' element={<BecomeHost />} exact={true} />
      </Routes>
    </>
  );
};

export default HostMode;
