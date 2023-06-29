import styled from 'styled-components';

export const RoomTopWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

export const RoomTopHeader = styled.h1`
  margin: 0;
`;

export const RoomTopText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RoomTopInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    a {
      color: #000;
      margin-left: 5px;
      margin-right: 10px;
    }
    &.space {
      margin-left: 5px;
    }
  }

  button {
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;

    border: none;
    background: none;
    cursor: pointer;

    span {
      margin-left: 5px;
    }

    &:hover {
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const RoomMainWrap = styled.div``;

export const RoomMainPhotos = styled.div`
  padding-top: 24px;
`;

export const RoomMianWrapper = styled.div`
  height: 560px;
`;

export const RoomMainDetails = styled.div``;

export const RoomDetailsTop = styled.div``;

export const RoomDetailsSections = styled.div``;
