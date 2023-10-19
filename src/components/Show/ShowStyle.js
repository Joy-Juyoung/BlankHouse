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
    width: 100%;
  }
`;

export const ShowReviewWrapper = styled.div`
  padding: 0 10px;

  &.showLeft {
    /* position: relative; */
    /* position: sticky;
    top: 0px;
    background: #fff; */
  }

  &.modal {
    width: 608px;

    @media screen and (max-width: 1030px) {
      width: calc(608px -100%);
      margin-top: 180px;
    }

    @media screen and (max-width: 720px) {
      width: 400px;
      margin-top: 220px;
    }
  }
`;

export const ShowReviewSide = styled.div`
  position: fixed;
  background: #fff;
  z-index: 3;

  @media screen and (max-width: 1030px) {
    width: 608px;
  }

  @media screen and (max-width: 720px) {
    width: 400px;
  }
`;

export const ShowReviewTitle = styled.div`
  h2 {
    margin: 0;
    display: flex;
    align-items: center;
  }
`;

export const ShowReviewRatingGraph = styled.div`
  /* width: 300px; */
  width: 100%;
`;

export const ShowReviewGraph = styled.div`
  @media screen and (max-width: 1030px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 80px;
    margin: 10px 0 20px;
  }

  @media screen and (max-width: 720px) {
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

  @media screen and (max-width: 720px) {
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

  position: fixed;
  background: #fff;
  /* width: 100%; */
  z-index: 3;
  width: 608px;
  margin-top: -10px;
  padding-bottom: 20px;

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

  /* @media screen and (max-width: 1030px) {
    width: 608px;
  } */

  @media screen and (max-width: 720px) {
    width: 400px;
  }
`;

export const ShowReviewText = styled.div`
  /* margin-top: 250px; */
  padding-top: 40px;
`;

export const ShowReviewList = styled.div``;

export const ShowReviewEach = styled.div``;

export const ShowReviewPage = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
