import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1700px;
  /* z-index: 2; */

  span {
    &.coma {
      margin: 0 3px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const MainSmallContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 80px;
  max-width: 1120px;

  span {
    &.coma {
      margin: 0 3px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 60px;
`;

export const MainTop = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
`;

export const MainTopCategory = styled.div`
  /* flex: 9; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  margin-right: 10px;
  /* overflow: hidden; */
  /* overflow-x: scroll; */
  /* position: relative; */
`;

export const MainTopFilter = styled.div`
  /* flex: 1; */
  /* width: 5%; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 3;

  /* padding: 20px; */
`;

export const FilterBtn = styled.div`
  cursor: pointer;
  font-size: 14px;
  border: 1px solid #999999;
  background: #fff;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 5px;

  display: flex;
  align-items: center;
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
