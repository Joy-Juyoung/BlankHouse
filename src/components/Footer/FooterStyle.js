import styled from 'styled-components';

// export const FooterContainer = styled.div`
//   /* height: 80px; */
//   border-top: 1px solid lightgray;

//   /* padding: 0 40px; */
//   padding: ${({ pagesmall }) => (pagesmall ? '0 80px' : '0 40px')};

//   a {
//     text-decoration: none;
//   }

//   @media screen and (max-width: 1280px) {
//     padding: 0 40px;
//   }
// `;

// export const FooterWrap = styled.div`
//   height: 100%;
//   margin: 0 auto;

//   max-width: ${({ pagesmall }) => (pagesmall ? '1120px' : '1700px')};
// `;

export const FooterContainer = styled.div`
  background: ${({ pagesmall }) => (pagesmall ? '#f7f7f7' : '#fff')};
  position: ${({ pagesmall }) => (pagesmall ? '' : 'fixed')};
  bottom: ${({ pagesmall }) => (pagesmall ? '' : '0')};
  width: ${({ pagesmall }) => (pagesmall ? '' : '100%')};
`;

export const FooterLong = styled.div`
  border-top: 1px solid #dddd;
  padding: ${({ pagesmall }) => (pagesmall ? '0 80px' : '0 40px')};
  margin: 0 auto;
  padding: 40px 0;
  display: ${({ pagesmall }) => (pagesmall ? '' : 'none')};

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const FooterLongWrap = styled.div`
  /* font-size: 14px; */
  margin: 0 auto;
  max-width: ${({ pagesmall }) => (pagesmall ? '1120px' : '1700px')};

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

export const FooterShort = styled.div`
  border-top: 1px solid #dddd;
  padding: ${({ pagesmall }) => (pagesmall ? '0 80px' : '0 40px')};

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
`;

export const FooterShortWrap = styled.div`
  margin: 0 auto;
  max-width: ${({ pagesmall }) => (pagesmall ? '1120px' : '1700px')};

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
