import React, { useEffect, useState } from 'react';
import { StepInWrap, StepInWrapper, StepTextArea } from '../StepStyle';

const Step2_Title = ({}) => {
  const initialStepTitle = JSON.parse(localStorage.getItem('getTitle')) || null;
  const [content, setContent] = useState(initialStepTitle);

  const setFormattedContent = React.useCallback(
    (text) => {
      setContent(text.slice(0, 32));
    },
    [setContent]
  );

  useEffect(() => {
    localStorage.setItem('getTitle', JSON.stringify(content));
  }, [content]);

  return (
    <StepInWrap>
      <h1>Now, let's give your house a title</h1>
      <p className='titleSub'>
        Short titles work best. Have fun with it—you can always change it later.
      </p>

      <StepInWrapper>
        <StepTextArea>
          <textarea
            onChange={(e) => setFormattedContent(e.target.value)}
            value={content || null}
          />
          <p>
            {content?.length || 0}/{32}
          </p>
        </StepTextArea>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step2_Title;
