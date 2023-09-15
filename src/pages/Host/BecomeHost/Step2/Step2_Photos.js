import React, { useEffect, useState } from 'react';
import {
  DragBox,
  DragPhotoBox,
  PhotoBox,
  PhotoUpload,
  StepInWrap,
  StepInWrapper,
} from '../StepStyle';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const Step2_Photos = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <StepInWrap>
      <h1>Add some photos of your house</h1>
      <p>
        You'll need 5 photos to get started. You can add more or make changes
        later.
      </p>
      <StepInWrapper>
        {file && (
          <DragPhotoBox>
            <PhotoBox>
              {/* Should add multiple photo */}
              <img src={file} alt='' />
            </PhotoBox>
          </DragPhotoBox>
        )}
        <DragPhotoBox>
          <DragBox>
            <span>
              <PhotoLibraryIcon sx={{ fontSize: 48 }} />
            </span>
            <p>Drag your photos here</p>
            <span>Choose at least 5 photos</span>
            <PhotoUpload for='upload'>
              <span>Upload from your device</span>
              <input type='file' id='upload' onChange={handleChange} />
            </PhotoUpload>
          </DragBox>
        </DragPhotoBox>
      </StepInWrapper>
    </StepInWrap>
  );
};

export default Step2_Photos;
