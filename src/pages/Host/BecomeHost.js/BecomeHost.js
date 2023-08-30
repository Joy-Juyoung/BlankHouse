import React, { useEffect } from 'react';
import HostStep1 from './HostStep1';

const BecomeHost = ({ setIsPageMain }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsPageMain(false);
  }, []);

  return (
    <div>
      {/* Header Change */}

      {/* main contents step1 */}
      <HostStep1 />

      {/* Progressbar and back/next button */}
    </div>
  );
};

export default BecomeHost;
