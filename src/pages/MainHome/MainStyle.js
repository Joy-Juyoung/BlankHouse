import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1700px;
  min-height: 70vh;

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
  min-height: 70vh;

  &.account {
    max-width: 1015px;
  }

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

export const MainTitle = styled.h1`
  margin: 40px 0;
`;

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 60px;

  &.account {
    margin-top: 20px;
  }
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

  h2 {
    margin: -10px 0 20px;
  }
`;

export const MainMidWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  a {
    text-decoration: none;
    color: #000;
  }

  &.wish {
    grid-template-columns: repeat(4, 1fr);
  }
  &.account {
    grid-template-columns: repeat(3, 1fr);
    /* margin: 0 auto; */
  }

  @media screen and (max-width: 1020px) {
    &.account {
      grid-template-columns: repeat(2, 1fr);
      /* margin: 0 auto; */
    }
  }

  &.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 80px;
  }
`;

export const EmptyMainRoom = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

  position: absolute;
  top: 30%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #bbbb;
  font-weight: 600;
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

export const RoomLike = styled.div`
  &.card {
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
  }

  &.detail {
    border: none;
    background: none;
    padding: 0;
    z-index: 2;

    &:active {
      transform: translateY(4px);
    }

    svg {
      cursor: pointer;
    }
  }
`;

export const RoomEachDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* background: yellow; */
  margin: 10px 0;
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
  margin: 10px 0;
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
