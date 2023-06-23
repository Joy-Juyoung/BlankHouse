import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0 40px;
`;

export const MainWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  margin: 0 auto;

  max-width: 1440px;
`;

export const MainTop = styled.div`
  display: flex;
  height: 80px;
  /* justify-content: space-between; */
`;

export const MainTopCategory = styled.div`
  flex: 9;
  display: flex;
  align-items: center;
`;

export const MainTopFilter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* padding: 20px; */
`;

export const FilterBtn = styled.div`
  cursor: pointer;
  font-size: 14px;
  border: 1px solid lightgray;
  padding: 10px 15px;
  border-radius: 5px;
`;

export const MainMid = styled.div`
  margin: 10px 0;
`;
