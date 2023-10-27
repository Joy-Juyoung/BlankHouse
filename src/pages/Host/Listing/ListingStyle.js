import styled, { css } from 'styled-components';

export const ListingMainTop = styled.div`
  margin: 20px 0;
`;

export const ListingSearch = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    padding: 10px 15px;
    border-radius: 30px;
    outline: none;
    border: 1px solid #bbbb;
    background: #f5f5f5;
    width: 50%;
  }

  button {
    padding: 10px 15px;
    border-radius: 10px;
    outline: none;
    border: 1px solid #000;
    background: #fff;
    cursor: pointer;

    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export const ListingMainWrapper = styled.div``;

export const ListingTable = styled.table`
  width: 100%;
  /* border-bottom: 0.5px solid #afafaf; */
  text-align: left;

  input {
    margin-left: -3px;
  }
`;

export const ListingTHead = styled.thead``;

export const ListingTHeadeRow = styled.tr``;

export const ListingTHeadCell = styled.th`
  color: gray;
  font-size: 13px;
  border-bottom: 0.5px solid #dddd;
  padding-bottom: 10px;

  &.center {
    text-align: center;
  }
`;

export const ListingTBody = styled.tbody``;

export const ListingTBodyRow = styled.tr``;

export const ListingTBodyCell = styled.td`
  font-size: 12px;
  padding: 15px 0;
  border-bottom: 0.5px solid #dddd;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
  }

  span {
    text-align: center;
    padding: 10px;

    &.statusFinish {
      border: 1px solid gray;
      border-radius: 10px;
    }

    &.statusYet {
      border: 1px solid #d31919;
      border-radius: 10px;
      color: #d31919;
      position: relative;
    }

    /* photo */

    &.yet {
      display: flex;
      align-items: center;
      color: #d31919;
    }

    svg {
      margin-left: 5px;
    }
  }

  &.center {
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    color: gray;

    span {
      text-decoration: underline;
      &.continue {
        color: #000;
      }

      &:hover {
        color: #000;
      }
    }
  }

  &.title {
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const WarningText = styled.div`
  position: absolute;
  font-size: 11px;
  color: #d31919;
  margin-top: 17px;
  /* width: 100%; */

  display: flex;
  align-items: center;

  svg {
    margin-right: 3px;
  }

  span {
    padding: 0;
  }
`;
