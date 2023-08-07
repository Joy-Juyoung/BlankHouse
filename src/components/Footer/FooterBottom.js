import React, { useEffect, useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FooterS } from './FooterStyle';
import { Link, useLocation } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <>
      <FooterS>
        <Link to='/test'>
          <span>© 2023 BlankHouse, Inc.</span>
        </Link>
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
    </>
  );
};

export default FooterBottom;
