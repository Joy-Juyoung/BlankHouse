import React from 'react';
import { WholePageContents } from './StepStyle';

const HostStep1 = () => {
  return (
    <WholePageContents>
      <span>Step 1</span>
      <h1>Tell us about your place</h1>
      <p>
        In this step, we'll ask you which type of property you have and if
        guests will book the entire place or just a room. Then let us know the
        location and how many guests can stay.
      </p>
    </WholePageContents>
  );
};

export default HostStep1;
