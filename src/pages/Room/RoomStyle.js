import styled from 'styled-components';

export const RoomDetailHeader = styled.div`
  width: 100vw;
  position: sticky;
  top: 0;
  /* left: 0; */
  z-index: 3;
  /* margin: 0 auto; */

  /* padding: 0 -40px; */

  background: #fff;
  border-bottom: 1px solid #dddd;
`;

export const DetailHeader = styled.div`
  padding: 0 80px;
  max-width: 1210px;
  margin: 0 auto;
  /* margin-left: -5px; */
  display: flex;
  align-items: center;
  height: 80px;

  span {
    /* text-decoration: none; */
    margin-right: 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    /* transition: 0.2s ease-in-out; */
    color: gray;

    &:hover {
      border-bottom: 4px solid #000;
      margin-top: 30px;
      padding-bottom: 26px;
      color: #000;
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const RoomTopWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

export const RoomTopHeader = styled.h1`
  margin: 0;
`;

export const RoomTopText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RoomTopInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    a {
      color: #000;
      margin-left: 5px;
      margin-right: 10px;
    }
    &.space {
      margin-left: 5px;
    }
  }

  button {
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;

    border: none;
    background: none;
    cursor: pointer;

    span {
      margin-left: 5px;
    }

    &:hover {
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const RoomMainWrap = styled.div``;

export const RoomMainPhotos = styled.div`
  padding-top: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const RoomPhotoMain = styled.div`
  height: 560px;
`;

export const RoomPhotoSub = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const RoomDetailSection = styled.div`
  margin: 48px 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const RoomMainDetails = styled.div`
  /* margin: 48px 0; */
  display: flex;
  /* justify-content: space-between; */
  h2 {
    margin: 0;
  }
`;

export const RoomMainDetailsWrap = styled.div`
  flex: 1.8;
  padding-right: 90px;
`;

export const RoomDetailsTop = styled.div``;

export const RoomDetailsSections = styled.div`
  padding: 20px 0;
  border-top: 1px solid #dddd;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  i {
  }
`;

// ----side

export const RoomDetailSide = styled.div`
  flex: 1;
  position: relative;
  /* width: 100%; */
`;

export const RoomDetailSideWrap = styled.div`
  /* width: 320px; */
  position: sticky;
  top: 128px;
  width: 100%;
  /* width: 100%; */
  /* padding-left: 70px; */
`;

export const RoomSideReserve = styled.div`
  width: 100%;
  /* height: 555px; */
  /* background: #fff; */
  border-radius: 10px;
  border: 1px solid #dddd;
  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.1);

  /* padding: 20px; */
`;

export const RoomSideInside = styled.div`
  /* width: 100%; */
  /* height: 555px; */
  padding: 20px;
`;

export const RoomSideTop = styled.div``;

export const SideTopPrice = styled.div`
  display: flex;
  align-items: center;
  /* padding: 20px; */

  h2 {
    margin: 0;
  }

  span {
    margin-left: 5px;
  }
`;

export const SideTopInfo = styled.div`
  display: flex;
  align-items: center;

  &.space {
    margin: 0 5px;
  }
`;

export const RoomSideInputField = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin: 20px 0;
  /* width: 100%; */
  /* padding: 10px; */

  span {
    font-size: 11px;
    font-weight: 600;
  }
`;

export const SideDateInput = styled.div`
  display: flex;
`;

export const DateInput = styled.div`
  padding: 10px;

  &.checkin {
    border-right: 1px solid #c4c4c4;
  }
`;

export const SideSelectInput = styled.div`
  padding: 10px;
  border-top: 1px solid #c4c4c4;
  /* width: 100%; */

  /* display: flex; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectInput = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column; */
  /* justify-content: space-between; */
`;

export const RoomSideBtn = styled.div`
  /* margin-top: 20px; */
  button {
    border: none;
    border-radius: 10px;
    background: #ffae00;
    color: #fff;
    width: 100%;
    height: 48px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const RoomSideText = styled.div`
  margin: 20px 0;
  text-align: center;
  /* font-weight: lighter; */
`;

export const RoomSideOutput = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const SideOutput = styled.div`
  &.outputName {
    text-decoration: underline;
  }
`;

export const RoomSideTotal = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dddd;
  padding-top: 15px;
`;

export const SideTotal = styled.div``;

export const RoomSideReport = styled.div`
  padding: 25px 0;
  /* margin: 0 auto; */
  text-align: center;
  width: 100%;
`;
