import styled from 'styled-components';

export const RoomDetailHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;

  background: #fff;
  border-bottom: 1px solid #dddd;
`;

export const DetailHeader = styled.div`
  padding: 0 80px;
  max-width: 1120px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailHeaderWrap = styled.div`
  /* margin-left: -5px; */
  display: flex;
  align-items: center;

  span {
    /* text-decoration: none; */
    margin-right: 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    /* transition: 0.2s ease-in-out; */
    color: gray;

    &:hover {
      border-bottom: 4px solid #000;
      margin-top: 30px;
      padding-bottom: 26px;
      color: #000;
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const DetailHeaderReserve = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderReserveWrap = styled.div``;

export const ReservePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;

  span {
    &.side {
      margin-left: 5px;
      font-weight: 400;
    }
  }
`;

export const ReserveReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 11px;
  margin-top: 5px;

  span {
    &.coma {
      margin: 0 5px;
    }
  }

  a {
    text-decoration: none;
    color: gray;
  }
`;

export const ReserveBtn = styled.button`
  border: none;
  background: #ffae00;
  padding: 18px;
  border-radius: 10px;
  margin-left: 15px;
  cursor: pointer;

  font-weight: 600;
  font-size: 16px;
  color: #fff;
`;

// -----------
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

  &.account {
    margin-top: 5px;
  }

  &.accountPath {
    font-size: 14px;
    margin-bottom: 5px;
    margin-top: 0;
  }
`;

export const RoomTopInfo = styled.div`
  display: flex;
  align-items: center;
  /* font-size: 14px; */

  span {
    a {
      color: #000;
      /* margin-left: 5px; */
      /* margin-right: 10px; */
      &.accountPath {
        text-decoration: none;
        cursor: pointer;

        &:hover {
          /* border-bottom: 1px solid; */
          text-decoration: underline;
        }
      }
    }

    &.coma {
      margin: 0 5px;
    }
    &.strong {
      font-weight: 600;
    }

    &.accountPath {
      margin: 0 15px;
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

    &:active {
      transform: translateY(4px);
    }

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
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  position: relative;
`;

export const RoomPhotoMain = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  height: 535px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    /* display: inline-block; */
  }

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.15);
      z-index: 2;
    }
  }
`;

export const RoomPhotoSub = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  /* position: relative; */
`;

export const PhotoSubCover = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  height: 262.5px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    /* display: inline-block; */
  }

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.15);
      /*       
      linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0.1) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%); */
      z-index: 2;
    }
  }
`;

export const ShowPhotoBtn = styled.div`
  border: 1px solid #000;
  background: #fff;
  border-radius: 10px;
  /* background: none; */
  font-size: 16px;
  padding: 7px 15px;
  /* margin: 20px 0; */
  cursor: pointer;
  display: flex;
  align-items: center;

  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 3;

  svg {
    margin-right: 5px;
  }
`;

export const RoomDetailSection = styled.div`
  margin: 48px 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const RoomMainDetails = styled.div`
  /* margin: 48px 0; */
  display: flex;
  /* justify-content: space-between; */
  h2 {
    margin: 0;
  }
`;

export const RoomMainDetailsWrap = styled.div`
  flex: 1.8;
  padding-right: 45px;
`;

export const RoomDetailsTop = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: green;
    object-fit: cover;
  }

  /* span {
    &.coma {
      margin: 0 3px;
    }
  } */
`;

export const AvatarHost = styled.div`
  width: 45px;
  height: 45px;
`;

export const RoomDetailsSections = styled.div`
  padding: 30px 0 10px 0;
  border-top: 1px solid #dddd;

  h2 {
    margin: 0;

    &.rating {
      display: flex;
      align-items: center;
    }
  }

  p {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    display: flex;
    margin-bottom: 20px;
  }
`;

export const BasicInfo = styled.div`
  margin-left: 15px;
  p {
    font-weight: 600;
    font-size: 16px;
  }
  span {
    font-size: 14px;
    color: gray;
  }
`;

export const BasicIntro = styled.div`
  margin-top: 10px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const ThingsToKnow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  margin-top: 15px;
`;

export const ThingsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

export const ThingsTitle = styled.div`
  font-weight: 600;
`;

export const ThingsList = styled.div`
  margin-top: 10px;
`;

export const ShowMoreBtn = styled.div`
  /* border: none;
  background: none; */
  display: flex;
  align-items: center;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 20px 0;
  color: #000;

  svg {
    margin-left: 10px;
  }
`;

export const ShowAllBtn = styled.button`
  border: 1px solid #000;
  border-radius: 10px;
  background: none;
  font-size: 16px;
  padding: 10px 15px;
  margin: 20px 0;
  cursor: pointer;
`;

export const SleepWrap = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  padding: 10px 0 10px 30px;
  max-width: 120px;
  height: 120px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  /* svg {
    display: flex;
    justify-content: flex-start;
  } */

  p {
    margin-top: 15px;
    font-weight: 600;
  }
`;

export const PlaceOffers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin: 20px 0 10px 0;
`;

export const PlaceOffersList = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  svg {
    margin-right: 15px;
  }
`;
