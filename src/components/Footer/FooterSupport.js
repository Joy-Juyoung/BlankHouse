import React, { useEffect, useState } from 'react';
import { FooterL, FooterS, LongBtn, LongList, LongTitle } from './FooterStyle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FooterSupport = ({ isPageMain }) => {
  return (
    <>
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
        {/* {!isPageMain && (
          <LongBtn>
            <KeyboardArrowUpIcon />
            <span>Top</span>
          </LongBtn>
        )} */}
      </FooterL>
    </>
  );
};

export default FooterSupport;
