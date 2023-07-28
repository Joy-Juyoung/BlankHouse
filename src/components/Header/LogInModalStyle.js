import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 24px;
`;

export const ModalMainWrapper = styled.div``;

export const MainHeaderWrap = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;

  h3 {
    margin-top: 0;
    font-size: 22px;
    line-height: 26px;
    color: rgb(34, 34, 34);
    font-weight: 600;
    margin-bottom: 8px;
  }
`;

export const MainFormWrap = styled.form``;

//---------------------------

export const ModalLoginMain = styled.div`
  padding: 0 25px;
  /* overflow-y: scroll; */
  max-height: 650px;
  align-items: center;
`;

export const PassewordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EyeIcon = styled.div`
  color: #a3a9b3;
  margin-right: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    display: flex;
    align-items: center;
  }
`;

export const LoginWrap = styled.div`
  /* max-width: calc(100vw - 20%); */
  width: 550px;
  margin: 20px auto;
`;

export const LoginInputWrap = styled.div`
  /* width: 100%; */
  border: 1px solid #bbbbbb;
  padding: 10px;
  border-bottom: none;

  &.first {
    border-radius: 10px 10px 0 0;
  }
  &.last {
    border-bottom: 1px solid #bbbbbb;
    border-radius: 0 0 10px 10px;
  }

  p {
    margin: 0;
    font-size: 13px;
  }

  input {
    width: 100%;
    padding: 5px 0;
    /* margin: 0 !important; */
    outline: none;
    border: none;
    font-size: 16px;
  }
`;

export const LoginBtnWrap = styled.div`
  /* max-width: calc(100vw - 20%); */
  width: 550px;
  margin: 30px auto;
`;

export const DivideLine = styled.div`
  display: flex !important;
  align-items: center !important;
  margin: 16px 0px !important;
  color: #bbbbbb;

  &::before {
    content: '' !important;
    display: block !important;
    width: 100% !important;
    height: 1px !important;
    background-color: rgb(221, 221, 221) !important;
    margin-right: 16px !important;
  }

  &::after {
    content: '' !important;
    display: block !important;
    width: 100% !important;
    height: 1px !important;
    background-color: rgb(221, 221, 221) !important;
    margin-left: 16px !important;
  }
`;

export const LoginWithBtn = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid gray;
  border-radius: 10px;
  background: #fff;
  margin-top: 15px;

  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 10px;
    height: 20px;
    object-fit: contain;
  }
  span {
    width: 100%;
    justify-content: center;
    margin-left: -35px;
    font-size: 14px;
  }
`;

export const GotoSignup = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 35px;
  span {
    margin-left: 5px;
    /* font-weight: 600; */
    color: #e29700;
    text-decoration: underline;
    cursor: pointer;
  }
`;
