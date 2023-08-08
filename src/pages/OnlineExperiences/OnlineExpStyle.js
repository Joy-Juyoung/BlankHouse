import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const OnlineExpContainer = styled.div`
    width: 100% ;
`;
export const OnlineExpWrap = styled.div`
    padding: 12px 24px;
    margin: 0 auto;
    max-width: 1700px;
`;

export const ExTopWrapper = styled.div`
    padding-top: 32px;

    @media screen and (min-width: 744px) {
        padding-bottom: 0px;
        background-color: #fff;
  }

`;

export const ExTopWrap = styled.div`


`;

export const ExImageWrapper = styled.div`
    scroll-snap-type: x mandatory !important;
    overflow-x: auto !important;
    display: flex !important;


`;
export const ExTopHeader = styled.div`

    max-width: 1600px;
    
    @media screen and (min-width: 1128px) {
        margin: 0px auto;
        position: relative;
        max-width: 1760px;
        /* padding-right: 80px;
        padding-left: 80px; */
    }
  
    @media screen and (min-width: 744px) {
            padding-bottom: 0px;
            background-color: #fff;
    }
  
`;

export const TopHeaderWrap = styled.div`
    color: rgb(34, 34, 34);
    display: flex;

    @media screen and (min-width: 1128px) {
        margin-bottom: 32px;
    }
  
    @media screen and (min-width: 744px) {
        align-items: flex-end;
        flex-direction: row
    }

`;

export const HeaderNameWrap = styled.div`
    display: inline-block;

    @media screen and (min-width: 744px) {
        flex: 1 1 auto;
    }

    h1{
        margin: 0;
        padding: 0;

        @media screen and (min-width: 744px) {
            font-size: 32px;
        line-height: 36px;
        font-weight: 800;
        text-align: left;
        color: rgb(34, 34, 34);
        }
    }
`;


export const ExpWrapper = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const ExpDetail = styled.div`
    display: flex; 
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;

`;

export const ExpBody = styled.div`
    margin-top: 8px;
    margin-bottom: 12px;
    position: relative;
    z-index: 0;
`;

export const ExpBodyTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const TopLeftInfo = styled.div`
    margin-right: 24px;
    width: auto;

    h2 {
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 22px;
        line-height: 26px;
        font-weight: 600;
    }
`;

export const TopRightInfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    span {
        display: inline-block;
        height: 32px;
        width: 1px;
        margin-right: 16px;
        padding: 0px;
    }
`;

export const ShowAllLink = styled(Link)`
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    color: #000;
    text-decoration: underline;
`;

export const SliderArrowWrap = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    p {
        margin-left: 8px;
    }
`;

export const LeftArrowBtn = styled.button`
    border-radius: 50%;
    background: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    transition: transform 0.25s cubic-bezier(0.2,0,0,1);;
    outline: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid lightgray;

    svg {
        display: block;
        height: 20px;
        width: 20px;
    }

    ::hover {
        color: #000;
        transform: scale(1.04);
    }
`;

export const RightArrowBtn = styled.button`
    border-radius: 50%;
    background: none;
    border: 1px solid lightgray;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;

    svg {
        display: block;
        height: 20px;
        width: 20px;
    }
    ::hover {
        color: #000;
        transform: scale(1.04);
    }
`;

export const ExpBodyBottom = styled.div`
    display: flex;
    /* justify-content:center;
  align-items:center; */
    transition: -ms-transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s, transform 0.5s ease 0s ;
    transform: translateX(0%);
`;
export const InfoSlideWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* margin-right:10px */
  /* justify-content:center;
  align-items:center; */

`;



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
    padding: 7px 10px;
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
    height: 42px ;
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
    background-color: #f4f2f2;
    outline: none;
    padding: 7px 10px;
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
  height: 500px;
  text-decoration: none;
  color: #000;
  margin-right:10px;
  cursor: pointer;
  /* width: 300px;
  height: 300px; */
`;

export const RoomEachPhoto = styled.img`
  object-fit: cover;
  width: 100%;
  height:100%;

  border-radius: 10px;

  cursor: pointer;

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

export const RightArrowBtns = styled.button`
    border-radius: 50%;
    background: none;
    border: 1px solid lightgray;
    cursor: pointer;
    width: 32px;
    height: 32px;
    margin-left:10px;
    margin-top:1px;
    svg {
        display: block;
        height: 20px;
        width: 20px;
    }
`;