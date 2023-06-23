import styled from 'styled-components';

export const HeaderContrainer = styled.div`
  height: 80px;
  padding: 0 40px;
  border-bottom: 1px solid lightgray;
`;

export const HeaderWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  max-width: 1440px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  /* cursor: pointer; */
  width: 20%;

  h1 {
    cursor: pointer;
    font-size: 24px;
  }

  &.headerCenter {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.headerRight {
    /* width: 20%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SearchNavWrap = styled.div`
  border-radius: 25px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.11);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
`;

export const SearchNavSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SearchNavBtn = styled.div`
  /* margin: 0 5px; */
  padding: 0 10px;

  &.center {
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
  }
`;

export const SearchBtn = styled.div`
  display: flex;
  align-items: center;

  border-radius: 50%;
  background: #ffae00;
  color: #fff;
  padding: 5px;
`;

// export const SearchNavInput = styled.input``;

export const ModeSetting = styled.div`
  cursor: pointer;
  font-weight: 600;
`;

export const SwitchBtn = styled.div`
  cursor: pointer;
`;

export const CountrySetting = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UserSetting = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
