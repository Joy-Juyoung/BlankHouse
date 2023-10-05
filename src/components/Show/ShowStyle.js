import styled from 'styled-components';

// Reviews
export const ShowReviewBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;

  height: 650px;
  overflow-y: auto;
`;

export const ShowReviewWrapper = styled.div`
  /* display: flex; */
  padding: 0 20px;

  &.showSide {
    /* position: relative; */
    /* height: 100%; */
    /* width: 100%; */
    /* position: fixed; */
  }
`;

export const ShowReviewSide = styled.div`
  position: fixed;
  /* right: 0; */
`;

export const ShowReviewTitle = styled.div`
  h2 {
    margin: 0;
    display: flex;
    align-items: center;
  }
`;

export const ShowReviewRatingGraph = styled.div`
  width: 300px;
  position: fixed;
`;

export const ShowReviewGraph = styled.div`
  /* width: 100%; */
`;

export const ReviewGraphs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin: 20px 0;
`;

export const ReviewGraphsName = styled.div`
  flex: 1;
`;

export const ReviewGraphsRate = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* width: 100%; */
  /* background: #dddddd; */
`;

export const GraphsRateNum = styled.div`
  width: 40px;
  /* flex: 1; */
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
    /* margin-right: -30px; */
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

export const ShowReviewEach = styled.div`
  /* margin-bottom: 20px; */
`;

export const ShowReviewPage = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
