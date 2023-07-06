import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const ModalContainer = styled.div`
  /* max-width: 750px;
  max-height: 780px; */
    padding: 24px;
    flex: 1 1 auto;
    overflow-y: auto;
`;

export const ModalMain = styled.div`

`;

export const ModalMainTitle = styled.h1`
    margin-top: 8px ;
    margin-bottom: 24px ;

    h3{
        margin-top: 0;
        font-size: 22px;
        line-height: 26px;
        color: rgb(34, 34, 34);
        font-weight: 600;
        margin-bottom: 8px;
    }
`;
export const ModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 0 25px;
  height: 60px;
`;

export const PlaceTypeWrap = styled.form`

`;

export const PlaceTypeWrapper = styled.div`
    margin-top: 16px;
`;

export const InputListsWrap = styled.div`
    border-radius: 8px;
    border: 1px solid #717171;
    position: relative;
`;

export const ListsWrapper = styled.div`
    display: flex;
`;

export const CountryWrap = styled.div`
    display: flex;
    position: relative;
    flex: 1 1 auto;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    padding: 0;
`;


export const CountryTitle = styled.div`
    position: absolute;
    top: 8px;
    transform-origin: 0% 0%;
    left: 18px;
    right: 12px;
    margin: 0;
    padding: 0 24px 0 0;
    font-size: 12px;
    line-height: 16px;

    span {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #717171;
    }
`;


export const CountrySelect = styled.select`
    margin: 0;
    padding: 26px 36px 10px 12px ;
    min-height: 56px;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;

    /* border-bottom: 1px solid lightgray; */

`;
export const PhoneNumWrap = styled.div`
    position: relative;
    flex: 2 1 auto;
    cursor: text;
    margin: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    /* display: flex; */
    min-height: 56px;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
`;

export const PhoneNumTitle = styled.div`
    position: relative;
    transform-origin: 0% 0%;
    top:8px;
    left: 18px;
    flex:1;
    right: 12px;
    margin: 0;
    padding: 0 ;
    font-size: 12px;
    line-height: 16px;

    span {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #717171;
    }
`;

export const InputWrapper = styled.input.attrs({
    placeholder: "+1 (XXX)-XXX-XXXX"
})`   
    /* flex:2; */
    /* display: flex; */
    border: none;
    padding: 0;
    margin:0;
    width:100%;
    height:100%;
    /* input{
        border: none;
        padding: 0;
        min-height: 56px;
        width: 100%;
        outline: none;
    } */
`;


export const LoginInfosWrap = styled.div`
    margin-top: 8px;


    span {
        color: rgb(34, 34, 34);
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
        /* text-decoration: underline; */
    }
`;

export const PolicyLink = styled(Link)`
    color:#000;
    text-decoration: underline;
    cursor: pointer;
`;

export const ContinueBtnWrap = styled.div`
    margin-bottom: 24px;
    margin-top: 16px;
`;

export const ContinueBtn = styled.button`
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    padding: 14px 24px;
    border: none;
    background: #de1162;
    cursor: pointer;
    margin: 0;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    width:100%;
    
span{
    color:#fff;
}

`;
export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const ModalCloseBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;



export const ModalMainText = styled.p`
  margin: 0;
  padding: 0;
  color: gray;
`;





// ----------Type of Place--------------


export const PlaceInput = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 0;

  &:hover {
    border: 1px solid #000;
  }
`;

export const PlaceInputText = styled.span`
  /* display: block; */
  margin-left: 10px;
  /* margin-bottom: 10px; */
  line-height: 80%;
  width: 80%;
  display: flex;
  align-items: center;

  p {
    /* display: flex;
    align-items: center; */
    /* justify-content:center; */
    margin: 0;
    /* padding: 0; */
    font-size: 16px;
    /* margin-bottom: 8px; */
  }

  span {
    font-size: 13px;
    color: gray;
  }
`;

export const PlaceNameText = styled.span`
  display: block;
  margin-left: 10px;
  /* margin-bottom: 10px; */
  line-height: 80%;
  width: 80%;

  p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    margin-bottom: 8px;
  }

  span {
    font-size: 13px;
    color: gray;
  }
`;

export const PlaceDivider = styled.div`
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    span {
        
    }
`;
