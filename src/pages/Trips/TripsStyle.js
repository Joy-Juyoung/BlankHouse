import styled from 'styled-components';

export const TripWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  /* width: 100%; */
`;

export const TripListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
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
    color: #fff;
    border-radius: 5px;

    &.pending {
      background: #f3a638;
    }
    &.ongoing {
      background: #54b7d3;
    }
    &.completed {
      background: #4cb64c;
    }
    &.canceled {
      background: #e3503e;
    }
  }
`;
