import React, { useState } from 'react';
import {
  DragBox,
  DragPhotoBox,
  PhotoBox,
  PhotoUpload,
  StepInWrap,
  StepInWrapper,
} from '../BecomeHost/StepStyle';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  listingRoomAsync,
  uploadPhotosAsync,
} from '../../../redux/slices/hostSlice';
import { ToastContainer, toast } from 'react-toastify';

const UploadBtn = styled.span`
  display: flex;
  justify-content: flex-end;

  button {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #bbbb;
    background: none;
    cursor: pointer;

    &:hover {
      background: #000;
      color: #fff;
    }
  }
`;

const UploadContinue = ({ clickedId }) => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   console.log(URL.createObjectURL(e.target.files[0]));
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // };

  // const handleChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile) {
  //     const objectURL = URL.createObjectURL(selectedFile);
  //     console.log(objectURL);
  //     setFile(objectURL);
  //   }
  // };
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    // if (selectedFile) {
    //   const objectURL = URL.createObjectURL(selectedFile);
    //   console.log(objectURL);

    //   // // Extract the URL without the "blob:" prefix
    //   // const urlWithoutBlob = objectURL.replace(/^blob:/, '');

    //   // console.log(urlWithoutBlob); // This will log the URL without "blob:"

    //   // setFile(urlWithoutBlob);

    //   setFile(objectURL);
    // }
    setFile(e.target.files[0]);
  };

  const handleListing = (e) => {
    e.preventDefault();
    dispatch(
      uploadPhotosAsync({
        // picture: URL.createObjectURL(file),
        picture: file,
        room_pk: clickedId,
      })
    );
    // .then(() => {})
    // .catch((error) => {
    //   console.error(error);
    //   toast.error('Upload photos failed.');
    // });
  };

  return (
    <StepInWrap style={{ padding: '0 20px', marginBottom: '10px' }}>
      <h2>Add some photos of your house</h2>

      <StepInWrapper>
        {file ? (
          <DragPhotoBox className='file'>
            <PhotoBox>
              {/* Should add multiple photo */}
              <img src={file} alt='' />
            </PhotoBox>
          </DragPhotoBox>
        ) : (
          <DragPhotoBox>
            <DragBox>
              <span>
                <PhotoLibraryIcon sx={{ fontSize: 48 }} />
              </span>
              <p>Drag your photos here</p>
              {/* <span>Choose at least 5 photos</span> */}
              <PhotoUpload for='upload'>
                <span>Upload from your device</span>
                <input type='file' id='upload' onChange={handleChange} />
              </PhotoUpload>
            </DragBox>
          </DragPhotoBox>
        )}
      </StepInWrapper>
      <UploadBtn>
        <button onClick={handleListing}>Upload photos</button>
      </UploadBtn>
    </StepInWrap>
  );
};

export default UploadContinue;
