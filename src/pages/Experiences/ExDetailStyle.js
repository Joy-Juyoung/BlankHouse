import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ExDetailWrap = styled.div`

`;

export const ExDetailMid = styled.div`

`;
export const ExDetailNavWrap = styled.div`
    padding-top: 32px;
    display: flex;
    align-items: center;
    
    ol {
        margin: 0;
        padding: 0;

        li {
            span {
                margin-left: 5px;
                margin-right: 5px;
            }
            display: inline-block;
        }
    }
`;
export const TopNavLink = styled(Link)`
    color: #000;
    text-decoration: underline;
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
`;

export const ExDetailMidWrap = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-left: auto;
    margin-right: auto;


    @media screen and (min-width: 1440px) {
    max-width:1280px;
    padding-left: 80px;
    padding-right: 80px;
  }
  @media screen and (min-width: 1128px) {
    max-width:1280px;
    padding-left: 80px;
    padding-right: 80px;
  }
      @media screen and (min-width: 950px) {
    padding-left: 40px;
    padding-right: 40px;
  }
      @media screen and (min-width: 744px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 375px) {
    padding-left:24px;
    padding-right:24px;
  }
`;
export const DetailTopHead = styled.div`
    padding-top: 32px;
    position: relative;
`;

export const TopHeadOne = styled.div`


    h1{
        font-weight: 600;
        font-size: 26px;
        line-height: 30px;
        margin: 0;
        padding: 0;
    }
    @media screen and (min-width: 1128px) {
        margin-bottom: 4px;
    }
    @media screen and (min-width: 744px) {
        margin-bottom: 4px;
  }
`;

export const TopHeadTwo = styled.div`
    display: flex; 
`;

export const HeadTwoWrap = styled.div`
    display: flex; 
    flex-grow: 1;
    font-size: 14px ;
    line-height: 18px ;
    align-items: baseline ;
    flex-wrap: wrap ;
    align-items: center;

    @media screen and (min-width: 744px) {
        margin-top: 4px;
  }
  span {
        margin-right: 4px;
        color:#000;
    }
`;

export const ReviewNavBtn = styled.button`
    background:none;
    display: flex; 
    border:none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    svg{   
        display: block;
        height: 14px;
        width: 14px;
    }

    span {
        margin-right: 4px;
        color:#000;

    }
`;
export const HeadTwoBtnsWrap = styled.div`
    display: flex;
    justify-content: flex-end; 

    /* @media screen and (min-width: 744px) {
        display: block;
  } */
`;

export const ShareBtnWrap = styled.div`
    margin-right: 20px;


`;
export const ShareBtn = styled.button`
    margin-left: -8px;
    margin-right: -8px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 8px;
    padding-left: 8px;
    background:none;
    display: flex; 
    border:none;
    cursor: pointer;
    /* align-items: center;
    justify-content: center; */

    svg {
        height: 16px;
        width: 16px;
        margin-right: 8px
    }

    span {
        font-size:14px;
    }
`;

export const SaveBtnWrap = styled.div`

`;

export const SaveBtn = styled.button`
    margin-left: -8px;
    margin-right: -8px;
    padding: 8px;
    background:none;
    display: flex; 
    border:none;
    cursor: pointer;
    /* align-items: center;
    justify-content: center; */

    svg {
        height: 16px;
        width: 16px;
        margin-right: 8px
    }

    span {
        font-size:14px;
    }
`;

export const ExPhotoWrap= styled.div`
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    width: 100%;
    padding-top: 32px;
    max-height: 440px;
    overflow: hidden;
    position: relative;
`;

export const ExPhotoContainer= styled.div`
    display: grid;
    max-height: 440px;
    height: 100%;
    width: 100%;
    gap: 8px;
    grid-template-columns: 1fr 1.5fr 1fr;
`;

export const ExShowAllWrap= styled.div`
    right: 16px;
    bottom: 16px;
    position: absolute;
    z-index: 2;
`;

export const ShowAllBtnWrap= styled.button`
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color:#000;
    background: #fff;
    padding: 7px 15px 7px 15px;
    cursor: pointer;
    margin: 0;
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center; 

    svg{
        margin-right: 8px;
        height: 15px;
        width: 15px;
    }
`;

export const ExPhotoGridOne= styled.div`
    max-height: 440px;
    display: grid;
    grid-area: 1 / 1 / auto / auto;
`;

export const GridOneWrap = styled.div`
    max-height: 440px;
    height: 100%;
    width: 100%;
    position: relative;

    img{
        height: 100%;
        width: 100%;
        /* width:252px;
        height:331.59px; */
    }
