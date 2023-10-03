import styled from 'styled-components';

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
  margin-top: 5px;
  font-size: 13px;

  span {
    &.coma {
      margin: 0 5px;
    }
    &.review {
      color: gray;
    }
  }
`;

export const RoomSideInputField = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin: 20px 0;
  /* width: 100%; */
  /* padding: 10px; */

  /* span {
    font-size: 11px;
    font-weight: 600;
  } */
`;

export const InputLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
`;

export const SideDateInput = styled.div`
  display: flex;

  /* justify-content: space-evenly; */
  /* position: relative; */
`;

export const DateValue = styled.p`
  margin: 0;
  cursor: pointer;
`;

export const DateInput = styled.div`
  padding: 10px 15px;
  z-index: 20;
  width: 100%;
  /* width: 710px; */
  position: relative;

  &.dropOpen {
    /* background: #f5f5f5; */
    border: 1px solid #dddd;
    border-radius: 10px;
  }

  &.checkin {
    border-right: 1px solid #c4c4c4;
  }
`;

export const SideGuestsInput = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  z-index: 5;
  position: relative;

  &.active {
    border: 2px solid #000;
    border-radius: 10px;
  }
`;

// ---drop start

export const DropBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  cursor: auto;

  overflow: hidden;
`;

export const GuestsDropdown = styled.div`
  background: #fff;
  padding: 10px;
  /* width: 100%; */
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 5;
  cursor: auto;

  border-radius: 5px;
  border: 1px solid #dddd;
  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.2);

  ul {
    list-style: none;
    padding: 0 10px;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
  span {
    font-weight: 400;
    font-size: 14px;

    &.range {
      color: gray;
      font-size: 13px;
    }
  }
`;

export const GuestsCount = styled.div`
  display: flex;
  align-items: center;

  button {
    border: 1px solid gray;
    border-radius: 50%;
    /* margin: 0 10px; */
    width: 32px;
    height: 32px;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;

    svg {
      color: gray;
    }
  }
  span {
    width: 35px;
    text-align: center;
    /* color: gray; */
  }
`;

export const GuestsNotice = styled.div`
  padding: 20px 10px 0;
  margin-top: 15px;
  border-top: 1px solid #bbb;

  p {
    margin: 0;
    font-weight: 400;
    font-size: 11px;
    line-height: normal;
  }
`;

export const GuestsCloseBtn = styled.div`
  text-decoration: underline;
  text-align: right;
  margin: 20px 10px;

  span {
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
  }
`;

// ---drop done

export const GuestsInput = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column; */
  /* justify-content: space-between; */
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
  /* text-align: center; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// -----dropdown
// export const GuestsDropdown = styled.div`
//   background: #fff;
//   padding: 10px;
//   /* width: 100%; */
//   position: absolute;
//   z-index: 5;
//   top: 69px;
//   left: 0;
//   right: 0;

//   border-radius: 10px;
//   border: 1px solid #dddd;
//   box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.1);
// `;
