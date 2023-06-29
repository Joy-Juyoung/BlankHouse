import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ExDetailMid = styled.div`
    display: flex;
`;


export const ExDetailMidWrap = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 80px;
    padding-right: 80px;

    /* @media screen and (min-width: 1440px) {
    padding-left: 80px;
    padding-right: 80px;
  } */
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


export const MidRightWrap = styled.div`
    position: relative;
    width: 33.33%;
    margin-left: 8.32%;
    margin-right: 0%;
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
    margin: 0;
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