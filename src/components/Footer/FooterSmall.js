import React, { useEffect, useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FooterL, FooterS, LongList, LongTitle } from './FooterStyle';
import { useLocation } from 'react-router-dom';
import {
  FooterSmallContainer,
  FooterSmallLong,
  FooterSmallLongWrap,
  FooterSmallShort,
  FooterSmallShortWrap,
} from './FooterSmallStyle';

const FooterSmall = () => {
  return (
    <>
      <FooterSmallContainer>
        <FooterSmallLong>
          <FooterSmallLongWrap>
            <FooterL>
              <LongTitle>Support</LongTitle>
              <LongList>Help Centre</LongList>
              <LongList>BlankCover</LongList>
              <LongList>Supporting people with disabilities</LongList>
              <LongList>Cancellation options</LongList>
              <LongList>Our COVID-19 Response</LongList>
              <LongList>Report a neighbourhood concern</LongList>
            </FooterL>
            <FooterL>
              <LongTitle>Community</LongTitle>
              <LongList>Disaster relief housing</LongList>
              <LongList>Combating discrimination</LongList>
            </FooterL>
            <FooterL>
              <LongTitle>Hosting</LongTitle>
              <LongList>Blankhouse your home</LongList>
              <LongList>BlankCover for Hosts</LongList>
              <LongList>Explore hosting resources</LongList>
              <LongList>Visit our community forum</LongList>
              <LongList>How to host responsibly</LongList>
            </FooterL>
            <FooterL>
              <LongTitle>BlankHouse</LongTitle>
              <LongList>Newsroom</LongList>
              <LongList>Learn about new features</LongList>
              <LongList>Letter from our founders</LongList>
              <LongList>Careers</LongList>
              <LongList>Investors</LongList>
              <LongList>Gift cards</LongList>
            </FooterL>
          </FooterSmallLongWrap>
        </FooterSmallLong>
        <FooterSmallShort>
          <FooterSmallShortWrap>
            <FooterS>
              <span>© 2023 BlankHouse, Inc.</span>
              <span>Privacy</span>
              <span>Terms</span>
              <span>Sitemap</span>
            </FooterS>
            <FooterS>
              <span>
                <LanguageIcon />
                <p>English(CA)</p>
              </span>
              <span>
                <p>$</p>
                <p>CAD</p>
              </span>
              <span>
                <FacebookIcon />
              </span>
              <span>
                <TwitterIcon />
              </span>
              <span>
                <InstagramIcon />
              </span>
            </FooterS>
          </FooterSmallShortWrap>
        </FooterSmallShort>
        {/* </FooterWrap>
    </FooterContainer> */}
      </FooterSmallContainer>
    </>
  );
};

export default FooterSmall;
