import styled from 'styled-components';


export const ShowAllWrap = styled.div`
  display: inherit;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ShowAllBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    text-align: inherit;
    font-size: 16px;
    text-decoration: underline;
    font-weight:bolder;
`;

export const ModalContainer = styled.div`
  max-width: 750px;
  /* max-height: 650px; */
  /* margin: 40px; */
  max-height: 780px;
`;

export const ModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 0 25px;
  height: 60px;
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const ModalCloseBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

export const ModalMain = styled.div`
  padding: 0 25px;
  overflow-y: scroll;
  max-height: 650px;
`;

export const ModalMainSection = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid lightgray;
`;
export const ModalMainSectionTwo = styled.div`
  padding: 30px 0;
`;

export const ModalMainTitle = styled.h1`
  font-size: 24px;
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
  font-weight: bold;
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
  margin: 25px;
  min-height: 50px;
  align-items: center;
  /* background: lightgray; */
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
  border: 1px solid lightgray;
  border-radius: 10px;
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
  /* display: block; */
  margin-left: 10px;
  /* margin-bottom: 10px; */
  line-height: 80%;
  width: 80%;
  display: flex;
  align-items: center;

  p {
    /* display: flex;
    align-items: center; */
    /* justify-content:center; */
    margin: 0;
    /* padding: 0; */
    font-size: 16px;
    /* margin-bottom: 8px; */
  }

  span {
    font-size: 13px;
    color: gray;
  }
`;

export const PlaceNameText = styled.span`
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
