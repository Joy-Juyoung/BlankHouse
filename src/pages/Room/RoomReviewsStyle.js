import styled from 'styled-components';

export const RoomReviewsContainter = styled.div`
  margin: 20px 0 10px;
`;

export const ReviewsWrap = styled.div``;

export const ReviewsMainTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 95px;
  grid-row-gap: 15px;
  width: 100%;
  /* margin: 10px 0; */
`;

export const ReviewGraphs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* margin: 10px 0; */
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

export const ReviewsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 95px;
  grid-row-gap: 8px;
  width: 100%;
  margin-top: 20px;
`;

export const EmptyReview = styled.div`
  margin: 80px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #bdbdbd;

  &.modal {
    width: 608px;
    padding-top: 20px;

    @media screen and (max-width: 1030px) {
      width: calc(608px -100%);
    }

    @media screen and (max-width: 720px) {
      width: 400px;
    }
  }
`;

// -----review card

export const ReviewCardWrap = styled.div`
  margin-top: 20px;
  min-height: 120px;
`;

export const ReviewCardUserWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewUserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;

export const ReviewUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  /* align-items: center; */

  span {
    font-size: 13px;
    margin-top: 2px;
    color: gray;
  }
`;

export const ReviewCardText = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 95px;
  grid-row-gap: 8px;
  width: 100%; */
  margin-top: 20px;
  padding: 0 10px;
`;

export const ReviewTextContents = styled.div``;
