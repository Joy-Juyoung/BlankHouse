import styled from 'styled-components';

export const ModalContainer = styled.div`
  max-width: 1030px;
  max-height: 780px;
  z-index: 6;

  &.filter {
    max-width: 750px;
  }

  &.small {
    max-width: 450px;
  }
`;

export const ModalWholeContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow-y: scroll;
`;

export const ModalWholeWrap = styled.div`
  max-width: 1120px;
  /* height: 100vh; */
  margin: 0 auto;
  padding-bottom: 80px;
`;

export const ModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 15px 25px;
  /* height: 60px; */

  &.notice {
    border: none;
    /* padding: 0 20px; */
  }
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  /* margin: 10px auto;
  text-align: center; */
  /* display: flex;
  align-items: center; */
`;

export const ModalCloseBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

export const ModalRightBtns = styled.div`
  display: flex;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;

    border: none;
    background: none;
    cursor: pointer;

    &:active {
      transform: translateY(4px);
    }

    span {
      margin-left: 5px;
    }

    &:hover {
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
    }
  }
`;

// This for Filter modal
export const ModalMain = styled.div`
  padding: 0 25px;
  overflow-y: scroll;
  max-height: 650px;

  &.filter {
    max-width: 750px;
  }

  &.small {
    max-width: 450px;
  }
`;

export const ModalMainSection = styled.div`
  /* width: 100%; */
  padding: 30px 0;
  /* border-bottom: 1px solid lightgray; */
  /* 
  &.noBot {
    border-bottom: none;
  } */

  &.s {
    padding: 10px 0;
  }
`;

export const ModalMainTitle = styled.h1`
  font-size: 24px;
  /* width: 100%; */
  margin: 0;
  padding: 0;
`;

export const ModalMainText = styled.p`
  margin: 0;
  padding: 0;
  color: gray;
`;

export const ModalFooter = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid lightgray;
  padding: 0 25px;
`;

// Guest Filter
// ----------Footer-----------------
export const FilterClearBtn = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
`;

export const FilterResultBtn = styled.button`
  border: none;
  border-radius: 5px;
  background: #333333;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 15px;

  &:hover {
    background: #000;
  }
`;

// ----------Price Range--------------

export const PriceRangeBarWrap = styled.div`
  margin: 20px;
  /* min-height: 80px; */
  /* background: lightgray; */
`;

export const PriceRangeGraph = styled.div`
  min-height: 70px;
`;

export const PriceRangeWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  justify-content: space-between;
`;

export const PriceBetween = styled.div`
  margin: 0 10px;
  color: gray;
`;

export const PriceRangeWrapper = styled.div`
  border: 2px solid lightgray;
  border-radius: 5px;
  width: 100%;
  cursor: text;
  padding: 5px 10px;
  position: relative;

  &:focus-within {
    border: 2px solid black;
  }
`;

export const PriceRangeLabel = styled.div`
  font-size: 11px;
  color: gray;
  position: absolute;
  /* top: 5px */
`;

export const PriceRangeInputSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 16px;
`;

export const PriceCurrency = styled.div`
  margin: 20px 5px 3px 0px;
  font-size: 16px;
`;

export const PriceInput = styled.input`
  border: none;
  width: 100%;
  /* border: 1px solid red; */
  margin: 20px 10px 3px 0px;
  font-size: 16px;

  &:focus {
    border: none;
    outline: none;
  }
`;

// ----------Type of Place--------------
export const PlaceTypeWrap = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

export const PlaceTypeWrapper = styled.div`
  display: flex;
  /* align-items: center; */
`;

export const PlaceInput = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 0;

  &:hover {
    border: 1px solid #000;
  }
`;

export const PlaceInputText = styled.span`
  display: block;
  margin-left: 10px;
  /* margin-bottom: 10px; */
  line-height: 80%;
  width: 80%;

  p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    margin-bottom: 8px;
  }

  span {
    font-size: 13px;
    color: gray;
  }
`;

// ----------room and bes---------
export const RoomBedWrap = styled.div``;

export const RoomBedWrapper = styled.div``;

export const RoomBedOptionList = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
`;

export const RoomBedOption = styled.div`
  margin-right: 15px;
  border: ${({ selected }) =>
    selected ? '1px solid #000' : '1px solid lightgray'};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  background: ${({ selected }) => (selected ? '#000' : '#fff')};
  border-radius: 20px;
  padding: 5px 20px;
  cursor: pointer;

  &:hover {
    border: 1px solid #000;
  }
`;

// ------Property type-----------
export const PropertyWrap = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;

export const PropertyWrpper = styled.div`
  /* border: 2px solid lightgray; */
  border-radius: 10px;
  padding: 15px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  border: ${({ clicked }) =>
    clicked ? '2px solid #000' : '2px solid lightgray'};
  background: ${({ clicked }) => (clicked ? '#f7f7f7' : '#fff')};

  p {
    margin: 0;
  }

  &:hover {
    border: 2px solid #000;
  }
`;

// ----------------show more
export const ModalMainContents = styled.div`
  padding: 40px 20px;
`;

export const ModalPhotos = styled.div`
  /* height: 100vh; */
  /* overflow-y: scroll; */
  padding: 40px 20px;
`;
