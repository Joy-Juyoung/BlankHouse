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

// -------------------
export const ShowShareWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 15px;
  }
`;

export const ShowShare = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  font-size: 14px;

  p {
    font-weight: 600;
    margin: 0;
  }
`;

export const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Sharebox = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  border-top: 1px solid #ddd;
  padding-top: 30px;
`;

export const ShareTool = styled.div`
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  /* width: 100%; */
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  cursor: pointer;

  p {
    margin: 0 10px;
  }
`;
