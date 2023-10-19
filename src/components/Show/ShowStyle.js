import styled from 'styled-components';

// Reviews
export const ShowReviewBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  height: 650px;
  overflow-y: auto;

  @media screen and (max-width: 1030px) {
    display: block;
  }
`;

export const ShowReviewWrapper = styled.div`
  padding: 0 10px;
`;

export const ShowReviewSide = styled.div``;

export const ShowReviewTitle = styled.div`
  h2 {
    margin: 0;
    display: flex;
    align-items: center;
  }
`;

export const ShowReviewRatingGraph = styled.div`
  width: 300px;
  width: 100%;
`;

export const ShowReviewGraph = styled.div`
  @media screen and (max-width: 1030px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 80px;
    margin: 10px 0 20px;
  }

  @media screen and (max-width: 680px) {
    display: block;
    margin: 20px 0 30px;
  }
`;

export const ReviewGraphs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin: 20px 0;

  @media screen and (max-width: 1030px) {
    margin: 10px 0;
  }
`;

export const ReviewGraphsName = styled.div`
  flex: 1;
`;

export const ReviewGraphsRate = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 680px) {
    flex: 2;
  }
`;

export const GraphsRateNum = styled.div`
  width: 40px;
  display: flex;
  justify-content: flex-end;
`;

export const ShowReviewSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  span {
    position: absolute;
    top: 12px;
    left: 15px;
    color: #bbbbbb;
  }

  input {
    padding: 15px;
    border-radius: 30px;
    border: 1px solid #bbbbbb;
    background: #f5f5f5;
    padding-left: 45px;
    width: 100%;
  }
`;

export const ShowReviewList = styled.div``;

export const ShowReviewEach = styled.div``;

export const ShowReviewPage = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
