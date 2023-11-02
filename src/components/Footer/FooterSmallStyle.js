import styled from 'styled-components';

export const FooterSmallContainer = styled.div`
  background: #f7f7f7;
  /* position: ${({ smallpage }) => (smallpage ? '' : 'fixed')};
  bottom: ${({ smallpage }) => (smallpage ? '' : '0')};
  width: ${({ smallpage }) => (smallpage ? '' : '100%')}; */
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const FooterSmallLong = styled.div`
  border-top: 1px solid #dddd;
  padding: 0 80px;
  margin: 0 auto;
  padding: 40px 0;
  /* display: ${({ smallpage }) => (smallpage ? '' : 'none')}; */

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const FooterSmallLongWrap = styled.div`
  /* font-size: 14px; */
  margin: 0 auto;
  max-width: 1120px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
`;

export const FooterL = styled.div``;

export const LongTitle = styled.div`
  font-weight: 600;
  margin-bottom: 15px;
`;

export const LongList = styled.div`
  margin-bottom: 10px;
`;

export const FooterSmallShort = styled.div`
  border-top: 1px solid #dddd;
  padding: 0 80px;

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const FooterSmallShortWrap = styled.div`
  margin: 0 auto;
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
`;

export const FooterS = styled.div`
  display: flex;

  span {
    display: flex;
    align-items: center;
  }
`;
