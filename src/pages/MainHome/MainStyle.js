import styled from 'styled-components';

export const MainContainer = styled.div`
  /* padding: 0 40px; */
  height: 100%;
  margin: 0 auto;

  /* max-width: 1700px; */
  padding: ${({ pagesmall }) => (pagesmall ? '0 80px' : '0 40px')};
  max-width: ${({ pagesmall }) => (pagesmall ? '1120px' : '1700px')};

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const MainWrap = styled.div`
  /* height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  max-width: 1700px; */
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainTop = styled.div`
  display: flex;
  height: 100px;
  /* justify-content: space-between; */
  align-items: center;
`;

export const MainTopCategory = styled.div`
  /* flex: 9; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 95%;
  /* overflow: hidden; */
  /* overflow-x: scroll; */
  /* position: relative; */
`;

export const MainTopFilter = styled.div`
  /* flex: 1; */
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* padding: 20px; */
`;

export const FilterBtn = styled.div`
  cursor: pointer;
  font-size: 14px;
  border: 1px solid lightgray;
  padding: 10px 15px;
  border-radius: 5px;
`;

export const MainMid = styled.div`
  margin: 10px 0;
`;

export const MainMidWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  a {
    text-decoration: none;
    color: #000;
  }
`;

// -----List Each

export const RoomsEach = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  /* width: 300px;
  height: 300px; */
`;

export const RoomEachPhoto = styled.img`
  object-fit: cover;
  width: 100%;
  height: 75%;

  border-radius: 10px;

  cursor: pointer;

  img {
  }
`;

export const ToggleLike = styled.div`
  /* position: relative; */
`;

export const RoomLike = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  border: none;
  background: none;
  z-index: 2;

  &:active {
    transform: translateY(4px);
  }

  svg {
    cursor: pointer;
  }
`;

export const RoomEachDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoomTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;

  p {
    margin: 0;
    font-weight: 600;
  }
`;

export const RoomRating = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    margin-left: 3px;
    /* color: gray; */
    /* font-weight: 400; */
  }
`;

export const RoomDesc = styled.div`
  font-size: 14px;
  color: gray;
`;

export const RoomPrice = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 16px;

  p {
    margin: 0;
    font-weight: 600;
  }

  span {
    font-size: 14px;
    color: gray;
    margin-left: 3px;
  }
`;
