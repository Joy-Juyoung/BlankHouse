import styled from 'styled-components';

export const PaymentTopWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

export const PaymentHeader = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    padding: 12px 8px 12px 16px;
    margin-right: 10px;

    &:hover {
      background: #f5f5f5;
      border-radius: 50%;
    }
  }
`;

export const PaymentMainWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 50px;
  padding: 0 60px;
  margin-bottom: 40px;
`;

export const PaymentInfo = styled.div`
  /* display: flex; */
`;

export const PaymentInfoWrapper = styled.div`
  border-bottom: 1px solid #dddd;
  padding: 30px 0;

  &.first {
    padding-top: 0;
  }

  &.last {
    border-bottom: none;
  }
`;

export const PaymentInfoTitle = styled.div`
  margin: 0;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 600;
`;

export const PaymentInfoDetail = styled.div`
  p {
    &.notice {
      font-size: 11px;
      margin-bottom: 20px;
      padding: 0 5px;
    }
  }

  button {
    border: none;
    background: none;
    width: 100%;
  }
`;

export const PayInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  &.infoLast {
    margin-bottom: 0;
  }
`;

export const InfoDetail = styled.div`
  p {
    margin: 5px 0;
    font-weight: 600;
  }
  span {
    font-weight: 300;
  }
`;

export const PayEditBtn = styled.div`
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #bbbbbb;
  border-radius: 10px;
  padding: 15px;

  svg {
    cursor: pointer;
  }
`;

// Side
export const PaymentSideWrapper = styled.div`
  position: relative;
`;

export const PaymentSideInfo = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  max-height: 370px;
  padding: 20px;

  position: sticky;
  top: 80px;
`;

export const PaymentSideDetail = styled.div`
  width: 100%;

  &.sideTop {
    display: flex;
    height: 130px;
    /* padding-bottom: 20px; */
  }

  &.sideMid {
    border-top: 1px solid #dddd;
    /* border-bottom: 1px solid #dddd; */
    margin: 20px 0 0;
    padding: 20px 0 0;
  }
`;

export const PaymentSideImg = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  img {
    width: 90%;
    height: 100%;
    object-fit: cover;
    margin-right: 15px;
    border-radius: 10px;
  }
`;

export const PaymentSideTop = styled.div`
  width: 100%;
  height: 100%;
  flex: 1.5;

  display: flex;
  flex-direction: column;

  span {
    font-size: 13px;
    color: gray;

    &.strong {
      font-weight: 600;
      color: #000;
    }
  }
`;

export const PayTopTitle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    margin: 3px 0;
    font-size: 16px;
  }
`;

export const PayTopRating = styled.div`
  /* height: 100%; */
  display: flex;
  align-items: flex-end;

  span {
    display: flex;
    align-items: center;
  }
`;

export const PaymentList = styled.div``;

export const PayList = styled.div``;