`;

export const ExPhotoGridTwo= styled.div`
    display: grid;
    grid-area: 1 / 2 / auto / auto;
`;

export const GridTwoWrap = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const GridListOne = styled.div`
    max-height: 440px;
    grid-area: 1 / 1 / span 2 / span 2;
    height: 100%;
    width: 100%;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        /* height:331.59px;
        width:249.33px; */
    }
`;

export const GridListTwo = styled.div`
    max-height: 440px;
    grid-area: 1 / 3 / auto / auto;
    height: 100%;
    width: 100%;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        /* height:161.8px;
        width:120.67px; */
    }
`;

export const GridListThree = styled.div`
    max-height: 440px;
    grid-area: 2 / 3 / auto / auto;
    height: 100%;
    width: 100%;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        /* height:161.8px;
        width:120.67px; */
    }
`;

export const ExPhotoGridThree= styled.div`
    display: grid;
    grid-area: 1 / 3 / auto / auto;
`;

export const MidLeftWrap = styled.div`
    position: relative;
    width: 58.333333333333336%;
    margin-left: 0%;
    margin-right: 0%;
`;

export const MidLeftList= styled.div`

`;

export const LeftTitleInfo= styled.div`
    padding-top: 48px;
    padding-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TitleInfoLeft= styled.div`

`;

export const LeftInfoTop= styled.div`

h2{
    margin: 0;
    padding: 0;
    color: #222;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
}

`;

export const LeftInfoBottom= styled.div`
    padding-top: 8px;

    span{
            padding-left: 0;
            padding-right: 0;
        }
    
`;


export const TitleInfoRight= styled.div`
    margin-left: 16px;
    font-size: 28px;
    height: 56px;
    width: 56px;
    display: block;
    position: relative;
`;

export const RightAvartar= styled.button`
    background: none;
    border: 0px;
    cursor: pointer;
    margin: 0px;
    padding: 0px;
    user-select: auto;
    display: block;
    height: 100%;
    position: relative;
    width: 100%;
    outline: none;
    border-radius: 50%;

    svg {
        height: 100%;
        width: 100%;
        position: static;
    }
`;

export const LeftMidInfo = styled.div`
    border-top: 1px solid rgb(221, 221, 221);
    padding-top: 32px;
    padding-bottom: 32px;
`;

export const MidInfoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const InfoLists = styled.div`
    display: flex ;

    svg{
        flex-shrink: 0;
        display: block;
        height: 24px;
        width: 24px;
    }
`;

export const InfoDetail = styled.div`
    margin-left: 16px;

    h3{
        color: rgb(34, 34, 34);
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 4px;
        margin: 0;
        padding: 0;
    }

    span{
        color: rgb(113, 113, 113);        
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
`;

export const LeftLanguageInfo = styled.div`
    border-top-color: rgb(221, 221, 221);
    padding-top: 32px;
`;

export const LanguageInfoWrap = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;

    svg {
        flex: 0 0 auto;
        margin-right: 12px;
        display: block;
        height: 18px;
        width: 18px;
    }
`;

export const LanguageInfoList = styled.div`
    line-height: 18px;
    flex: 1 1 auto;

    span{
        font-size: 16px;
    }
`;

export const LanguageTranslateBtn = styled.button`
    background: none;
    border:none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-weight: bold;
    text-decoration: underline;
`;

export const LeftWillInfo = styled.div`
    padding-top: 48px;
    padding-bottom: 48px;

    h2{
        margin: 0 0 24px 0;
        font-size: 22px;
        line-height: 26px;
        font-weight: 600;
    }

    p{
        font-weight: 400;
        word-break: break-word;
    }
`;

export const ReadMoreBtn = styled.button`
    background: none;
    border:none;
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
`;

export const LeftBottomInfo = styled.div`
    border-top-color: rgb(221, 221, 221);
    padding-top: 48px;
    padding-bottom: 48px;
