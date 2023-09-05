import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BecomeHost from './Host/BecomeHost.js/BecomeHost';

const HostMode = () => {
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
