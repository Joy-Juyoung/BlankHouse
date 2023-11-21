import React, { useEffect, useState } from 'react';
import { StepInWrap, StepInWrapper, StepTextArea } from '../StepStyle';

const Step2_Description = () => {
  const initialStepDesctiprion =
    JSON.parse(localStorage.getItem('getDesctiprion')) || null;
  const [contentDesc, setContentDesc] = useState(initialStepDesctiprion);

  const setFormattedContentDesc = React.useCallback(
    (text) => {
      setContentDesc(text.slice(0, 500));
    },
    [setContentDesc]
  );

  useEffect(() => {
    localStorage.setItem('getDesctiprion', JSON.stringify(contentDesc));
  }, [contentDesc]);

  return (
    <StepInWrap>
      <h1>Create your description</h1>
      <p className='titleSub'>Share what makes your place special.</p>

      <StepInWrapper>
        <StepTextArea>
          <textarea
            onChange={(e) => setFormattedContentDesc(e.target.value)}
            value={contentDesc || null}
          />
          <p>
            {contentDesc?.length || 0}/{500}
          </p>
        </StepTextArea>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step2_Description;
