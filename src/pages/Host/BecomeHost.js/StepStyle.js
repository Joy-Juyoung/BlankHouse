import styled from 'styled-components';

export const BecomeContainer = styled.div`
  max-width: 1450px;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
  min-height: 100vh;
`;

export const BecomeHeader = styled.div`
  height: 80px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  img {
    height: 50%;
    cursor: pointer;
  }
`;

export const ButtonsWrapper = styled.div`
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

export const BecomeFooter = styled.div`
  position: fixed;
  bottom: 0;
  height: 80px;
  max-width: 1450px;
  width: 100%;
`;

export const BecomeFooterWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const BecomeProgress = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

export const Progressbar = styled.div`
  width: 100%;
  /* width: 100vw; */

  height: 5px;
  background: #dddd;
  margin-right: 10px;

  &.last {
    margin-right: 0;
  }
`;

export const BecomeBtns = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  padding: 0 40px;
`;

export const BackBtn = styled.div`
  button {
    font-weight: 600;
    font-size: 16px;
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const NextBtn = styled.div`
  button {
    font-weight: 600;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    padding: 10px 25px;
    background: #000;
    color: #fff;
    cursor: pointer;
  }
`;

// --------Step

export const WholePageContents = styled.div`
  margin: 0 auto;
  padding: 100px;
`;

export const StepMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  align-items: center;
  margin-top: 160px;
`;

export const StepMainWrapper = styled.div`
  span {
    font-weight: 600;
    font-size: 16px;
  }
  h1 {
    font-size: 45px;
  }
  p {
    font-size: 18px;
  }
`;

export const StepVideo = styled.div`
  width: 100%;
`;

export const StepVideoContents = styled.video`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;