`;

export const BottomInfoWrap = styled.div`
    position: relative;
    margin-left: 0%;
    margin-right: 0%;

    @media screen and (min-width: 1440px) {
    padding-left: 8px;
    padding-right: 8px;
  }
      @media screen and (min-width: 1128px) {
    padding-left: 8px;
    padding-right: 8px;
  }
      @media screen and (min-width: 950px) {
    padding-left: 8px;
    padding-right: 8px;
  }
      @media screen and (min-width: 744px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media screen and (min-width: 375px) {
    padding-left: 6px;
    padding-right: 6px;
  }
`;


export const HostInfoWrap = styled.div`
    margin-bottom: 24px;
    align-items: center;
    display: flex;
    flex-direction: row;

      @media screen and (min-width: 744px) {
        justify-content: initial;
  }

`;


export const HostAvatar = styled.div`
    height: 56px;
    width: 56px;
    @media screen and (min-width: 744px) {
        margin-right: 16px;
  }
`;

export const AvatarBtn = styled.button`
    height: 56px;
    width: 56px;
    background: none;
    border:none;
    cursor: pointer;
    display: block;
    position: relative;
    border-radius: 50%;
    margin: 0px;
    padding: 0px;

    svg{
        height: 100%;
        width: 100%;
    }
`;

export const HostSimpleInfo = styled.div`

    h2{
        margin: 0;
        padding: 0;
        color: #222;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
    }

    span{
        padding-top: 8px;
        color: #717171;
        font-weight:400;
        font-size: 14px;
        line-height: 18px;
        margin: 0;
        padding: 0;
        }
    
`;

export const HostRating = styled.div`
    margin-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    align-items: center;
    justify-content:center;

    @media screen and (min-width: 744px) {
        display: block;
  }

  svg {
    /* text-align: center; */
    font-size: 20px;
    min-width: 20px;
    align-items: center;
    justify-content:center;
  }
  span{
    align-items: center;
    justify-content:center;
    margin-left: 8px;
  }
`;


export const HostIntro = styled.div`

    p{
        font-weight: 400;
        word-break: break-word;
    }
        
`;

export const CoHostAvatar = styled.div`
    align-items: center;
    display: flex;
    margin-top: 32px;
        
`;
export const CoHostLists = styled.ul`
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    margin-bottom: 0px;
    margin-left: 4px;
    margin-top: 0px;
    padding: 0px;
`;

export const CoAvatars = styled.li`
    margin: 0 15px 0 0;
    padding: 0;
    height: 32px;
    width: 32px;
`;

export const CoHostLink = styled(Link)`
    color: black;
    cursor:pointer;
    text-decoration: none;
        svg{
            height: 32px;
            width: 32px;
            border-radius: 50%;
        }
`;

export const ContactHostWrap = styled.div`

@media screen and (min-width: 744px) {
    display: flex;
    align-items: center;
    margin-top: 32px;
  }

`;

export const HostLinkWrap = styled.div`
    min-width: 160px ;

`;

export const HostLink = styled(Link)`
    color: black;
    cursor:pointer;
    text-decoration: none;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;    
    border-color: #222;
    background: #fff;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 23px;
    padding-right: 23px;
    font-weight: bold;

`;

export const PaymentInfoWrap = styled.div`
    color: rgb(34, 34, 34);    
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    align-items: center;
    display: flex;

    @media screen and (min-width: 744px) {
        flex-direction: row;
        justify-content: initial;
        margin-left: 24px;
        margin-top: 0px;
    }

    svg {        
            margin-right: 16px;
            height: 24px;
            width: 24px;
            display: block;
    }
    span{

    }
`;

export const MidRightWrap = styled.div`
    position: relative;
    width: 33.33%;
    margin-left: 8.32%;
    margin-right: 0%;
`;

export const MidRightInfo = styled.div`
    position: sticky;
    top:80px;
    z-index: 1;
    width: 100%;
    display: inline-block;
    padding-right: 1px;
`;

export const RightInfoWrap = styled.div`
   padding-bottom: 48px;
`;

export const InfoList = styled.div`
   
`;

export const DetailInfoWrap = styled.div`
    margin-top: 48px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    padding: 24px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

export const DetailLists = styled.div`
    h2{
        margin: 0;
        padding: 0;
        font-size: 22px;
        line-height: 26px;
        align-items: center;
        display: flex;
        font-weight: 400;
    }
`;
export const ShowPriceBtn = styled.button`
    display: inline-flex ;
    position: relative ;
    background: none;
    border: 0px;
    cursor: pointer;
    margin: 0px;
    padding: 0px;
    user-select: auto;
    color: rgb(113, 113, 113);
    text-decoration: underline;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    outline: none;

`;

export const DatePersonPick = styled.div`
    margin-bottom: 16px;
    margin-top: 24px;

`;

export const PickOptionsList = styled.div`
    align-items: flex-start;
    border-bottom: none;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding: 12px 0px;

`;

export const OptionsDetail = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column wrap;
    gap: 0px 16px;

`;

export const OptionsInfoWrap = styled.div`

    span {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 6px;
        margin-top: 8px;
        display: flex;
        align-items: center;
        text-align: right;
    }
`;
export const DetailInfoList = styled.div`
    h4{
        padding: 0;
        margin: 0;
        font-size: 14px;
        line-height: 18px;
        font-weight: 600;
    }
    span {
        padding: 0;
        font-size: 12px;
        line-height: 16px;
        margin: 4px 0 0 0;
    }
`;
export const BookBtn = styled.button`
    font-size: 12px ;
    line-height: 16px ;
    cursor: pointer;
    text-decoration: underline;
    margin: 4px 0 0 0 ;
    padding: 0;
    background: none;
    border: none;

    span{
        
    }

`;

export const ChooseBtn = styled.button`
    margin-top: 4px;
    width: 100%;
    height: 100%;
    padding: 0;
    cursor: pointer;
    display: flex;
    text-align: center;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border: none;
    background-color: red;

    span{
        font-size:16px;
        width: 100%;
        height: 100%;
        min-width: 200px;
        justify-content:center;
        text-align: center;
        color: #fff;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 16px;
        padding-right: 16px;
    }

`;

export const ReportBtnWrap = styled.div`
    margin-top: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const ReportBtn = styled.button`
    cursor: pointer;
    margin: 0;
    text-align: center;
    background: none;
    border: 0;
    padding: 0;
    display: flex;
    
    svg{
        color: #717171;
        margin-right: 16px;
        /* display: block; */
        height: 16px;
        width: 16px;
    }

    span{
        align-items: center;
        color: #717171;
        text-decoration: underline;
        font-size:14px
        line-height:18px;        
        font-weight: 600;
    }
`;

export const MidLocationWrap = styled.div`
    width: 100%;
    border-top-color: rgb(221, 221, 221);
    border-top-width: 1px;
    border-top-style: solid;
    padding-top: 48px;
    padding-bottom: 48px;

    h2{
        margin: 0 0 24px 0;
        padding: 0;
        font-size: 22px;
        line-height: 26px;
        font-weight: 600;
        display: flex;

        svg {
            display: block;
            /* height: 16px;
            width: 16px; */
            margin-right: 8px;
        }
    }

    img{

        height: 100%;
        width: 100%;
        position: relative;
        height: 480px;
        margin-bottom: 32px;
        @media screen and (min-width: 744px) {
            display: block;
    }

    }
    p{
        position: relative;
        margin-left: 0%;
        margin-top: 24px;
        overflow-wrap: break-word;
        line-height: 24px;

        @media screen and (min-width: 1440px) {
            padding-left: 8px;
            padding-right: 8px;
        }
        @media screen and (min-width: 1128px) {
            width: 100%;
            margin-right: 0%;
            padding-left: 8px;
            padding-right: 8px;
        }
        @media screen and (min-width:950px) {
            padding-left: 8px;
            padding-right: 8px;
        }
        @media screen and (min-width: 744px) {
            padding-left: 8px;
            padding-right: 8px;
        }
        @media screen and (min-width: 375px) {
            padding-left: 6px;
            padding-right: 6px;    
        }
    }
`;

export const MidReviewWrap = styled.div`
  border-top-color: rgb(221, 221, 221);
    border-top-width: 1px;
    border-top-style: solid;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
`;

export const ReviewListsWrap = styled.div`
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        @media screen and (min-width: 744px) {
            display: block;
        }
`;

export const ReviewDetails = styled.div`
    position: relative;
    width: 100%;
    margin-left: 0%;
    
        @media screen and (min-width: 1440px) {
            padding-left: 8px;
            padding-right: 8px;
        }
        @media screen and (min-width: 1128px) {
            /* width: 41.6667% ; */
            margin-right: 8.33333% ;
            padding-left: 8px;
            padding-right: 8px;
        }
        @media screen and (min-width:950px) {
            padding-left: 8px;
            padding-right: 8px;
        }
        @media screen and (min-width: 744px) {
            padding-left: 8px;
            padding-right: 8px;
        }
        @media screen and (min-width: 375px) {
            padding-left: 6px;
            padding-right: 6px;    
        }
`;

export const ReviewsInfo = styled.div`
    margin-bottom: 40px;
`;

export const ReviewsUserInfo= styled.div`
    justify-content: left;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    @media screen and (min-width: 1128px) {
        margin-bottom: 16px;
        }
`;

export const ReviewsIntro = styled.div`
    line-height: 24px;
    width: 100%;
`;
export const ReviewAvatarBtn = styled.button`
    height: 40px;
    width: 40px;    
    background: none;
    border:none;
    cursor: pointer;
    display: block;
    position: relative;
    border-radius: 50%;
    margin: 0px;
    padding: 0px;
    display: block;
    position: relative;
    
    svg{
        height: 100%;
        width: 100%;
    }


    
`;

export const UserInfoWrap = styled.div`
    margin-left: 12px;
    h1{
        color: #222;
        font-weight:600;
        font-size: 16px;
        line-height: 20px;
        margin: 0;
        padding: 0;
    }
    span{
        margin: 0;
        padding: 0;
        color: #717171;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        display: inline;
    }
`;
export const ChooseDateWrap = styled.div`
    width: 100%;
    border-top-color: rgb(221, 221, 221);
    border-top-width: 1px;
    border-top-style: solid;
    padding-top: 48px;
    padding-bottom: 48px;

`;

export const DateSlideWrap = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const SlideTitle = styled.div`
    h2{
        margin: 0;
        padding: 0;
        font-size: 22px;
        line-height: 26px;
        font-weight: 600;
        display: flex;
    }

    span {
        margin-top: 8px;
        color: rgb(113, 113, 113);
    }
`;

export const SlideBtnWrap = styled.div`


`;

export const ExtraInfoWrap = styled.div`
    width: 100%;
    border-top-color: rgb(221, 221, 221);
    border-top-width: 1px;
    border-top-style: solid;
    padding-top: 48px;
    padding-bottom: 48px;

`;

export const ThingsWrap = styled.div`
    padding-bottom: 20px;
    h2 {
        margin: 0;
        padding: 0;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
    }
`;

export const ThingsInfoWrap = styled.div`
margin-bottom: -32px;

`;

export const ThingInfoTop = styled.div`
    position: relative;
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
    padding-left: 6px;
    padding-right: 6px;
    margin-bottom: 32px;

    h3 {
        font-weight: 600;
        margin-bottom: 16px;
    }
`;

export const IconInfoWrap = styled.div`
    display:flex;
    justify-centent:center;
    align-items: center;
    margin-bottom: 16px;
    svg {
        height: 20px;
        width:20px;
        margin-right: 8px
    }
    span {
        line-height: 24px;
    }
`;

export const ThingInfoBottom = styled.div`
    position: relative;
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
    padding-left: 6px;
    padding-right: 6px;

`;
export const SimilarWrap = styled.div`
    width: 100%;
    border-top-color: rgb(221, 221, 221);
    border-top-width: 1px;
    border-top-style: solid;
    padding-top: 48px;
    padding-bottom: 48px;


`;


export const ExpDatePickWrap = styled.div`
    position: absolute;
    top:70px;
    left:-25px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    z-index: 100;
`;


export const GuestsInput = styled.div`
width: 100%;
/* display: flex;
flex-direction: column; */
/* justify-content: space-between; */
`;
export const RoomSideInputField = styled.div`
    display:flex;   
    margin: 20px 0;
    z-index: 6;
    /* width: 100%; */
    /* padding: 10px; */
    border-radius: 10px;
    border: 1px solid #c4c4c4;

    span {
        font-size: 11px;
        font-weight: 600;
    }
`;

export const SideDateInput = styled.div`
  display: flex;
`;
export const SideDatesInput = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  z-index: 5;
  position: relative;
  width:100% ;

  &.active {
    border: 2px solid #000;
    border-radius: 10px;
  }
`;

export const SideGuestsInput = styled.div`
  padding: 10px 15px;
  border-left: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  z-index: 10;
  position: relative;
  width:100% ;

  &.active {
    border: 2px solid #000;
    border-radius: 10px;
    width:100% ;
  }
`;


// ---drop start

export const DropBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  cursor: auto;

  overflow: hidden;
`;

export const GuestsDropdown = styled.div`
  background: #fff;
  padding: 10px;
  width: 450px;
  position: absolute;
  top: 70px;
  left: -260px;
  right: 0;
  z-index: 2;
  cursor: auto;

  border-radius: 10px;
  border: 1px solid #dddd;
  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.2);

  ul {
    list-style: none;
    padding: 0 10px;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
  span {
    font-weight: 400;
    font-size: 14px;
  }
`;

export const GuestsCount = styled.div`
  display: flex;
  align-items: center;

  button {
    border: 1px solid gray;
    border-radius: 50%;
    /* margin: 0 10px; */
    width: 32px;
    height: 32px;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;

    svg {
      color: gray;
    }
  }
  span {
    width: 35px;
    text-align: center;
  }
`;

export const GuestsNotice = styled.div`
  padding: 0 10px;

  p {
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: normal;
  }
`;

export const GuestsCloseBtn = styled.div`
  text-decoration: underline;
  text-align: right;
  margin: 20px 10px;

  span {
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
  }
`;
