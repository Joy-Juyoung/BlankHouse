import React, { useEffect, useState } from 'react';
import { StepInWrap, StepInWrapper, StepTextArea } from '../StepStyle';

const Step2_Description = () => {
  const [content, setContent] = useState();

  const setFormattedContent = React.useCallback(
    (text) => {
      setContent(text.slice(0, 500));
    },
    [setContent]
  );
  return (
    <StepInWrap>
      <h1>Create your description</h1>
      <p className='titleSub'>Share what makes your place special.</p>

      <StepInWrapper>
        <StepTextArea>
          <textarea
            // rows={rows}
            // cols={cols}
            onChange={(e) => setFormattedContent(e.target.value)}
            value={content || null}
          />
          <p>
            {content?.length || 0}/{500}
          </p>
        </StepTextArea>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step2_Description;
