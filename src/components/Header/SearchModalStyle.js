import styled from 'styled-components';

export const SearchModalContainer = styled.div`
  padding: 0 40px;
  max-width: 850px;
  margin: 0 auto;
`;

export const SearchModalNav = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchModalNavWrap = styled.div`
  /* width: 300px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    &:hover {
      color: #999;
    }

    &.active {
      color: #000;
    }
  }
`;

export const SearchNavbar = styled.div`
  margin: 0 20px;

  /* color: #fff; */
  &.deactive {
    &:after {
      padding-bottom: 5px;
      display: block;
      content: '';
      border-bottom: 2px solid #aaa;
      /* color: gray; */

      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }

  &.active {
    padding-bottom: 5px;
    border-bottom: 2px solid #000;
  }
`;

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ---

export const SearchWrap = styled.div`
  border-radius: 30px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  height: 65px;
  cursor: pointer;

  /* width: 100%; */
  position: relative;
`;

export const SearchSection = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  width: 100%;
  height: 100%;
  /* margin: auto 0; */
  /* position: relative; */
`;

export const SearchTextBack = styled.div`
  /* width: 100%; */
  height: 100%;
  padding: 0 15px;
  /* display: flex;
  align-items: center; */
  position: relative;

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  justify-content: flex-end;
  /* margin: 5px 0; */

  &:hover {
    border-radius: 30px;
    background: #e5e5e5;
    /* height: 100%; */
    /* display: flex;
    align-items: center; */
  }

  &.avtive {
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.15);
    /* width: 100%; */
  }

  &.firstField {
    width: 35%;
  }

  &.dateField {
    width: 15%;
  }
  &.lastField {
    /* width: 30%; */
  }
`;

export const SearchTextSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  justify-content: flex-end;
  /* align-items: center; */
  position: relative;

  padding: 0 5px;
  margin: 5px 0 10px;
  /* margin: 0 auto; */

  p {
    margin: 0;
    font-size: 12px;
    position: absolute;
    top: 10px;
    font-weight: 600;
  }

  span {
    width: 100%;
    /* margin-top: 10px; */
    /* margin: 15px 10px 3px 0px; */
    color: gray;
    font-size: 14px;
  }

  &.first {
    /* width: 100%; */

    input {
      border: none;
      background: none;
      width: 100%;
      /* margin: 20px 10px 3px 0px; */
      font-size: 14px;
      /* padding: 5px 10px; */

      &:focus {
        border: none;
        outline: none;
      }
    }
  }
`;

export const NumberOfGuests = styled.div`
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 20px 10px 3px 0px; */

  span {
    margin-right: 5px;
    /* color: #000; */
    /* font-weight: 600; */
  }
`;

export const SearchedBtn = styled.div`
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding: 10px;
  margin-right: 10px;

  span {
    margin-left: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
  }

  background: #ffc147;
  color: #fff;
  transition: 0.1s ease-in-out;

  &:hover {
    background: #ffae00;
  }
`;
