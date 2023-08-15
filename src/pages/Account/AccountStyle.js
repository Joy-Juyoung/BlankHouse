import styled from 'styled-components';

export const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  border-radius: 10px;
  box-shadow: 2px 4px 10px 3px rgba(0, 0, 0, 0.1);

  padding: 20px;
  cursor: pointer;
`;

export const BoxIcon = styled.div`
  margin-bottom: 20px;
`;

export const BoxTitle = styled.div`
  font-size: 16px;
`;

export const BoxInfo = styled.div`
  margin-top: 10px;
  color: gray;
  font-size: 14px;
`;

// ---------------------
export const MainDisplayWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`;

export const DisplayWrapper = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 10px 0; */
`;

export const DisplayInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid #bbbbbb;
  position: relative;
`;

export const InfoText = styled.div`
  /* position: relative; */

  input {
    margin: 20px 0;
    padding: 15px 10px;
    border-radius: 10px;
    border: 0.5px solid #bbbbbb;
    font-size: 16px;
  }
`;

export const InfoTitle = styled.div``;

export const InfoInput = styled.div`
  color: gray;
  margin-top: 5px;
  font-size: 14px;
`;

// export const InfoInput = styled.input`
//   color: gray;
//   margin-top: 5px;
//   font-size: 14px;
// `;

export const InfoSave = styled.div`
  button {
    border: none;
    background: #000;
    color: #fff;
    padding: 15px 20px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const InfoEdit = styled.div`
  position: absolute;
  top: 25px;
  right: 0;

  button {
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
  }
`;

// ------
export const DisplaySideWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 90px;
  margin-bottom: 40px;
  padding: 25px 0;
  border: 1px solid #bbbbbb;
  border-radius: 10px;
  padding: 15px;
`;
export const SideWrap = styled.div`
  margin: 20px 0;
  border-top: 1px solid #bbbbbb;
  padding-top: 20px;

  &.firstSide {
    border-top: none;
    padding-top: 0;
  }
`;
export const SideIcon = styled.div``;
export const SideTitle = styled.div`
  font-weight: 600;
  margin-top: 20px;
`;
export const SideInfo = styled.div`
  font-size: 14px;
`;
