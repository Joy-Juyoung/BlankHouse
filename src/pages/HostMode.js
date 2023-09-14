import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BecomeHost from './Host/BecomeHost/BecomeHost';
// import BecomeHost from './Host/BecomeHost/BecomeHost';
// import HostStep1Details from './Host/BecomeHost/HostStep1Dertails';

const HostMode = () => {
  // const [stepId, setStepId] = useState(0);

  return (
    <>
      <Routes>
        {/* Need Header Change */}
        <Route path='/host/become' element={<BecomeHost />} exact={true} />

        {/* {stepId === 5 && (
          <Route
            path='/host/become/step2'
            element={<BecomeHost stepId={stepId} setStepId={setStepId} />}
            exact={true}
          />
        )} */}
      </Routes>
    </>
  );
};

export default HostMode;
