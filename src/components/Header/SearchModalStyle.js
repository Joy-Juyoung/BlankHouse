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
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchNavbar = styled.div`
  &.deactive {
    &:after {
      padding-bottom: 5px;
      display: block;
      content: '';
      border-bottom: 2px solid #000;
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

  width: 100%;
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
  width: 100%;
  height: 100%;
  padding: 0 15px;
  /* display: flex;
  align-items: center; */
  position: relative;

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
  }
`;

export const SearchTextSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  position: relative;

  padding: 0 5px;
  /* margin: 0 auto; */

  p {
    margin: 0;
    font-size: 13px;
    position: absolute;
    top: 10px;
    font-weight: 600;
  }

  span {
    width: 100%;
    margin: 20px 10px 3px 0px;
    font-size: 16px;
    color: gray;
  }

  &.firstField {
    width: 300px;

    input {
      border: none;
      background: none;
      width: 100%;
      margin: 20px 10px 3px 0px;
      font-size: 16px;
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
  margin: 20px 10px 3px 0px;

  span {
    margin-right: 5px;
    color: #000;
    font-weight: 600;
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

  /* color: #fff;
  border: 3px solid #ffae00;
  background-image: -webkit-linear-gradient(
    30deg,
    #c266d3 50%,
    transparent 50%
  );
  background-image: linear-gradient(30deg, #ffae00 50%, transparent 50%);
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 0%;
  -webkit-transition: background 0.4s ease-in-out;
  transition: background 0.4s ease-in-out; */

  background: #ffc147;
  color: #fff;
  transition: 0.1s ease-in-out;

  &:hover {
    background: #ffae00;
  }
`;
