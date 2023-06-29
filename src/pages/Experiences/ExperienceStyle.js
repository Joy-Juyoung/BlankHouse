import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const TopMenuContainer = styled.div`
    background-color: #FFFFFF ;
    /* border-top: 1px solid rgba(0,0,0,0.1) ; */
    height: 72px ;
    width: 100% ;
`;

export const TopMenuWrap = styled.div`
    padding: 12px 24px;
    margin: 0 auto;
    max-width: 1700px;
`;

export const TopMenuList = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuDetail = styled.div`
    flex-shrink: 0 ;
    display: inline-block;
    position: relative;
    white-space: nowrap ;
    padding-right: 8px ;
    padding-top: 4px ;
    padding-bottom: 4px ;
`;

export const MenuBtn = styled.button`
    display: inline-block ;
    cursor: pointer ;
    text-align: center ;
    border: 1px solid black ;
    outline: none ;
    padding: 0 ;
    margin: 0 ;
    background-color: #fff;
    border-color: #DDDDDD ;
    position: relative ;
    padding: 10px 16px;
    border-radius: 30px ;
    font-size: 12px ;
    line-height: 16px ;
    width: 100% ;
`;

export const BtnDetail = styled.div`
    font-weight: 400 ;
    font-size: 14px ;
    line-height: 18px;
    display: flex ;
    place-content: center;

    span {
        display: inline-block ;
    }

    svg {
        align-self: center ;
        margin-left: 9px;
        display: block;
        fill: none;
        height: 12px;
        width: 12px;
        stroke: currentcolor;
        overflow: visible;
    }
`;

export const MenuLine = styled.div`
    display: inline ;
    height: 20px ;
    width: 0px ;
    margin-right: 16px ;
    margin-left: 8px ;
    border-left: 1px #DDDDDD solid ;
`;

export const MenuMid = styled.div`
    display: flex;
`;

export const MenuMidList = styled.div`
    display: flex ;
    height: 48px ;
    overflow: hidden ;
    flex-flow: wrap ;
    
`;

export const MidListDetail = styled.div`
    display: flex;
    flex-grow: 1;

`;

export const DetailInfo = styled.div`
    display: inline-block ;
    white-space: nowrap ;
    padding: 4px 8px;
    width: 100% ;
`;

export const MidListBtn = styled.button`
    display: inline-block;
    cursor: pointer;
    text-align: center;
    border: 1px solid black;
    background-color: #fff;
    outline: none;
    padding: 10px 16px;
    margin: 0;
    border-color: #DDDDDD;
    color: #000;
    position: relative;
    border-radius: 30px;
    font-size: 12px;
    line-height: 16px;
    width: 100%;

    span {
        font-weight: 400 ;
        font-size: 14px ;
        line-height: 18px ;
        display: inline-block;
    }
`;

export const FilterWrap = styled.div`
    display: flex;
    padding-top: 4px;
    padding-bottom: 4px;
`;

export const ExFilterBtn = styled.button`
    display: inline-block ;
    cursor: pointer ;
    text-align: center ;
    border: 1px solid black ;
    background-color: #fff;
    outline: none;
    padding: 10px 16px;
    margin: 0 ;
    border-color: #DDDDDD ;
    color: #000 ;
    position: relative ;
    border-radius: 30px ;
    font-size: 12px ;
    line-height: 16px ;
`;

export const FilterBtnWrap = styled.div`
    display: flex;
    white-space: nowrap;

    svg{
        margin-top: 2px;
        display: block;
        height: 16px;
        width: 16px;
        fill: currentcolor;
    }
    span {
        font-size: 14px;
        line-height: 18px;
        margin-left: 6px;
        @media (min-width: 950px)
        {
            display: initial ;
        }
    }
`;

export const MainMidList = styled.div`
  margin: 10px 0;
`;

export const MainTopWrap = styled.div`
    padding-left: 20px;
    padding-right: 40px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap:4px;
    
    h1{
        font-size:14px;
        font-weight:normal;
        line-height:18px
    }
`;

export const MainMidWrap = styled.div`
    padding-left: 20px;
`;

export const MainMidTitle = styled.div`

    margin-bottom: 16px ;


    h2 {
        font-size: 22px ;
        line-height: 26px ;
        font-weight: 600 ;
        margin: 0;
        padding: 0;
    }
`;

export const MainListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

export const RoomsEach = styled(Link)`
  position: relative;
  width: 100%;
  height: 350px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
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
    /* font-weight: 600; */
  }

  span {
    font-size: 14px;
    color: gray;
    margin-left: 3px;
  }
`;