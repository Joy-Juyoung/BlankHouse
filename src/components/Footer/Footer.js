import React, { useEffect, useState } from 'react';
import {
  FooterContainer,
  FooterLong,
  FooterLongWrap,
  FooterShort,
  FooterShortWrap,
} from './FooterStyle';
import FooterSupport from './FooterSupport';
import FooterBottom from './FooterBottom';
import {
  FooterSmallContainer,
  FooterSmallLong,
  FooterSmallLongWrap,
  FooterSmallShort,
  FooterSmallShortWrap,
} from './FooterSmallStyle';

const Footer = ({ isPageMain }) => {
  return (
    <>
      {isPageMain ? (
        <FooterContainer>
          <FooterLong>
            <FooterLongWrap>
              <FooterSupport />
            </FooterLongWrap>
          </FooterLong>
          <FooterShort>
            <FooterShortWrap>
              <FooterBottom />
            </FooterShortWrap>
          </FooterShort>
        </FooterContainer>
      ) : (
        <FooterSmallContainer>
          <FooterSmallLong>
            <FooterSmallLongWrap>
              <FooterSupport isPageMain={isPageMain} />
            </FooterSmallLongWrap>
          </FooterSmallLong>
          <FooterSmallShort>
            <FooterSmallShortWrap>
              <FooterBottom />
            </FooterSmallShortWrap>
          </FooterSmallShort>
        </FooterSmallContainer>
      )}
    </>
  );
};

export default Footer;
