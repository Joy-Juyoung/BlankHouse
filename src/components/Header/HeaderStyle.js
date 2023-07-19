import styled from 'styled-components';

export const HeaderContrainer = styled.div`
  height: 80px;
  border-bottom: 1px solid lightgray;

  /* padding: 0 40px; */
  padding: ${({ pagesmall }) => (pagesmall ? '0 80px' : '0 40px')};

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const HeaderWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  /* max-width: 1280px; */
  max-width: ${({ pagesmall }) => (pagesmall ? '1120px' : '1700px')};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  /* cursor: pointer; */
  /* width: 20%; */
  width: 100%;

  h1 {
    cursor: pointer;
    font-size: 24px;
    color: #ffae00;
  }

  img {
    width: 30px;
    margin-right: 10px;
  }

  &.headerCenter {
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.headerRight {
    /* width: 20%; */
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const SearchNavWrap = styled.div`
  border-radius: 25px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.12);
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
  /* flex: 1 1 auto; */
  /* max-width: 92px; */

  /* width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
  font-size: 14px;

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

export const HeaderRightSection = styled.div`
  /* &:hover {
    border-radius: 30px;
    background: #f5f5f5;
  } */

  margin-left: 5px;
`;

export const ModeSetting = styled.div`
  /* cursor: pointer;
  font-weight: 600; */
  padding: 10px;

  &:hover {
    border-radius: 30px;
    background: #f5f5f5;
  }
`;

export const SwitchBtn = styled.div`
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
`;

export const CountrySetting = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  &:hover {
    border-radius: 30px;
    background: #f5f5f5;
  }
`;

export const UserSetting = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  cursor: pointer;
  margin-left: 5px;

  border: 1px solid lightgray;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;

  &:hover {
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  }
`;

export const LogBtn = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background: none;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
`;
