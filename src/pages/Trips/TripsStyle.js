import styled from 'styled-components';

export const TripWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  /* width: 100%; */
  padding-bottom: 20px;
  padding: 20px;

  h2 {
    margin: 0;
    /* padding-bottom: 20px; */
  }

  &.upcomingList {
    /* background: #fff9ed; */
    background: rgb(255, 249, 237, 0.7);
  }
`;

export const TripListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  margin-top: 20px;
`;

export const TripList = styled.div`
  /* width: 100%; */
  display: flex;
  margin: 10px 0;
  cursor: pointer;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export const TripCardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  p {
    font-weight: 600;
  }

  span {
    color: gray;
  }
`;

export const TripStatus = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    padding: 10px;
    font-size: 13px;
    border-radius: 5px;
    color: #fff;
    /* color: #000; */

    &.pending {
      /* background: #f3a638; */
      /* background: rgb(243, 166, 56, 0.8); */
      border: 1px solid #54b7d3;
      color: #54b7d3;
    }
    &.ongoing {
      /* background: #54b7d3; */
      /* background: rgb(84, 183, 211, 0.8); */
      border: 1px solid #f3a638;
      color: #f3a638;
    }
    &.completed {
      /* background: #4cb64c; */
      /* background: rgb(76, 182, 76, 0.8); */
      border: 1px solid #4cb64c;
      color: #4cb64c;
    }
    &.canceled {
      /* background: #e3503e; */
      /* background: rgb(227, 80, 62, 0.8); */
      border: 1px solid #e3503e;
      color: #e3503e;
    }
  }
`;
