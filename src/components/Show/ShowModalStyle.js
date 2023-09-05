import styled from 'styled-components';

export const ModalShowMain = styled.div`
  padding: 0 25px;
  /* overflow-y: scroll; */
  max-height: 750px;
  /* height: 100%; */
  align-items: center;

  &.trips {
    background: #f5f5f5;
    overflow-y: scroll;
  }
`;

export const ShowWrap = styled.div`
  /* max-width: calc(100vw - 20%); */
  width: 550px;
  margin: 20px auto;
`;
