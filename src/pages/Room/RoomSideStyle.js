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
