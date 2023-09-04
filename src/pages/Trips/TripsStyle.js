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

export const TripList = styled.div`
  /* width: 100%; */
  display: flex;
  margin: 10px 0;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

export const TripCardInfo = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: 15px;
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

  span {
    padding: 5px;
    font-size: 11px;
    border-radius: 5px;
    color: #fff;

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
