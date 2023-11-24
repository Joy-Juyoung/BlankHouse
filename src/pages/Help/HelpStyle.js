import styled, { css } from 'styled-components';

export const HelpContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
  min-height: 100vh;
`;

export const HelpHeader = styled.div`
  height: 80px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HelpLogoWrapper = styled.div`
  height: 100%;
  /* position: relative; */
  display: flex;
  align-items: center;

  img {
    height: 40%;
    cursor: pointer;
  }

  span {
    margin-left: 5px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const HelpButtonsWrapper = styled.div`
  button {
    border: 1px solid #bbbb;
    border-radius: 10px;
    background: none;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

// ----footer

export const HelpFooter = styled.div`
  position: fixed;
  bottom: 0;
  height: 80px;
  max-width: 1150px;
  width: 100%;
  background: #fff;
  /* margin: 0 auto; */
  /* margin: 0 40px; */
`;

export const HelpFooterWrap = styled.div`
  width: 100%;
  height: 100%;
`;

// ---------------
export const HelpMainWrap = styled.div`
  padding: 0 40px;
  /* width: 100%; */
`;

export const HelpMainTop = styled.div`
  height: 200px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HelpMainTitle = styled.h1`
  font-size: 45px;
  text-align: center;
`;

export const HelpMainSearch = styled.div`
  border: 1px solid #bbbb;
  border-radius: 50px;
  padding: 10px 20px;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HelpSearchWrapper = styled.div`
  input {
    outline: none;
    border: none;
    font-size: 16px;
  }

  button {
    display: flex;
    align-items: center;

    border: none;
    border-radius: 50%;
    background: #ffae00;
    color: #fff;
    padding: 10px;
    cursor: pointer;
  }
`;

export const HelpMainNav = styled.div`
  display: flex;
  align-items: center;
  margin: 80px 0 20px 0;
  /* padding: 15px 0; */
  border-bottom: 1px solid #bbbb;
`;

export const HelpNavWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
`;

export const HelpNav = styled.div`
  margin-right: 20px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #000;
    font-weight: 600;
  }
`;

export const HelpMainContents = styled.div``;

export const HelpContentsTitle = styled.h2``;

export const HelpContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  align-items: center;

  &.qna {
    display: flex;
  }
`;

export const HelpContentsList = styled.div`
  border-bottom: 1px solid #bbbb;
  height: 100%;
  padding-bottom: 10px;

  p {
    text-decoration: underline;
    font-weight: 600;
  }

  span {
    color: gray;
    font-size: 14px;
  }
`;

export const HelpMoreBtn = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;

  button {
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    color: #fff;
    background: #000;
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
      display: flex;
      align-items: center;
      margin-right: 5px;
    }
  }
`;

export const HelpQnaList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto 20px;
  color: #bdbdbd;

  p {
  }
`;
