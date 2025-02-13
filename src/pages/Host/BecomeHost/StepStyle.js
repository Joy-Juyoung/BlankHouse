import styled, { css } from 'styled-components';

export const BecomeContainer = styled.div`
  max-width: 1450px;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
  min-height: 100vh;
`;

export const BecomeHeader = styled.div`
  height: 80px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  img {
    height: 50%;
    cursor: pointer;
  }
`;

export const ButtonsWrapper = styled.div`
  button {
    border: 1px solid #bbbb;
    border-radius: 10px;
    background: none;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
    font-weight: 600;

    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
    }

    &.exit {
      padding: 10px 15px;
    }
  }
`;

// ----footer

export const BecomeFooter = styled.div`
  position: fixed;
  bottom: 0;
  height: 80px;
  max-width: 1450px;
  width: 100%;
  background: #fff;
  /* margin: 0 auto; */
  /* margin: 0 40px; */
`;

export const BecomeFooterWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const BecomeProgress = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 5px;
  background: #dddd;
  margin-right: 10px;
  display: flex;
  align-items: center;

  &.last {
    margin-right: 0;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  transition: width 0.3s ease;
  width: 0;
  background: #000;
  &.active {
    width: 100%;
  }
`;

export const ProgressBarLabel = styled.div`
  margin-left: 5px;
  font-size: 12px;
  color: #000;
`;

export const BecomeBtns = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  padding: 0 40px;
  /* margin: 0 auto; */
`;

export const BackBtn = styled.div`
  button {
    font-weight: 600;
    font-size: 16px;
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const NextBtn = styled.div`
  button {
    font-weight: 600;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    padding: 10px 25px;
    background: #000;
    color: #fff;
    cursor: pointer;
  }
  /* margin: 0 40px; */
`;

// --------Step

export const WholePageContents = styled.div`
  margin: 0 auto;
  padding: 100px;

  &.Detail {
    /* width: 100%; */
    padding: 20px 100px;
    display: flex;
    /* align-items: center; */
  }
`;

export const StepMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  align-items: center;
  margin-top: 160px;
`;

export const StepMainWrapper = styled.div`
  span {
    font-weight: 600;
    font-size: 16px;
  }
  h1 {
    font-size: 45px;
  }
  p {
    font-size: 18px;
  }
`;

export const StepVideo = styled.div`
  width: 100%;
  /* height: 100%; */
`;

export const StepVideoContents = styled.video`
  width: 100%;
  height: auto;
  border-radius: 20px;

  &.step2 {
    /* height: 100%; */
    /* object-fit: cover; */
  }
`;

// --------Step Detail

export const StepDetailMain = styled.div`
  /* width: 100%; */
  margin: 0 auto;

  h1 {
    font-size: 36px;
  }
`;

export const StepDetailMainWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ------Each

export const StepInWrap = styled.div`
  margin-bottom: 120px;
  /* height: 100%;
  width: 100%; */

  h1 {
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    &.titleSub {
      margin: 5px 0;
      color: gray;
    }
  }
`;

export const StepCategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  margin: 40px 0;
`;

export const StepCategories = styled.div`
  border: 1px solid #dddd;
  border-radius: 10px;
  padding: 23px;
  cursor: pointer;
  /* transition: border-width 0.1s; */

  &:hover {
    border: 3px solid #000;
    background: #f7f7f7;
    padding: 20px;
  }

  &.active {
    border: 3px solid #000;
    background: #f7f7f7;
    padding: 20px;
  }
`;

export const StepCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  p {
    margin: 0;
    font-weight: 600;
  }
`;

// ----------

export const StepTypeWrapper = styled.div`
  margin: 40px 0;
`;

export const StepTypes = styled.div`
  border: 1px solid #dddd;
  border-radius: 10px;
  padding: 23px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    border: 3px solid #000;
    background: #f7f7f7;
    padding: 20px;
  }

  &.active {
    border: 3px solid #000;
    background: #f7f7f7;
    padding: 20px;
  }
`;

export const StepTypesAddress = styled.div`
  border-bottom: 1px solid #dddd;
  /* border-radius: 10px; */
  padding: 23px;
  cursor: pointer;
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;

  label {
    font-weight: 600;
  }

  input {
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #bbbb;
  }
`;

export const StepTypeList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StepTypeInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 70%;

  p {
    margin: 10px 0;
    font-weight: 600;
  }

  span {
    font-size: 14px;
    color: gray;
  }
`;

// -----
export const StepInWrapper = styled.div`
  margin: 40px 0;
  width: 100%;

  img {
    margin: 0 auto;
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
`;

export const StepNumList = styled.div`
  border-bottom: 1px solid #dddd;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StepNumTitle = styled.div`
  font-weight: 600;
`;

export const StemNumber = styled.div``;

// -----

export const PhotoBox = styled.div`
  width: 400px;
  height: 400px;
  /* margin: 0 !important; */
  /* object-fit: cover; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DragPhotoBox = styled.div`
  border: 2px dashed #dddd;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 80px 0;

  /* padding-bottom: 20px; */

  &.file {
    border: 2px dashed #dddd;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    padding: 0;
  }
`;

export const DragBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 24px;
    font-weight: 600;
    margin: 5px 0 10px;
  }

  span {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const PhotoUpload = styled.label`
  margin-top: 60px;
  cursor: pointer;

  span {
    font-weight: 600;
    text-decoration: underline;
  }

  input {
    display: none;
  }
`;

// ----
export const StepTextArea = styled.div`
  width: 100%;
  line-height: 1.625rem;
  margin: 20px 0;

  textarea {
    width: 100%;
    height: 120px;
    padding: 20px;
    font-size: 18px;
    border-radius: 10px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    margin-top: -5px;
    color: gray;
  }
`;

// -------

export const StepPrice = styled.div`
  font-size: 110px;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  input {
    border: none;
    outline: none;
    width: 100%;
    /* padding: 0; */
    font-size: 110px;
    font-weight: 600;
  }
`;

export const StepPriceTotalBox = styled.div`
  border: 1px solid #bbbb;
  border-radius: 10px;
  margin: 10px 0;
  padding: 5px 15px;

  p {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 14px;
    color: gray;

    &.total {
      /* font-size: 16px; */
      color: #000;
      font-weight: 600;
      border-top: 1px solid #bbbb;
      padding-top: 15px;
      margin-top: 15px;
    }
  }
`;

// ---------

export const StepPetBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #bbbb;
  /* background: #f7f7f7; */
  border-radius: 10px;
  margin: 20px 0;
  padding: 15px 5px;

  width: 100%;
`;

export const StepPetBoxWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const StepPetWrapper = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;

  p {
    &.text {
      /* display: flex;
      flex-direction: column; */

      font-weight: 600;
    }
  }

  input {
    width: 20px;
    height: 20px;

    border: 2px solid #000;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }

  label {
    /* font-weight: 600; */
  }
`;

// ------------

export const StepDiscountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #bbbb;
  background: #f7f7f7;
  border-radius: 10px;
  margin: 20px 0;
  padding: 15px 5px;
`;

export const StepDiscountBoxWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const StepDiscountWrapper = styled.div`
  /* &.details {
    border-left: 1px solid #bbbb;
    border-right: 1px solid #bbbb;
  } */
  margin: 0 15px;

  p {
    &.amount {
      font-weight: 600;
      font-size: 18px;
    }
    &.text {
      display: flex;
      flex-direction: column;
    }
    span {
      &.textSub {
        color: gray;
        font-size: 14px;
      }
    }
  }

  input {
    width: 20px;
    height: 20px;

    border: 2px solid #000;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;

// ------

export const StepCheck = styled.div`
  margin: 40px 0;
  width: 80%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  h2 {
    margin: 0;
  }
`;

export const StepCheckWrapper = styled.div``;

export const StepCheckPreview = styled.div`
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;

  img {
    width: 100%;
    /* height: ; */
    border-radius: 10px;
  }
`;

export const PreviewInfo = styled.div``;

export const PreviewTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  margin-top: 15px;

  span {
    display: flex;
    align-items: center;
  }
`;

export const PreviewPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
  p {
    /* display: flex;
    align-items: center; */
    margin: 0;
    font-weight: 600;
  }

  span {
    margin: 5px;
  }
`;

export const StepNextWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  margin: 20px 0;
  p {
    margin: 0;

    span {
      display: block;
      font-weight: 600;

      &.textSub {
        font-size: 14px;
        color: gray;
        font-weight: 300;
        margin-top: 5px;
      }
    }
  }

  svg {
    margin-right: 10px;
  }
`;
