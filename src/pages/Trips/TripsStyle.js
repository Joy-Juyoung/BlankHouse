import styled from 'styled-components';

export const TripWrapper = styled.div`
  margin-bottom: 40px;

  h2 {
    margin: 0;
    font-weight: 600;
  }

  &.upcomingList {
    padding: 20px;
    border: 1px solid #dddd;
    border-radius: 10px;
  }
`;

export const TripListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 60px;
  margin-top: 20px;
`;

export const TripList = styled.div``;

export const TripsCardWrap = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  cursor: pointer;

  img {
    width: 85px;
    height: 80px;
    object-fit: cover;
    flex: 1;
  }
`;

export const TripCardInfo = styled.div`
  width: 100%;
  flex: 3;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: 15px;
  cursor: pointer;
`;

export const TripInfoTitle = styled.div`
  p {
    font-weight: 600;
    margin: 0;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TripInfoDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: gray;
`;

export const TripStatus = styled.div`
  display: flex;
  /* width: 100%; */
  span {
    padding: 5px;
    font-size: 11px;
    border-radius: 5px;
    color: #fff;

    /* display: flex;
    align-items: flex-end; */

    &.pending {
      border: 1px solid #54b7d3;
      color: #54b7d3;
    }
    &.ongoing {
      border: 1px solid #f3a638;
      color: #f3a638;
    }
    &.completed {
      border: 1px solid #4cb64c;
      color: #4cb64c;
    }
    &.canceled {
      border: 1px solid #e3503e;
      color: #e3503e;
    }
  }
`;

// -----Details

export const TripContainer = styled.div`
  /* margin: 10px 0; */
  /* height: 650px; */
  /* width: 100%; */
  overflow-y: auto;
  cursor: auto;
`;

export const TripWrap = styled.div`
  /* width: 100%; */
`;

export const TripPhotos = styled.div`
  /* width: 100%; */

  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  /*padding: 0 30px;*/
  width: 100%;
  height: 350px;
  position: relative;
  z-index: 1;

  object-fit: cover;
  position: relative;

  img {
    width: 100%;
    height: 350px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const TripPhotoCover = styled.div`
  /* position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  z-index: 3; */
  z-index: 3;

  h2 {
    position: absolute;
    top: 20px;
    left: 20px;
    /* width: 100%; */
    z-index: 3;
    color: #fff;
  }

  span {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 3;

    svg {
      color: #000;
      background: #fff;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;

export const TripDetailsWrapper = styled.div`
  background: #fff;
  padding: 20px;
  margin: 10px 0;
`;

export const TripInfo = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #dddd;

  padding-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &.check {
    display: block;
  }

  &.first {
    border: none;
  }

  svg {
    margin-right: 15px;
  }

  /* &.showInfo {
    padding-bottom: 0;
  } */
`;

export const TripInfoLine = styled.div`
  display: flex;
  align-items: center;
`;

export const TripDate = styled.div`
  display: flex;
  align-items: center;
`;

export const TripDateWrapper = styled.div`
  width: 100%;

  &.left {
    border-right: 1px solid #dddd;
    margin-right: 20px;
    padding-right: 20px;
  }

  p {
    margin: 10px 0 0;
  }

  span {
    font-size: 14px;

    &.time {
      color: gray;
    }
  }
`;

export const TripInfoText = styled.div`
  width: 100%;

  p {
    margin: 0 0 5px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
  }

  &.cost {
    width: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
  }

  button {
    background: none;
    border-radius: 5px;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    margin-top: 15px;
    padding: 10px;

    cursor: pointer;

    /* justify-content: flex-end; */
  }
`;

export const TripInfoMore = styled.div`
  display: flex;
  align-items: center;

  &.showInfo {
    cursor: pointer;
  }
`;

// ----------
export const TripsEmpty = styled.div``;

export const LoadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const LoadMoreBtn = styled.button`
  width: auto;
  min-width: 130px;
  height: 44px;
  border-radius: 6px;
  background: #fff;
  color: #0a0f18;
  padding: 0 16px;
  font-size: 16px;
  outline: none;
  border: 1px solid #a3a9b3;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #0a0f18;
    color: #fff;
  }

  svg {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-left: 5px;
  }

  &:disabled {
    background: #f7f7f7;
    color: gary !important;
    cursor: not-allowed;

    &:hover {
      background: #f7f7f7;
      color: gary !important;
    }
  }
`;

export const LoadMoreBtnDisabled = styled.button`
  width: auto;
  min-width: 130px;
  height: 44px;
  border-radius: 6px;
  padding: 0 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;
  text-decoration: none;

  background: #f7f7f7;
  color: gary;

  svg {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-left: 5px;
  }
`;
