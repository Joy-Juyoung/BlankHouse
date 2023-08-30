import styled from 'styled-components';

export const TripWrapper = styled.div``;

export const TripList = styled.div`
  display: flex;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export const TripCardInfo = styled.div`
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
