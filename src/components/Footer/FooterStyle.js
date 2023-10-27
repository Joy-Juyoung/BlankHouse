import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const FooterLong = styled.div`
  border-top: 1px solid #dddd;
  padding: 0 40px;
  margin: 0 auto;
  padding: 40px 0;
  display: none;

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const FooterLongWrap = styled.div`
  /* font-size: 14px; */
  margin: 0 auto;
  max-width: 1700px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
`;

export const FooterL = styled.div``;

export const LongBtn = styled.div`
  /* cursor: pointer;
  width: 40px;
  height: 50px;
  background: #000;
  color: #fff;
  border-radius: 50%;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px; */
`;

export const LongTitle = styled.div`
  font-weight: 600;
  margin-bottom: 15px;
`;

export const LongList = styled.div`
  margin-bottom: 10px;
`;

export const FooterShort = styled.div`
  border-top: 1px solid #dddd;
  padding: 0 40px;
  /* 
  position: fixed;
  bottom: 0; */

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const FooterShortWrap = styled.div`
  margin: 0 auto;
  max-width: 1700px;

  display: flex;
  justify-content: space-between;
`;

export const FooterS = styled.div`
  display: flex;
  padding: 10px 0;

  span {
    display: flex;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;

    &.logo {
      background: #000;
      padding: 5px;
      border-radius: 5px;

      img {
        width: 20px;
      }
    }

    &.last {
      margin-right: 0;
    }

    a {
      display: flex;
      align-items: center;
      color: #000;
    }
  }
`;
