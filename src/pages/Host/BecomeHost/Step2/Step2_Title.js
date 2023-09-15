import React, { useEffect, useState } from 'react';
import { StepInWrap, StepInWrapper, StepTextArea } from '../StepStyle';

const Step2_Title = ({}) => {
  const [content, setContent] = useState();

  const setFormattedContent = React.useCallback(
    (text) => {
      setContent(text.slice(0, 32));
    },
    [setContent]
  );

  // useEffect(()=> {

  // })
  return (
    <StepInWrap>
      <h1>Now, let's give your house a title</h1>
      <p className='titleSub'>
        Short titles work best. Have fun with it—you can always change it later.
      </p>

      <StepInWrapper>
        <StepTextArea>
          <textarea
            // rows={rows}
            // cols={cols}
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
